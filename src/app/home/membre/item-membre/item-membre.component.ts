import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/service/api.service';
import { DetailsMembreComponent } from '../details-membre/details-membre.component';

@Component({
  selector: 'tr[app-item-membre]',
  templateUrl: './item-membre.component.html',
  styleUrls: ['./item-membre.component.css']
})
export class ItemMembreComponent implements OnInit {
  @Input()
  un_membre:any={}
  
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
