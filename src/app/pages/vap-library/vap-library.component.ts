import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vap-library',
  templateUrl: './vap-library.component.html',
  styleUrls: ['./vap-library.component.css']
})
export class VapLibraryComponent implements OnInit {
  randomNumber: any;

  constructor() { }

  ngOnInit(): void {
  }
  
studentParent:object = [
  {id:10, name:"Tamil"},
  {id:11, name:'English'},
  {id:12, name:'Math'}
]

onNumberGenerated(randomNumber:number){
  this.randomNumber = randomNumber;
}

}
