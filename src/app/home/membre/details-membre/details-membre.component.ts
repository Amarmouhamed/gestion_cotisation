import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-details-membre',
  templateUrl: './details-membre.component.html',
  styleUrls: ['./details-membre.component.css']
})
export class DetailsMembreComponent implements OnInit {
  membre?: any
  loading_add_amande = false
  les_amandes_membre: any = []
  loading_get_amande = false
  les_cotisations_membre: any = []
  loading_get_cotisation = false
  loading_edit_amande = false
  constructor(public bsModalRef: BsModalRef, private http: HttpClient, public api: ApiService) { }

  ngOnInit() {
    this.get_amande(this.membre.id_membre)
    this.get_cotisation(this.membre.id_membre)
  }
  get_amande(id_membre: number) {
    this.loading_get_amande = true
    let api_url = this.api.taf_url + "amande/with_type_amande?id_membre=" + id_membre;
    this.http.get(api_url).subscribe((reponse: any) => {
      this.loading_get_amande = false
      //when success
      if (reponse.status) {
        this.les_amandes_membre = reponse.data
        console.log("Opération effectuée avec succés sur la table amande. Réponse= ", reponse);
      } else {
        console.log("L'opération sur la table amande a échoué. Réponse= ", reponse);
      }
    },
      (error: any) => {
        this.loading_get_amande = false
        //when error
        console.log("Erreur inconnue! ", error);
      })
  }
  amander() {
    this.add_amande({
      id_tontine: this.membre.id_tontine,
      id_membre: this.membre.id_membre,
      id_type_amande: 2,// id de peerturbation
    })
  }
  add_amande(amande: any) {
    this.loading_add_amande = true;
    //transformation des parametres à envoyer
    let formdata = new FormData()
    for (const key in amande) {
      formdata.append(key, amande[key])
    }

    let api_url = this.api.taf_url + "amande/add"
    this.http.post(api_url, formdata).subscribe((reponse: any) => {
      this.loading_add_amande = false;
      //when success
      if (reponse.status) {
        this.membre.montant_amande_total += 5
        console.log("Opération effectuée avec succés sur la table amande. Réponse = ", reponse)
      } else {
        console.log("L'opération sur la table amande a échoué. Réponse = ", reponse)
      }
    },
      (error: any) => {
        this.loading_add_amande = false;
        //when error
        console.log("Erreur inconnue! ", error)
      })
  }

  get_cotisation(id_membre: number) {
    this.loading_get_cotisation = true
    let api_url = this.api.taf_url + "cotisation/with_periode?id_membre=" + id_membre;
    this.http.get(api_url).subscribe((reponse: any) => {
      this.loading_get_cotisation = false
      //when success
      if (reponse.status) {
        this.les_cotisations_membre = reponse.data
        console.log("Opération effectuée avec succés sur la table cotisation. Réponse= ", reponse);
      } else {
        console.log("L'opération sur la table cotisation a échoué. Réponse= ", reponse);
      }
    },
      (error: any) => {
        this.loading_get_cotisation = false
        //when error
        console.log("Erreur inconnue! ", error);
      })
  }
  payer_amande(amande:any) {
    this.edit_amande({
      id_amande:amande.id_amande,
      etat_amande:1
    })
  }
  edit_amande(amande: any) {
    amande.loading=true
    //transformation des parametres à envoyer
    let formdata = new FormData()
    for (const key in amande) {
      formdata.append(key, amande[key])
    }

    let api_url = this.api.taf_url+"amande/payer_amande"
    this.http.post(api_url, formdata).subscribe((reponse: any) => {
      amande.loading = false
      //when success
      if (reponse.status) {
        this.membre.montant_amande_total-=amande.montant
        this.les_amandes_membre.splice(this.les_amandes_membre.indexOf(amande),1)
        console.log("Opération effectuée avec succés sur la table amande. Réponse = ", reponse)
      } else {
        console.log("L'opération sur la table amande a échoué. Réponse = ", reponse)
      }
    },
      (error: any) => {
        amande.loading = false
        //when error
        console.log("Erreur inconnue! ", error)
      })
  }

}
