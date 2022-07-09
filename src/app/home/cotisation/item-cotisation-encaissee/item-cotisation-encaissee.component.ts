import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/service/api.service';
import { DetailsMembreComponent } from '../../membre/details-membre/details-membre.component';

@Component({
  selector: 'tr[app-item-cotisation-encaissee]',
  templateUrl: './item-cotisation-encaissee.component.html',
  styleUrls: ['./item-cotisation-encaissee.component.css']
})
export class ItemCotisationEncaisseeComponent implements OnInit {
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
}
