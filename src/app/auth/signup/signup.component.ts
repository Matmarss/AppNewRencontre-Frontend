import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {UserService} from '../../services/user.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  errorMessage: string;
  correct = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      confPWD: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      genre: ['', Validators.required],
      naissance: ['', Validators.required]
    });
  }

  onSubmit() {
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    const confPWD = this.signupForm.get('confPWD').value;

    if (password === confPWD) {
      this.authService.createNewUser(email, password).then(
        () => {
          let userId = firebase.auth().currentUser.uid;
          this.formateUser(userId);
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    } else {
      this.correct = false;
    }
  }

  formateUser(userId: string) {
    const formValue = this.signupForm.value;
    let newUser: User;
    newUser = new User(
      userId,
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['genre'],
      formValue['naissance'],
      null
    );
    console.log(newUser);
    this.router.navigate(['/auth/signin']);
  }
}
