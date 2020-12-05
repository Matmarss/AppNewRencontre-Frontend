import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewRencontre-frontend';

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBflEF2XuN3xYTt565czMsGpIjaQObCDBE',
      authDomain: 'project-newrencontre.firebaseapp.com',
      databaseURL: 'https://project-newrencontre.firebaseio.com',
      projectId: 'project-newrencontre',
      storageBucket: 'project-newrencontre.appspot.com',
      messagingSenderId: '306753204070',
      appId: '1:306753204070:web:2a02c1fc47f8f2e930a2a7',
      measurementId: 'G-FTC5CR4ZZL'
    };
    firebase.initializeApp(firebaseConfig);
  }
}
