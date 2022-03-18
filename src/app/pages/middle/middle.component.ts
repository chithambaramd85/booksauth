import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  constructor() { }

  bookId:number = 67;
  bookName:string = "Chithambaram";
  author:string = "BalaMurugan";
  bookStatus:string = "Available";

  btnToogle:boolean=true;

  ngOnInit(): void {

    setTimeout(()=>{
      this.btnToogle = false;
    })

  }

  Toggle(){
    if(this.bookStatus == 'Available'){
      this.bookStatus = "Not Available";
    }else{
      this.bookStatus = "Available";
    }
  }

}
