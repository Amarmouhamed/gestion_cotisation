import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public api:ApiService, private route:Router) { }

  ngOnInit(): void {
  }
  toggle_sidenav() {
    console.log("toggle sidebar")
    // Sidebar Toggler
      $('.sidebar, .content').toggleClass("open");

  }
  deconnexion(){
    this.api.delete_from_local_storage("user_connected")
    this.api.user_connected=null
    this.route.navigate(['/'])
  }
}
