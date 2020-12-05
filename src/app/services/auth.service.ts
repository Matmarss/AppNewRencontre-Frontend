import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  constructor(private router: Router) {
  }

  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  deleteUser() {
    let user = firebase.auth().currentUser;
    console.log(user);
    return new Promise(
      (reject) => {
        user.delete().then(
          () => {
            console.log('User deleted');
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            this.isAuth = true;
            this.router.navigate(['profil']);
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  getCurrentUser() {
    return firebase.auth().currentUser.uid;
  }

  signOutUser() {
    firebase.auth().signOut();
  }
}
