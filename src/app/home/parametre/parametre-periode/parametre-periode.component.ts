import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-parametre-periode',
  templateUrl: './parametre-periode.component.html',
  styleUrls: ['./parametre-periode.component.css']
})
export class ParametrePeriodeComponent implements OnInit {
  filter:any={
    periode:""
  }
  constructor(public api:ApiService, private http:HttpClient) { }

  ngOnInit(): void {
    this.get_periode(this.api.user_connected.tontine.id_tontine)
  }
  get_periode(id_tontine: number) {
    let api_url = this.api.taf_url + "periode/get_order?id_tontine=" + id_tontine;   //recevoir tout
    //let api_url="http://localhost/gestion_cotisation_back/taf/periode//get?id_periode=1"; // recevoir le(a) periode d'identifiant 1

    this.http.get(api_url).subscribe((reponse: any) => {
      //when success
      if (reponse.status) {
        this.api.les_periodes = reponse.data
        console.log("Opération effectuée avec succés sur la table periode. Réponse= ", reponse);
      } else {
        console.log("L'opération sur la table periode a échoué. Réponse= ", reponse);
      }
    },
      (error: any) => {
        //when error
        console.log("Erreur inconnue! ", error);
      })
  }

}
