import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-edit-membre',
  templateUrl: './edit-membre.component.html',
  styleUrls: ['./edit-membre.component.css']
})
export class EditMembreComponent implements OnInit {

  reactiveForm_add_membre!: FormGroup;
  submitted: boolean = false
  loading_add_membre: boolean = false
  membre: any = {}
  constructor(private formBuilder: FormBuilder, public api: ApiService, private http: HttpClient, private a_route: ActivatedRoute) {
    a_route.params.subscribe((params: any) => {
      if (params.id_membre) {
        this.get_one_membre(params.id_membre)
      } else {
        alert("Parametre manquant")
      }

    })
  }

  ngOnInit(): void {
    this.init_form()

  }
  init_form() {
    this.reactiveForm_add_membre = this.formBuilder.group({

      prenom: ["", Validators.required],
      nom: ["", Validators.required],
      adresse: ["", Validators.required],
      poste: [""],
      numero: ["", Validators.required],
      matricule: ["", Validators.required],
      etat: [""],
      adhesion: [""]
    });
  }

  // acces facile au champs de votre formulaire
  get f(): any { return this.reactiveForm_add_membre.controls; }
  // validation du formulaire
  onSubmit_add_membre() {
    this.submitted = true;
    console.log(this.reactiveForm_add_membre.value)
    // stop here if form is invalid
    if (this.reactiveForm_add_membre.invalid) {
      return;
    }
    var membre = this.reactiveForm_add_membre.value
    membre.id_membre=this.membre.id_membre
    this.edit_membre(membre)
  }
  // vider le formulaire
  onReset_add_membre() {
    this.submitted = false;
    this.reactiveForm_add_membre.reset();
  }
  edit_membre(membre: any) {
    this.loading_add_membre = true;
    //transformation des parametres à envoyer
    let formdata = new FormData()
    for (const key in membre) {
      formdata.append(key, membre[key])
    }

    let api_url = this.api.taf_url+"membre/edit"
    this.http.post(api_url, formdata).subscribe((reponse: any) => {
      this.loading_add_membre = false;
      //when success
      if (reponse.status) {
        this.onReset_add_membre()
        alert("Opération effectuée avec succés")
      } else {
        console.log("L'opération sur la table membre a échoué. Réponse = ", reponse)
      }
    },
      (error: any) => {
        this.loading_add_membre = false;
        //when error
        console.log("Erreur inconnue! ", error)
      })
  }

  get_one_membre(id: number) {
    let api_url = this.api.taf_url + "membre/get?id_membre=" + id;   //recevoir tout

    this.http.get(api_url).subscribe((reponse: any) => {
      //when success
      if (reponse.status) {
        this.membre = reponse.data[0]
        this.update_form(this.membre)
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

  update_form(membre: any) {
    this.reactiveForm_add_membre.setValue({
      prenom: membre.prenom,
      nom: membre.nom,
      adresse: membre.adresse,
      poste: membre.poste,
      numero: membre.numero,
      matricule: membre.matricule,
      etat: membre.etat,
      adhesion: membre.adhesion
    })
  }
}
