import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { DetailsMembreComponent } from '../../membre/details-membre/details-membre.component';

@Component({
  selector: 'app-list-amande',
  templateUrl: './list-amande.component.html',
  styleUrls: ['./list-amande.component.css']
})
export class ListAmandeComponent implements OnInit {
  filter: any = {}
  bsModalRef?: BsModalRef;
  constructor(public api: ApiService, private http: HttpClient, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.get_amande()
  }
  get_amande() {
    let api_url = this.api.taf_url + "amande/with_membre";   //recevoir tout
    //let api_url="http://localhost/gestion_cotisation_back/taf/amande//get?id_amande=1"; // recevoir le(a) amande d'identifiant 1

    this.http.get(api_url).subscribe((reponse: any) => {
      //when success
      if (reponse.status) {
        this.api.les_amandes = reponse.data
        console.log("Opération effectuée avec succés sur la table amande. Réponse= ", reponse);
      } else {
        console.log("L'opération sur la table amande a échoué. Réponse= ", reponse);
      }
    },
      (error: any) => {
        //when error
        console.log("Erreur inconnue! ", error);
      })
  }
  openModalWithComponent(membre:any) {
    const initialState: ModalOptions = {
      initialState: {
        membre:membre
      }
    };
    this.bsModalRef = this.modalService.show(DetailsMembreComponent, initialState);
    // this.bsModalRef.content.closeBtnName = 'Close';
  }
}
