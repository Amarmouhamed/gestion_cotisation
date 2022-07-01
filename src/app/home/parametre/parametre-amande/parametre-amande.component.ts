import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-parametre-amande',
  templateUrl: './parametre-amande.component.html',
  styleUrls: ['./parametre-amande.component.css']
})
export class ParametreAmandeComponent implements OnInit {
  filter: any = {les_type_amandes:""}
  constructor(public api: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
    this.get_type_amande()
  }
  get_type_amande() {
    let api_url = this.api.taf_url + "type_amande/get";
    this.http.get(api_url).subscribe((reponse: any) => {
      //when success
      if (reponse.status) {
        this.api.les_type_amandes = reponse.data
        console.log("Opération effectuée avec succés sur la table type_amande. Réponse= ", reponse);
      } else {
        console.log("L'opération sur la table type_amande a échoué. Réponse= ", reponse);
      }
    },
      (error: any) => {
        //when error
        console.log("Erreur inconnue! ", error);
      })
  }
}
