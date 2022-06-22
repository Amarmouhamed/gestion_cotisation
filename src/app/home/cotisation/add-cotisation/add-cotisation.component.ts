import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-cotisation',
  templateUrl: './add-cotisation.component.html',
  styleUrls: ['./add-cotisation.component.css']
})
export class AddCotisationComponent implements OnInit {


  reactiveForm_add_cotisation!: FormGroup;
  submitted: boolean = false
  loading_add_cotisation: boolean = false
  constructor(private formBuilder: FormBuilder, public api: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
    this.init_form()
  }
  init_form() {
    this.reactiveForm_add_cotisation = this.formBuilder.group({
      id_membre: ["", Validators.required],
      montant: ["", Validators.required],
      mois: ["", Validators.required],
      annee: ["", Validators.required],
    });
  }

  // acces facile au champs de votre formulaire
  get f(): any { return this.reactiveForm_add_cotisation.controls; }
  // validation du formulaire
  onSubmit_add_cotisation() {
    this.submitted = true;
    console.log(this.reactiveForm_add_cotisation.value)
    // stop here if form is invalid
    if (this.reactiveForm_add_cotisation.invalid) {
      return;
    }
    var cotisation = this.reactiveForm_add_cotisation.value
    this.add_cotisation(cotisation)
  }
  // vider le formulaire
  onReset_add_cotisation() {
    this.submitted = false;
    this.reactiveForm_add_cotisation.reset();
  }
  add_cotisation(cotisation: any) {
    this.loading_add_cotisation = true;
    //transformation des parametres à envoyer
    let formdata = new FormData()
    for (const key in cotisation) {
      formdata.append(key, cotisation[key])
    }

    let api_url = this.api.taf_url+"cotisation/add"
    this.http.post(api_url, formdata).subscribe((reponse: any) => {
      this.loading_add_cotisation = false;
      //when success
      if (reponse.status) {
        this.onReset_add_cotisation()
        alert("Opération effectuée avec succés sur la table cotisation")
      } else {
        console.log("L'opération sur la table cotisation a échoué. Réponse = ", reponse)
      }
    },
      (error: any) => {
        this.loading_add_cotisation = false;
        //when error
        console.log("Erreur inconnue! ", error)
      })
  }
}
