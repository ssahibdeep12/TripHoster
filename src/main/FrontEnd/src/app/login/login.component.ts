import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  isInvalidLogin = false;
  message = 'Invalid Credentials';

  constructor(private router: Router, public authenticationService: AuthenticationServiceService) { }

  ngOnInit() {
  }

  handleLogin() {

    if (this.authenticationService.authenticate(this.username, this.password)) {
      this.isInvalidLogin = false;
      // Navigate to User's Profile upon successful login
      this.router.navigate(['UserProfile' , this.username ]);
    }  else {
      this.isInvalidLogin = true;
      }
  }

}
