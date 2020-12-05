import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import {RouterModule} from '@angular/router';
import {UserService} from './services/user.service';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import {ComparaisonoService} from './services/comparaisono.service';
import {AdjectifService} from './services/adjectif.service';
import {AppRoutingModule} from './app-routing.modules';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    FourOhFourComponent,
    HeaderComponent,
    HomeComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    UserService,
    ComparaisonoService,
    AdjectifService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
