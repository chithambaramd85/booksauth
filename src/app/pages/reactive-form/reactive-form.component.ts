import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }


  userForm:FormGroup | any;

  countryList = [
    {"countryName":"India"},
    {"countryName":"Chain"},
    {"countryName":"USA"}
  ]

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'firstname':new FormControl(null, Validators.required),
      'lastname': new FormControl(null),
      'email':new FormControl(null, [Validators.required, Validators.email]),
      'gender':new FormControl(null),
      'married':new FormControl(null),
      // 'address':new FormControl({
        'country':new FormControl(null),
        'city':new FormControl(null),
        'street':new FormControl(null),
        'pincode':new FormControl(null)
      })
     
    // });

    this.userForm.setValue({
          firstname:'C.T.Sivarakshan',
          lastname:'Chithambaram',
          email:'sivarakshan@gmail.com',
          gender:'Male',
          married:true,
          //address:{
            country:'USA',
            city:'Long IsLand',
            street:'127, Well Mart',
            pincode:'600 089'
         // }
        });
        // this.userForm.patchValue({
        //   firstname:'Chitha'
        // })
  }

  onSubmit(){
    console.log(this.userForm);
   this.userForm.reset();
  
  }

}
