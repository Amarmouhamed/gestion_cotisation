import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/service/api.service';
import { DetailsMembreComponent } from '../../membre/details-membre/details-membre.component';

@Component({
  selector: 'tr[app-item-cotisation-non-encaissee]',
  templateUrl: './item-cotisation-non-encaissee.component.html',
  styleUrls: ['./item-cotisation-non-encaissee.component.css']
})
export class ItemCotisationNonEncaisseeComponent implements OnInit {

  @Input()
  une_cotisation:any={}
  @Input()
  index:any={}
  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService, public api:ApiService) { }

  ngOnInit(): void {
  }

  openModalWithComponent(membre:any) {
    const initialState: ModalOptions = {
      initialState: {
        membre:membre
      }
    };
    this.bsModalRef = this.modalService.show(DetailsMembreComponent, initialState);
  }
  clique_une_cotisation_2(une_cotisation: any) {
    if (!une_cotisation.checked) { // cocher
      this.api.selected_membres.push(une_cotisation)
    } else { // decocher
      this.api.selected_membres.splice(this.api.selected_membres.indexOf(une_cotisation), 1)
    }
    une_cotisation.checked = !une_cotisation.checked
    this.update_values(une_cotisation)
  }
  update_values(une_cotisation: any) {
    if (!une_cotisation.date_cotisation) {
      var suggest_date = moment().format("YYYY-MM-DD")
      une_cotisation.date_cotisation = suggest_date
    }
    if (!une_cotisation.montant) {
      une_cotisation.montant = "10"
    }
  }
  changement_select_montant(une_cotisation: any) {
    if (!une_cotisation.date_cotisation) {
      var suggest_date = moment().format("YYYY-MM-DD")
      console.log(suggest_date)
      une_cotisation.date_cotisation = suggest_date
    }
  }
}
