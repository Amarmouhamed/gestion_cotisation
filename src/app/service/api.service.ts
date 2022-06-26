import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  les_membres:any=[]
  les_cotisations:any=[]
  les_periodes:any=[]
  selected_periode:any={}
  dashboard_data:any={}
  // taf_url="http://localhost/gestion_cotisation_back/taf/"
  taf_url="https://amar.host.com.sn/taf/"
  terme_recherche=""
  key_prefix_localtrorage = "abcde_gestion_cgek_cotisation"
  user_connected:any={}
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
}
