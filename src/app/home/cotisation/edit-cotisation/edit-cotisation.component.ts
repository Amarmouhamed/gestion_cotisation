import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-edit-cotisation',
  templateUrl: './edit-cotisation.component.html',
  styleUrls: ['./edit-cotisation.component.css']
})
export class EditCotisationComponent implements OnInit {

  reactiveForm_add_cotisation!: FormGroup;
  submitted: boolean = false
  loading_add_cotisation: boolean = false
  cotisation:any={}
  constructor(private formBuilder: FormBuilder, public api: ApiService, private http: HttpClient, private a_route: ActivatedRoute) {
    a_route.params.subscribe((params: any) => {
      if (params.id_cotisation) {
        this.get_one_cotisation(params.id_cotisation)
      } else {
        alert("Parametre manquant")
      }

    })
   }

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
    cotisation.id_cotisation=this.cotisation.id_cotisation
    this.edit_cotisation(cotisation)
  }
  // vider le formulaire
  onReset_add_cotisation() {
    this.submitted = false;
    this.reactiveForm_add_cotisation.reset();
  }
  edit_cotisation(cotisation: any) {
    this.loading_add_cotisation = true;
    //transformation des parametres à envoyer
    let formdata = new FormData()
    for (const key in cotisation) {
      formdata.append(key, cotisation[key])
    }

    let api_url = this.api.taf_url+"cotisation/edit"
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
  get_one_cotisation(id_cotisation:number) {
    let api_url = this.api.taf_url + "cotisation/get?id_cotisation="+id_cotisation;   //recevoir tout

    this.http.get(api_url).subscribe((reponse: any) => {
      //when success
      if (reponse.status) {
        this.cotisation = reponse.data[0]
        this.update_form(this.cotisation)
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

  update_form(cotisation: any) {
    this.reactiveForm_add_cotisation.setValue({
      id_membre: cotisation.id_membre,
      montant:cotisation.montant,
      mois: cotisation.mois,
      annee: cotisation.annee,
    })
  }
}
