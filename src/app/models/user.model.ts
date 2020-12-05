import {Genre} from './enumerations/genre.model';
import {IAdjectif} from './adjectif.model';

export interface IUser {
  id: string,
  firstName: string;
  lastName: string;
  email: string;
  genre: Genre;
  naissance: string;
  listAdjectifs?: IAdjectif[];
}

export class User {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public genre: Genre,
    public naissance: string,
    public listAdjectifs?: IAdjectif[]
  ) {
  }
}
