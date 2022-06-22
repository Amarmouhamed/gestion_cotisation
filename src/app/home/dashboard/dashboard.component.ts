import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  constructor(public api:ApiService, private http:HttpClient) { }

  ngOnInit(): void {
    this.get_membre()
  }
  get_membre(){
    let api_url=this.api.taf_url+"membre/get";   //recevoir tout

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

}
