import {Injectable} from '@angular/core';
import * as firebase from 'firebase';

import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

}
