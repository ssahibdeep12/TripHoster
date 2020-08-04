import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Component({
  selector: 'app-home-page-header',
  templateUrl: './home-page-header.component.html',
  styleUrls: ['./home-page-header.component.css']
})
export class HomePageHeaderComponent implements OnInit {

  constructor(public authService: AuthenticationServiceService) { }

  ngOnInit() {
   
  }
}
