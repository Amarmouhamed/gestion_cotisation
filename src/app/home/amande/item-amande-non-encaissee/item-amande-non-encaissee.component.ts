import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/service/api.service';
import { DetailsMembreComponent } from '../../membre/details-membre/details-membre.component';

@Component({
  selector: 'tr[app-item-amande-non-encaissee]',
  templateUrl: './item-amande-non-encaissee.component.html',
  styleUrls: ['./item-amande-non-encaissee.component.css']
})
export class ItemAmandeNonEncaisseeComponent implements OnInit {
  @Input()
  une_amande:any={}
  @Input()
  index=0
  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService, public api:ApiService) { }

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
}
