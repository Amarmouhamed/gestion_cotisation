import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  reactiveForm_add_membre!: FormGroup;
  submitted: boolean = false
  loading_login_membre: boolean = false
  constructor(private formBuilder: FormBuilder, public api: ApiService, private http: HttpClient, private route:Router) { }

  ngOnInit(): void {
    this.init_form()
  }
  init_form() {
    this.reactiveForm_add_membre = this.formBuilder.group({
      numero: ["", Validators.required],
      password: ["", Validators.required],
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
    this.login_membre(membre)
  }
  // vider le formulaire
  onReset_add_membre() {
    this.submitted = false;
    this.reactiveForm_add_membre.reset();
  }
  login_membre(membre: any) {
    this.loading_login_membre = true;
    //transformation des parametres à envoyer
    let formdata = new FormData()
    for (const key in membre) {
      formdata.append(key, membre[key])
    }

    let api_url = this.api.taf_url+"membre/login"
    this.http.post(api_url, formdata).subscribe((reponse: any) => {
      this.loading_login_membre = false;
      //when success
      if (reponse.status) {
        console.log("Opération effectuée avec succés sur la table membre. Réponse = ", reponse)
        this.api.user_connected=reponse.data
        this.api.save_on_local_storage("user_connected",this.api.user_connected)
        this.route.navigate(["/accueil"])
      } else {
        console.log("L'opération sur la table membre a échoué. Réponse = ", reponse)
      }
    },
      (error: any) => {
        this.loading_login_membre = false;
        //when error
        console.log("Erreur inconnue! ", error)
      })
  }
}
