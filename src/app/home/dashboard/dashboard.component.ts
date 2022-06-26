import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { GraphEvolutionMontantGlobalComponent } from './graph-evolution-montant-global/graph-evolution-montant-global.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild(GraphEvolutionMontantGlobalComponent) gemg!:GraphEvolutionMontantGlobalComponent
  
  constructor(public api: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
    this.get_dashboard(this.api.user_connected.id_tontine)
  }
  get_dashboard(id_tontine: number) {
    let api_url = this.api.taf_url + "membre/dashboard?id_tontine=" + id_tontine;   //recevoir tout

    this.http.get(api_url).subscribe((reponse: any) => {
      //when success
      if (reponse.status) {
        this.api.dashboard_data = reponse.data

        this.gemg.update_chart( [
          ['Mois', "Motant Attendu", 'Montant Recu'],
          ['02-22', 100000, 50000],
          ['03-22', 100000, 100000],
          ['04-22', 130000, 80000],
          ['05-22', 130000, 59000],
          ['06-22', 130000, 122000],
        ])
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

}
