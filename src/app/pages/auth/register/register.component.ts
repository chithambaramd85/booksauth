import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private autuService:AuthService) { }

  registerForm:FormGroup | any;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'email':new FormControl(null, [Validators.required, Validators.email]),
      'password':new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  onRegister(){
    const email = this.registerForm.get('email').value;
    const password = this.registerForm.get('password').value;
    this.autuService.registerUser(email, password);
  }

}
