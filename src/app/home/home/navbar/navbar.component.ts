import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public api:ApiService) { }

  ngOnInit(): void {
  }
  toggle_sidenav() {
    console.log("toggle sidebar")
    // Sidebar Toggler
      $('.sidebar, .content').toggleClass("open");

  }
}
