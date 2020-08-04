import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ErrorComponent } from './error/error.component';
import { TripHosterFeedComponent } from './trip-hoster-feed/trip-hoster-feed.component';
import { TripHosterHomePageComponent } from './trip-hoster-home-page/trip-hoster-home-page.component';
import { TravelPackagesComponent } from './travel-packages/travel-packages.component';
import { FlightsComponent } from './flights/flights.component';
import { StaysComponent } from './stays/stays.component';
import { CarRentalsComponent } from './car-rentals/car-rentals.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  { path: '', component: TripHosterHomePageComponent},
  { path: 'homePage', component: TripHosterHomePageComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'PasswordReset', component: PasswordResetComponent},
  { path: 'SignUp', component: SignUpComponent},
  { path: 'UserProfile/:name', component: TripHosterHomePageComponent},
  { path: 'travelPackages', component: TravelPackagesComponent},
  { path: 'flights', component: FlightsComponent},
  { path: 'stays', component: StaysComponent},
  { path: 'carRentals', component: CarRentalsComponent},
  { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  { path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
