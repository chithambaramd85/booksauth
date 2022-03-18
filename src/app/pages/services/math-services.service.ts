import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathServicesService {

  constructor() { }

  counter:number = 100;

  addOne(){
    this.counter++;
  }
  
}
