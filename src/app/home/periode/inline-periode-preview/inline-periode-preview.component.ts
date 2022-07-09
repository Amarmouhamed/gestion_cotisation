import { Component, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-inline-periode-preview',
  templateUrl: './inline-periode-preview.component.html',
  styleUrls: ['./inline-periode-preview.component.css']
})
export class InlinePeriodePreviewComponent implements OnInit {
  @Output()
  les_periodes:any=[]
  constructor() { }

  ngOnInit(): void {
  }

  go_left() {
    var liste = document.getElementsByClassName("liste_inline")[0];
    liste.scrollLeft -= 100;
  }
  go_right() {
    var liste = document.getElementsByClassName("liste_inline")[0];
    liste.scrollLeft += 100;
  }
  generer_periode(date_debut_string:string,nombre_mois:number){
    var res=[]
    var date_debut=moment(date_debut_string)
    var i=0
    while ( i<nombre_mois) {
      i++
      res.push( {
        mois:date_debut.month()+1,
        annee:date_debut.year()
      })
      date_debut=date_debut.add(1,"M")
    }
    this.les_periodes=res
  }
}
