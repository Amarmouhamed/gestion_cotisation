import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-membre',
  templateUrl: './add-membre.component.html',
  styleUrls: ['./add-membre.component.css']
})
export class AddMembreComponent implements OnInit {
  reactiveForm_add_membre!: FormGroup;
  submitted: boolean = false
  loading_add_membre: boolean = false
  constructor(private formBuilder: FormBuilder, public api: ApiService, private http: HttpClient) { }

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
      id_etat: ["", Validators.required],
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
    membre.id_tontine=this.api.user_connected.id_tontine
    this.add_membre(membre)
  }
  // vider le formulaire
  onReset_add_membre() {
    this.submitted = false;
    this.reactiveForm_add_membre.reset();
  }
  add_membre(membre: any){
    this.loading_add_membre=true;
    //transformation des parametres à envoyer
    let formdata = new FormData()
    for (const key in membre) {
      formdata.append(key, membre[key])
    }

    let api_url = this.api.taf_url+"membre/add" 
    this.http.post(api_url, formdata).subscribe((reponse: any) => {
      this.loading_add_membre=false;
      //when success
      if(reponse.status){
        this.onReset_add_membre()
        alert("Opération effectuée avec succés")
      }else{
        console.log("L'opération sur la table membre a échoué. Réponse = ",reponse)
      }
    },
    (error: any) => {
      this.loading_add_membre=false;
      //when error
      console.log("Erreur inconnue! ", error)
    })
  }

}
