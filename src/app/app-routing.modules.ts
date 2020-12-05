import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {NgModule} from '@angular/core';
import {AuthGuardService} from './services/auth-guard.service';
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ProfilComponent} from './profil/profil.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'auth/signup', component: SignupComponent },
  {
    path: 'profil', canActivate: [AuthGuardService], component: ProfilComponent, children: [
      { path: 'matchs', canActivate: [AuthGuardService], component: ProfilComponent },
      { path: 'matchs/view/:id', canActivate: [AuthGuardService], component: ProfilComponent }
    ]
  },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
