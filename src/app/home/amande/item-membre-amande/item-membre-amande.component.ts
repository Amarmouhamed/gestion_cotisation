import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { DetailsMembreComponent } from '../../membre/details-membre/details-membre.component';

@Component({
  selector: 'tr[app-item-membre-amande]',
  templateUrl: './item-membre-amande.component.html',
  styleUrls: ['./item-membre-amande.component.css']
})
export class ItemMembreAmandeComponent implements OnInit {
  @Input()
  un_membre: any = {}
  @Input()
  selected_membres: any = {}
  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModalWithComponent(membre: any) {
    const initialState: ModalOptions = {
      initialState: {
        membre: membre
      }
    };
    this.bsModalRef = this.modalService.show(DetailsMembreComponent, initialState);
    // this.bsModalRef.content.closeBtnName = 'Close';
  }
  clique_un_membre(un_membre: any) {
    if (!un_membre.checked) { // cocher
      this.selected_membres.push(un_membre)
      this.update_values(un_membre)
    } else { // decocher
      this.selected_membres.splice(this.selected_membres.indexOf(un_membre), 1)
    }
    un_membre.checked = !un_membre.checked
  }
  update_values(un_membre:any){
    if (!un_membre.id_type_amande) {
      un_membre.id_type_amande=2  
    } 
  }
}
