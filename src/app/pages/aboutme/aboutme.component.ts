import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, of, Subscription } from 'rxjs';
//import { filter } from 'rxjs-compat/operator/filter';
//import { take } from 'rxjs-compat/operator/take';
import {take, filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit, OnDestroy {

  myDestroy:Subscription | undefined;

  constructor() { }

  ngOnInit(): void {

//   const number$ = interval(100).pipe(take(20));
  
//  this.myDestroy = number$.subscribe(sub=>{
//   console.log(sub);
// })

const  $of = of(1,2,3,4,5).pipe(filter(f=>f % 2==0), map(m=>m*2));

$of.subscribe(sub=>{
  console.log(sub);
})

  }
  ngOnDestroy(){
    this.myDestroy?.unsubscribe();
   // this.myDestroy.unsubscribe();

  }

}
