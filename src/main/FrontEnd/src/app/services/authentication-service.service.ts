import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor() { }

  authenticate(username, password){
    if ( username === 'sahib' && password === 'TripHoster') {
      sessionStorage.setItem('AuthenticatedUser', username);
          return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn(){
   let user = sessionStorage.getItem('AuthenticatedUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('AuthenticatedUser');
  }
}
