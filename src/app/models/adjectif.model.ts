import {IUser} from './user.model';


export interface IAdjectif {
  id?: number;
  carac?: Adjectif;
  user?: IUser;
}

export class Adjectif implements IAdjectif {
  constructor(public adjectif?: Adjectif, public user?: IUser) { }
}
