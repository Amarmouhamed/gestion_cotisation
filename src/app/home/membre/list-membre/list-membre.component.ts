import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { DetailsMembreComponent } from '../details-membre/details-membre.component';

@Component({
  selector: 'app-list-membre',
  templateUrl: './list-membre.component.html',
  styleUrls: ['./list-membre.component.css']
})
export class ListMembreComponent implements OnInit {
  filter:any={membre:""}
  bsModalRef?: BsModalRef;
  constructor(public api:ApiService, private http:HttpClient,private modalService: BsModalService) { }

  ngOnInit(): void {
    this.get_membre(this.api.user_connected.id_tontine)
  }
  get_membre(id_tontine:number){
    let api_url=this.api.taf_url+"membre/with_details?id_tontine="+id_tontine;   //recevoir tout
    this.http.get(api_url).subscribe((reponse:any)=>{
        //when success
        if(reponse.status){
          this.api.les_membres=reponse.data
            console.log("Opération effectuée avec succés sur la table membre. Réponse= ",reponse);
        }else{
            console.log("L'opération sur la table membre a échoué. Réponse= ",reponse);
        }
    },
    (error:any)=>{
        //when error
        console.log("Erreur inconnue! ",error);
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
