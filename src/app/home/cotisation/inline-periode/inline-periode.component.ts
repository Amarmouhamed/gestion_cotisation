import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-inline-periode',
  templateUrl: './inline-periode.component.html',
  styleUrls: ['./inline-periode.component.css']
})
export class InlinePeriodeComponent implements OnInit {
  @Input()
  selected_id_periode: any
  @Output() periode_change = new EventEmitter<string>();
  constructor(private http: HttpClient, public api: ApiService) { }

  ngOnInit(): void {
    this.get_periode(this.api.user_connected.id_tontine)
  }
  get_periode(id_tontine: number) {
    let api_url = this.api.taf_url + "periode/get?id_tontine=" + id_tontine;   //recevoir tout
    //let api_url="http://localhost/gestion_cotisation_back/taf/periode//get?id_periode=1"; // recevoir le(a) periode d'identifiant 1

    this.http.get(api_url).subscribe((reponse: any) => {
      //when success
      if (reponse.status) {
        this.api.les_periodes = reponse.data
        if (this.api.les_periodes.length > 0 && this.selected_id_periode == 0) {// aucune periode selectionnée
          this.select_default_periode()
        } else {
          this.periode_change.emit(this.selected_id_periode)
          this.api.selected_periode = this.get_selected_periode_by_id(this.selected_id_periode)
        }
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

  go_left() {
    var liste = document.getElementsByClassName("liste_inline")[0];
    liste.scrollLeft -= 100;
  }
  go_right() {
    var liste = document.getElementsByClassName("liste_inline")[0];
    liste.scrollLeft += 100;
  }
  select_default_periode() {
    var mois_actuel = moment().month() + 1
    for (const une_periode of this.api.les_periodes) {
      if (mois_actuel == une_periode.mois) {
        this.selected_id_periode = une_periode.id_periode
        this.api.selected_periode = une_periode
        this.periode_change.emit(this.selected_id_periode)
        return
      }
    }
  }
  select_periode(une_periode: any) {
    this.api.selected_periode = une_periode
    this.periode_change.emit(une_periode.id_periode)
  }
  get_selected_periode_by_id(selected_id_periode:number) {
    for (const une_periode of this.api.les_periodes) {
      if (selected_id_periode == une_periode.id_periode) {
        return une_periode
      }
    }
  }
}
