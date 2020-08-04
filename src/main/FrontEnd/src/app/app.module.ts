import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ErrorComponent } from './error/error.component';
import { TripHosterFeedComponent } from './trip-hoster-feed/trip-hoster-feed.component';
import { TravelPackagesComponent } from './travel-packages/travel-packages.component';
import { TripHosterHomePageComponent } from './trip-hoster-home-page/trip-hoster-home-page.component';
import { HomePageHeaderComponent } from './home-page-header/home-page-header.component';
import { HomePageFooterComponent } from './home-page-footer/home-page-footer.component';
import { FlightsComponent } from './flights/flights.component';
import { StaysComponent } from './stays/stays.component';
import { CarRentalsComponent } from './car-rentals/car-rentals.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    PasswordResetComponent,
    ErrorComponent,
    TripHosterFeedComponent,
    TravelPackagesComponent,
    TripHosterHomePageComponent,
    HomePageHeaderComponent,
    HomePageFooterComponent,
    FlightsComponent,
    StaysComponent,
    CarRentalsComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
