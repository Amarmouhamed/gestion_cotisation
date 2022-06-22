import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  les_membres:any=[]
  les_cotisations:any=[]
  taf_url="http://localhost/gestion_cotisation_back/taf/"
  terme_recherche=""
  constructor(private http:HttpClient) { }

}
