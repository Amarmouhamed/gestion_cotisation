import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ApiService } from 'src/app/service/api.service';
import { InlinePeriodePreviewComponent } from '../inline-periode-preview/inline-periode-preview.component';

@Component({
  selector: 'app-add-periode',
  templateUrl: './add-periode.component.html',
  styleUrls: ['./add-periode.component.css']
})
export class AddPeriodeComponent implements OnInit {
  reactiveForm_add_periode!: FormGroup;
  submitted: boolean = false
  loading_add_periode: boolean = false
  les_periodes:any=[]
  constructor(private formBuilder: FormBuilder, public api: ApiService, private http: HttpClient, private route:Router) { }

  ngOnInit(): void {
    this.init_form()
  }
  init_form() {
    this.reactiveForm_add_periode = this.formBuilder.group({
      date_debut: ["", Validators.required],
      nombre_periode: ["", Validators.required],
    });
  }

  // acces facile au champs de votre formulaire
  get f(): any { return this.reactiveForm_add_periode.controls; }
  // validation du formulaire
  onSubmit_add_periode() {
    this.submitted = true;
    console.log(this.reactiveForm_add_periode.value)
    // stop here if form is invalid
    if (this.reactiveForm_add_periode.invalid) {
      return;
    }
    var periode = this.reactiveForm_add_periode.value
    periode.id_tontine=this.api.user_connected.tontine.id_tontine
    periode.id_createur=this.api.user_connected.id_membre
    periode.periodes=JSON.stringify(this.les_periodes)
    console.log(periode)
    this.add_periode(periode)
  }
  // vider le formulaire
  onReset_add_periode() {
    this.submitted = false;
    this.reactiveForm_add_periode.reset();
  }
  add_periode(periode: any) {
    this.loading_add_periode = true;
    //transformation des parametres à envoyer
    let formdata = new FormData()
    for (const key in periode) {
      formdata.append(key, periode[key])
    }

    let api_url = this.api.taf_url+"periode/add_list"
    this.http.post(api_url, formdata).subscribe((reponse: any) => {
      this.loading_add_periode = false;
      //when success
      if (reponse.status) {
        alert("Opération effectuée avec succés")
        console.log("Opération effectuée avec succés sur la table periode. Réponse = ", reponse)
        this.onReset_add_periode()
        this.route.navigate(["/accueil/parametre"])
      } else {
        console.log("L'opération sur la table periode a échoué. Réponse = ", reponse)
        alert("Echec de gérération des périodes")
      }
    },
      (error: any) => {
        this.loading_add_periode = false;
        //when error
        console.log("Erreur inconnue! ", error)
      })
  }
  changement(){
    if (!this.reactiveForm_add_periode.invalid) {
      var periode = this.reactiveForm_add_periode.value
      this.generer_periode(periode.date_debut,periode.nombre_periode)
    }
  }
  go_left() {
    var liste = document.getElementsByClassName("liste_inline")[0];
    liste.scrollLeft -= 100;
  }
  go_right() {
    var liste = document.getElementsByClassName("liste_inline")[0];
    liste.scrollLeft += 100;
  }
  generer_periode(date_debut_string:string,nombre_mois:number){
    var res=[]
    var date_debut=moment(date_debut_string)
    var i=0
    while ( i<nombre_mois) {
      i++
      res.push( {
        mois:date_debut.month()+1,
        annee:date_debut.year()
      })
      date_debut=date_debut.add(1,"M")
    }
    this.les_periodes=res
  }
}
