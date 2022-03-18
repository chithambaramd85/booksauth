import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { AuthService } from './pages/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myfirstapp';

  constructor(public authService:AuthService){}

  ngOnInit(): void {

    const firebaseConfig = {
      apiKey:"AIzaSyCZ7mWQHXEv8KMIEUnBTN4gOLk45C7Jyps"
    };
    firebase.initializeApp(firebaseConfig);
  }

  onLogout(){
    this.authService.Logout();
  }

 
}
