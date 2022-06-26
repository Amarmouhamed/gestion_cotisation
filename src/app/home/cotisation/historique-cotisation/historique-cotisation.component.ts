import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-historique-cotisation',
  templateUrl: './historique-cotisation.component.html',
  styleUrls: ['./historique-cotisation.component.css']
})
export class HistoriqueCotisationComponent implements OnInit {
  id_periode = 0
  filter: any = {
    encaissees: "",
    non_encaissees: ""
  }
  constructor(public api: ApiService, private http: HttpClient, private a_route: ActivatedRoute) {
    a_route.params.subscribe((params: any) => {
      if (params["id_periode"]) {
        this.id_periode = params["id_periode"]
      } else {
        console.log("Pas de parametre")
      }
    })
  }

  ngOnInit(): void {
    // this.get_cotisation()
  }
  get_cotisation(params: any) {
    let api_url = this.api.taf_url + "cotisation/get_with_membre";   //recevoir tout
    let formdata = new FormData()
    for (const key in params) {
      formdata.append(key, params[key])
    }
    this.http.post(api_url, formdata).subscribe((reponse: any) => {
      //when success
      if (reponse.status) {
        this.api.les_cotisations = reponse.data
        console.log("Opération effectuée avec succés sur la table cotisation. Réponse= ", reponse);
      } else {
        console.log("L'opération sur la table cotisation a échoué. Réponse= ", reponse);
      }
    },
      (error: any) => {
        //when error
        console.log("Erreur inconnue! ", error);
      })
  }
  periode_change(selected_id_periode: any) {
    this.id_periode = selected_id_periode
    this.get_cotisation({
      id_tontine: this.api.user_connected.id_tontine,
      id_periode: selected_id_periode
    })
  }
  changement_select_montant(une_cotisation: any) {
    une_cotisation.updated = true
    if (!une_cotisation.date_cotisation) {
      var suggest_date = moment().format("YYYY-MM-DD")
      console.log(suggest_date)
      une_cotisation.date_cotisation = suggest_date
    } else {

    }
  }
  changement_date(une_cotisation: any) {
    une_cotisation.updated = true
  }
  enregistrer_cotisation( une_cotisation: any) {
    var params = {
      id_membre: une_cotisation.id_membre,
      id_tontine: this.api.user_connected.id_tontine,
      id_periode: this.id_periode,
      montant: une_cotisation.montant,
      date_cotisation: une_cotisation.date_cotisation,
    }

    console.log("Params= ", params)
    if (une_cotisation.montant) {
      this.add_cotisation(params, une_cotisation.loading, une_cotisation)
    } else {
      // 
    }
  }
  add_cotisation(cotisation: any, loading: boolean, une_cotisation: any) {
    //transformation des parametres à envoyer
    loading = true
    let formdata = new FormData()
    for (const key in cotisation) {
      formdata.append(key, cotisation[key])
    }

    let api_url = this.api.taf_url + "cotisation/add"
    this.http.post(api_url, formdata).subscribe((reponse: any) => {
      loading = false;
      //when success
      if (reponse.status) {
        alert("Opération effectuée avec succés sur la table cotisation")
        this.update_encaissees_non_encaissees(une_cotisation)
      } else {
        console.log("L'opération sur la table cotisation a échoué. Réponse = ", reponse)
      }
    },
      (error: any) => {
        loading = false;
        //when error
        console.log("Erreur inconnue! ", error)
      })
  }
  update_encaissees_non_encaissees(une_cotisation: any) {
    this.api.les_cotisations.encaissees.push(une_cotisation)
    for (const c of this.api.les_cotisations.non_encaissees) {
      if (c.id_membre == une_cotisation.id_membre) {
        var index = this.api.les_cotisations.non_encaissees.indexOf(une_cotisation)
        this.api.les_cotisations.non_encaissees.splice(index, 1)
        return
      }
    }

  }
}
