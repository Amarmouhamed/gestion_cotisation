import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-historique-cotisation',
  templateUrl: './historique-cotisation.component.html',
  styleUrls: ['./historique-cotisation.component.css']
})
export class HistoriqueCotisationComponent implements OnInit {

  constructor(public api: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
    this.get_cotisation()
  }
  get_cotisation() {
    let api_url = this.api.taf_url + "cotisation/get_with_membre";   //recevoir tout

    this.http.get(api_url).subscribe((reponse: any) => {
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

}
