export class Globals{
  apiURL  : string;
  usersURL : string;
  constructor(){
    this.apiURL = 'http://localhost:8080/api';
    this.usersURL = this.apiURL + '/users';
  }
}
