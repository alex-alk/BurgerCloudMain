export class Globals{
  apiURL  : string;
  usersURL : string;
  constructor(){
    this.apiURL = 'https://burgers.cfapps.io/api';
    this.usersURL = this.apiURL + '/users';
  }
}
