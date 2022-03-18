import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MathServicesService } from '../services/math-services.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor(private mathService:MathServicesService) { }

  counter:any;

  ngOnInit(): void {
  }

  @Input()
  studentchild:any;

  @Output() private numberGenerated1 = new EventEmitter<number>();

  Increase(){
    this.mathService.addOne();
  }

  generateNumber(){
    const randomNumber = Math.random();
    this.numberGenerated1.emit(randomNumber);
  }


}
