import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { NewUser } from './NewUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Globals } from '../globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    username: '',
    password: ''
  };
  
  globals: Globals;
  
  newUser: NewUser = {
    username: '',
    password: '',
    fullname: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    phone: ''
  }
  constructor( private http: HttpClient, private router: Router) { }
  
  ngOnInit() {
   this.globals = new Globals();
  }
  
  login(){
    this.http.get('http://localhost:8080/api/users/search/'+
                  'findByUsernameAndPassword?username='+this.user.username+'&password='+this.user.password)
                .subscribe(response => {
                   if (response['username']) {
                       sessionStorage.setItem('user',JSON.stringify(response));
                       this.router.navigate(['/loginok']);
                   } else {
                      
                   }
                });
  }
  register(){
    console.log(this.newUser);
    console.log(this.globals.usersURL);
    this.http.post(
        this.globals.usersURL,
        this.newUser, {
            headers: new HttpHeaders().set('Content-type', 'application/json'),
        }).subscribe(burger => console.log('-------added to db--------'));
    this.router.navigate(['/regok']);
  }
    

}
