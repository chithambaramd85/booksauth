import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentToken:string | any;

  constructor(private route:Router) { }

  registerUser(email:string, password:string){
    firebase.auth().createUserWithEmailAndPassword(email, password).then(resp=>{
      console.log(resp);
    }).catch(error=>{
      console.log(error);
    })
  }

  loginUser(email:any, password:any){
    firebase.auth().signInWithEmailAndPassword(email, password).then(resp=>{
      //this.getToken();
      this.route.navigate(['/book']);
      console.log(resp);
    }).catch(error=>{
      console.log(error);
    })
  }

  getToken(){
    firebase.auth().currentUser?.getIdToken().then((token:any)=>{
      this.currentToken = token
    });
    return this.currentToken;
  }

  isAuthenticated(){
    return this.currentToken !=null ? true:false
  }

  Logout(){
    this.route.navigate(['/login']);
    firebase.auth().signOut();
    this.currentToken = null;

  }


}
