import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onSignIn() {
    this.router.navigate(['/auth/signin']);
  }

  onSignUp() {
    this.router.navigate(['/auth/signup']);
  }
}
