import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router) { }

  firstName = '';
  lastName = '';
  emailAddress = '' ;
  userName = '';
  password = '';
  isInvalidSignUp = false;
  errorMessage = 'invalid SignUp';

  ngOnInit() {
  }
   handleSignIn() {
    if (this.userName === 'sahib' && this.password === 'TripHoster') {
        this.isInvalidSignUp = false;
        this.router.navigate(['UserProfile', this.userName]);
    } else {
      this.isInvalidSignUp = true;
    }
  }

}
