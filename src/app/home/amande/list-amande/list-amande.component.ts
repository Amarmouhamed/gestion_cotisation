import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { DetailsMembreComponent } from '../../membre/details-membre/details-membre.component';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-list-amande',
  templateUrl: './list-amande.component.html',
  styleUrls: ['./list-amande.component.css']
})
export class ListAmandeComponent implements OnInit {
  filter: any = {}
  bsModalRef?: BsModalRef;
  id_periode: number = 0
  loading_add_amande=false
  
  all_membre_selected=false
  les_membres_amande:any=[]
  selected_membres:any=[]
  selected_amandes:any=[]
  loading_payer_amande=false
  all_amande_selected=false
  loading_annuler_amande=false
  current_page:any={
    membre_amande:1,
    encaissees:1,
    non_enaissees:1
  }
  print: any = {
    loading: false,
    titre:"Gestion des cotisations "
  }
  @ViewChild("printer_button") printer_button!: ElementRef;
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
    this.get_membre(this.api.user_connected.id_tontine)
  }
  get_membre(id_tontine: number) {
    let api_url = this.api.taf_url + "membre/with_details?id_tontine=" + id_tontine;   //recevoir tout
    this.http.get(api_url).subscribe((reponse: any) => {
      //when success
      if (reponse.status) {
        this.les_membres_amande = reponse.data
        console.log("Opération effectuée avec succés sur la table membre. Réponse= ", reponse);
      } else {
        console.log("L'opération sur la table membre a échoué. Réponse= ", reponse);
      }
    },
      (error: any) => {
        //when error
        console.log("Erreur inconnue! ", error);
      })
  }

  periode_change(selected_id_periode: any) {
    this.id_periode = selected_id_periode
    this.get_amande({
      id_periode: selected_id_periode,
      id_tontine: this.api.user_connected.id_tontine,
    })
  }
  get_amande(amande: any) {
    let formdata = new FormData()
    for (const key in amande) {
      formdata.append(key, amande[key])
    }
    let api_url = this.api.taf_url + "amande/with_membre";   //recevoir tout
    //let api_url="http://localhost/gestion_cotisation_back/taf/amande//get?id_amande=1"; // recevoir le(a) amande d'identifiant 1

    this.http.post(api_url, formdata).subscribe((reponse: any) => {
      //when success
      if (reponse.status) {
        this.api.les_amandes = reponse.data
        console.log("Opération effectuée avec succés sur la table amande. Réponse= ", reponse);
      } else {
        console.log("L'opération sur la table amande a échoué. Réponse= ", reponse);
      }
    },
      (error: any) => {
        //when error
        console.log("Erreur inconnue! ", error);
      })
  }
  openModalWithComponent(membre: any) {
    const initialState: ModalOptions = {
      initialState: {
        membre: membre
      }
    };
    this.bsModalRef = this.modalService.show(DetailsMembreComponent, initialState);
    // this.bsModalRef.content.closeBtnName = 'Close';
  }
  appliquer_amande(){
    var params = {
      id_tontine: this.api.user_connected.id_tontine,
      id_periode: this.id_periode,
      membres: JSON.stringify(this.selected_membres)
    }

    console.log("Params= ", params)
    if (this.selected_membres.length > 0) {
      this.add_amande(params)
    } else {
      alert("La selection est vide")
    }
  }
  add_amande(amande: any){
    this.loading_add_amande=true;
    //transformation des parametres à envoyer
    let formdata = new FormData()
    for (const key in amande) {
      formdata.append(key, amande[key])
    }

    let api_url = this.api.taf_url+"amande/add_list" 
    this.http.post(api_url, formdata).subscribe((reponse: any) => {
      this.loading_add_amande=false;
      //when success
      if(reponse.status){
        alert("Opération effectuée avec succés")
        console.log("Opération effectuée avec succés sur la table amande. Réponse = ",reponse)
        this.update_listes()
        this.get_amande({
          id_periode: this.id_periode,
          id_tontine: this.api.user_connected.id_tontine,
        })
      }else{
        console.log("L'opération sur la table amande a échoué. Réponse = ",reponse)
      }
    },
    (error: any) => {
      this.loading_add_amande=false;
      //when error
      console.log("Erreur inconnue! ", error)
    })
  }
  update_listes() {
    for (const un_membre of this.selected_membres) {
      // ajouter sur la liste des encaissee
      // this.api.les_amandes.non_encaissees.push(un_membre)
      
      var index = this.les_membres_amande.indexOf(un_membre)
      this.les_membres_amande[index].checked=false
      this.les_membres_amande[index].id_type_amande=undefined
    }
    this.selected_membres=[]
  }
  select_all_membre(){
    this.all_membre_selected=!this.all_membre_selected
    for (const un_membre of this.les_membres_amande) {
      this.clique_un_membre(un_membre)
    } 
  }
  clique_un_membre(un_membre: any) {
    if (!un_membre.checked) { // cocher
      this.selected_membres.push(un_membre)
      this.update_values(un_membre)
    } else { // decocher
      this.selected_membres.splice(this.selected_membres.indexOf(un_membre), 1)
    }
    un_membre.checked = !un_membre.checked
  }
  update_values(un_membre:any){
    if (!un_membre.id_type_amande) {
      un_membre.id_type_amande=2  
    } 
  }
  payer_many_amande(){
    var params = {
      id_tontine: this.api.user_connected.id_tontine,
      id_periode: this.id_periode,
      amandes: JSON.stringify(this.selected_amandes)
    }

    console.log("Params= ", params)
    if (this.selected_amandes.length > 0) {
      this.payer_amande(params)
    } else {
      alert("La selection est vide")
    }
  }
  payer_amande(amande: any) {
    this.loading_payer_amande=true
    //transformation des parametres à envoyer
    let formdata = new FormData()
    for (const key in amande) {
      formdata.append(key, amande[key])
    }

    let api_url = this.api.taf_url+"amande/payer_many_amande"
    this.http.post(api_url, formdata).subscribe((reponse: any) => {
      this.loading_payer_amande=false
      //when success
      if (reponse.status) {
        alert("Opération effectuée avec succés.")
        console.log("Opération effectuée avec succés sur la table amande. Réponse = ", reponse)
        this.update_amande_list()
      } else {
        console.log("L'opération sur la table amande a échoué. Réponse = ", reponse)
      }
    },
      (error: any) => {
      this.loading_payer_amande=false
        //when error
        console.log("Erreur inconnue! ", error)
      })
  }
  select_all_amande(){
    this.all_amande_selected=!this.all_amande_selected
    for (const une_amande of this.api.les_amandes.non_encaissees) {
      this.clique_une_amande(une_amande)
    } 
  }
  clique_une_amande(une_amande: any) {
    if (!une_amande.checked) { // cocher
      this.selected_amandes.push(une_amande)
      this.update_values(une_amande)
    } else { // decocher
      this.selected_amandes.splice(this.selected_amandes.indexOf(une_amande), 1)
    }
    une_amande.checked = !une_amande.checked
  }
  update_amande_list(){
    for (const une_amande of this.selected_amandes) {
      // ajouter sur la liste des encaissee
      this.api.les_amandes.encaissees.push(une_amande)
      
      var index = this.api.les_amandes.non_encaissees.indexOf(une_amande)
      this.api.les_amandes.non_encaissees.splice( index ,1)
    }
    this.selected_amandes=[]
  }
  annuler_many_amande(){
    var params = {
      id_tontine: this.api.user_connected.id_tontine,
      id_periode: this.id_periode,
      amandes: JSON.stringify(this.selected_amandes)
    }

    console.log("Params= ", params)
    if (this.selected_amandes.length > 0) {
      this.annuler_amande(params)
    } else {
      alert("La selection est vide")
    }
  }
  annuler_amande(amande: any) {
    this.loading_payer_amande=true
    //transformation des parametres à envoyer
    let formdata = new FormData()
    for (const key in amande) {
      formdata.append(key, amande[key])
    }

    let api_url = this.api.taf_url+"amande/annuler_many_amande"
    this.http.post(api_url, formdata).subscribe((reponse: any) => {
      this.loading_payer_amande=false
      //when success
      if (reponse.status) {
        alert("Opération effectuée avec succés.")
        console.log("Opération effectuée avec succés sur la table amande. Réponse = ", reponse)
        this.update_annulation_amande_list()
      } else {
        console.log("L'opération sur la table amande a échoué. Réponse = ", reponse)
      }
    },
      (error: any) => {
      this.loading_payer_amande=false
        //when error
        console.log("Erreur inconnue! ", error)
      })
  }
  update_annulation_amande_list(){
    for (const une_amande of this.selected_amandes) {
      var index = this.api.les_amandes.non_encaissees.indexOf(une_amande)
      this.api.les_amandes.non_encaissees.splice( index ,1)
    }
    this.selected_amandes=[]
  }
  clique_print() {
    this.print.loading = true
    this.api.ligne_par_page.amande.encaissee = this.api.les_amandes.encaissees.length
    this.api.ligne_par_page.amande.non_encaissee = this.api.les_amandes.non_encaissees.length
    this.print.titre+=" _ rapport des amandes de la la periode du "+this.api.selected_periode_amande.mois+"-"+this.api.selected_periode_amande.annee+" _ imprimé le "+moment().locale("fr").format('LLL');
    setTimeout(() => {
      this.printer_button.nativeElement.click();
      setTimeout(() => {
        this.print.loading = false
        this.api.ligne_par_page.amande.encaissee = 5
        this.api.ligne_par_page.amande.non_encaissee = 5
      }, 1000);
    }, 3000)
  }
  get_montant_total() {
    var res = 0
    if (this.api.les_amandes?.encaissees?.length > 0) {
      for (const une_amande of this.api.les_amandes.encaissees) {
        res += parseFloat(une_amande.montant)
      }
    }

    return res
  }
}
