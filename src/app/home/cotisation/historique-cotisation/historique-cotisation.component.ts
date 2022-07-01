import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { ApiService } from 'src/app/service/api.service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { DetailsMembreComponent } from '../../membre/details-membre/details-membre.component';

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
  loading_add_membre = false
  select_all:any={
    encaissees:false,
    non_encaissees:false
  }
  loading_cloture_periode=false
  bsModalRef?: BsModalRef;
  constructor(public api: ApiService, private http: HttpClient, private a_route: ActivatedRoute, private modalService: BsModalService) {
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
  init_component(){
    this.api.selected_membres=[]
    this.select_all={
      encaissees:false,
      non_encaissees:false
    }
  }
  periode_change(selected_id_periode: any) {
    this.id_periode = selected_id_periode
    this.init_component()
    this.get_cotisation({
      id_tontine: this.api.user_connected.id_tontine,
      id_periode: selected_id_periode
    })
  }
  changement_select_montant(une_cotisation: any) {
    if (!une_cotisation.date_cotisation) {
      var suggest_date = moment().format("YYYY-MM-DD")
      console.log(suggest_date)
      une_cotisation.date_cotisation = suggest_date
    }
  }
  changement_date(une_cotisation: any) {
  }
  enregistrer_cotisation() {
    var params = {
      id_tontine: this.api.user_connected.id_tontine,
      id_periode: this.id_periode,
      membres: JSON.stringify(this.api.selected_membres)
    }

    console.log("Params= ", params)
    if (this.api.selected_membres.length > 0) {
      this.add_cotisation(params)
    } else {
      alert("La selection est vide")
    }
  }
  add_cotisation(cotisation: any) {
    //transformation des parametres à envoyer
    let formdata = new FormData()
    for (const key in cotisation) {
      formdata.append(key, cotisation[key])
    }

    let api_url = this.api.taf_url + "cotisation/add_list"
    this.http.post(api_url, formdata).subscribe((reponse: any) => {
      this.loading_add_membre = false;
      //when success
      if (reponse.status) {
        console.log(reponse)
        alert("Opération effectuée avec succés sur la table cotisation")
        this.update_encaissees_non_encaissees(reponse.data)
      } else {
        console.log("L'opération sur la table cotisation a échoué. Réponse = ", reponse)
      }
    },
      (error: any) => {
        this.loading_add_membre = false;
        //when error
        console.log("Erreur inconnue! ", error)
      })
  }
  update_encaissees_non_encaissees(reponse: any) {
    for (const un_membre of this.api.selected_membres) {
      // ajouter sur la liste des encaissee
      this.api.les_cotisations.encaissees.push(un_membre)
      // effacer sur la liste des nons encaisses
      var index = this.api.les_cotisations.non_encaissees.indexOf(un_membre)
      this.api.les_cotisations.non_encaissees.splice(index, 1)
    }
  }
  clique_une_cotisation(une_cotisation: any) {
    if (une_cotisation.checked) { // decocher
      this.api.selected_membres.push(une_cotisation)
    } else { // cocher
      this.api.selected_membres.splice(this.api.selected_membres.indexOf(une_cotisation), 1)
    }
    une_cotisation.checked = !une_cotisation.checked
  }
  clique_une_cotisation_2(une_cotisation: any) {
    if (!une_cotisation.checked) { // cocher
      this.api.selected_membres.push(une_cotisation)
    } else { // decocher
      this.api.selected_membres.splice(this.api.selected_membres.indexOf(une_cotisation), 1)
    }
    une_cotisation.checked = !une_cotisation.checked
    this.update_values(une_cotisation)
  }
  update_values(une_cotisation: any) {
    if (!une_cotisation.date_cotisation) {
      var suggest_date = moment().format("YYYY-MM-DD")
      une_cotisation.date_cotisation = suggest_date
    }
    if (!une_cotisation.montant) {
      une_cotisation.montant = "10"
    }
  }
  cloturer_cotisation(){
    var params:any={
      id_periode:this.id_periode,
      id_membre:this.api.user_connected.id_membre,
      id_tontine:this.api.user_connected.id_tontine,
      mois_actuel:this.api.selected_periode.mois,
      annee_actuelle:this.api.selected_periode.annee
    }
    this.loading_cloture_periode=true;
    //transformation des parametres à envoyer
    let formdata = new FormData()
    for (const key in params) {
      formdata.append(key, params[key])
    }

    let api_url = this.api.taf_url+"periode/cloturer" 
    this.http.post(api_url, formdata).subscribe((reponse: any) => {
      this.loading_cloture_periode=false;
      //when success
      if(reponse.status){
        this.api.selected_periode.etat_periode=1
        console.log("resultat cloture= ",reponse)
        alert("Opération effectuée avec succés")
      }else{
        console.log("L'opération sur la table periode a échoué. Réponse = ",reponse)
      }
    },
    (error: any) => {
      this.loading_cloture_periode=false;
      //when error
      console.log("Erreur inconnue! ", error)
    })
  }
  select_all_encaissees(){
    this.select_all.encaissees=!this.select_all.encaissees
  }
  select_all_non_encaissees(){
    this.select_all.non_encaissees=!this.select_all.non_encaissees
    console.log(" èèèè= ",this.select_all.non_encaissees)
    // this.select_all.non_encaissees=!this.select_all.non_encaissees
    for (const un_membre of this.api.les_cotisations.non_encaissees) {
      this.clique_une_cotisation_2(un_membre)
    } 
  }
  openModalWithComponent(membre:any) {
    const initialState: ModalOptions = {
      initialState: {
        membre:membre
      }
    };
    this.bsModalRef = this.modalService.show(DetailsMembreComponent, initialState);
    // this.bsModalRef.content.closeBtnName = 'Close';
  }
}
