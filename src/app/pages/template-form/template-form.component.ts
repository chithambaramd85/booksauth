import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }
  @ViewChild('userForm') uf:NgForm | undefined;

  ngOnInit(): void {
  }

  countryList = [
    {"countryName":"India"},
    {"countryName":"Chain"},
    {"countryName":"USA"}
  ]

  setDefaultValue(){

    this.uf?.setValue({
      firstname:'C.T.Sivarakshan',
      lastname:'Chithambaram',
      email:'sivarakshan@gmail.com',
      gender:'Male',
      married:true,
      address:{
        country:'USA',
        city:'Long IsLand',
        street:'127, Well Mart',
        pincode:'600 089'
      }
    });

    // this.uf?.form.patchValue({
    //   firstname:'chi'
    // })
 

  }

  // onSubmit(myForm:NgForm){
  //   console.log(myForm);
  // }

  onSubmit(){
    console.log(this.uf);
    //this.uf?.reset();
  }

}
