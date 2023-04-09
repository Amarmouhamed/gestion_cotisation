import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  les_membres:any=[]
  les_cotisations:any=[]
  les_periodes:any=[]
  selected_periode:any={}
  dashboard_data:any={}
  selected_membres:any=[]
  les_amandes:any=[]
  les_type_amandes:any=[]
  selected_periode_amande:any={}
  // taf_url="http://localhost/gestion_cotisation_back/taf/"
  taf_url="https://cotisation.jant.tech/taf/"
  terme_recherche=""
  key_prefix_localtrorage = "abcde_gestion_cgek_cotisation"
  user_connected:any={}
  items_par_page:number=5
  ligne_par_page:any={
    cotisation:{
      encaissee:5,
      non_encaissee:5
    },
    amande:{
      encaissee:5,
      non_encaissee:5
    }
  }
  constructor(private http:HttpClient) { }
  get_from_local_storage(key: string): any {
    let u: any = localStorage.getItem(this.key_prefix_localtrorage + key);
    return JSON.parse(u)
  }
  save_on_local_storage(key: string, value: any): void {
    localStorage.setItem(this.key_prefix_localtrorage + key, JSON.stringify(value));
  }
  delete_from_local_storage(key: string) {
    localStorage.setItem(this.key_prefix_localtrorage + key, 'null');
  }
  il_ya(date:string){
    if (!date) {
      return date
    } else {
      return moment(date).locale("fr").fromNow();
    }
  }
  date_format_1(date:string){
    if (!date) {
      return date
    } else {
      return moment(date).locale("fr").format('lll')
    }
  }
  date_format_2(date:string){
    if (!date) {
      return date
    } else {
      return moment(date).locale("fr").format('L')
    }
  }
}
