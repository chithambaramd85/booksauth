import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  myDestroy:Subscription | undefined;
  
  ngOnInit(): void {
    
  const myObs$ = new Observable(obs=>{
    console.log("Start Observable");
    obs.next('100');
    obs.next('200');
    //obs.error("Not Working");
    obs.next('300');
    //obs.complete();
    obs.next('400');
    // setTimeout( ()=>{
    //   obs.next('400');

    // }, 1000)
    console.log("End completed");
  });

 this.myDestroy = myObs$.subscribe(sub=>{
    console.log(sub);
  },
  error =>{
    console.log("Error" + error);
  },
  ()=>{
    console.log("Completed")
  }
  );
  this.myDestroy.unsubscribe();
  // myObs$.subscribe(sub=>{
  //   console.log(sub);
  // });
    
  }

  goToSubmit(){
    this.router.navigate(['/aboutme'], {skipLocationChange : true} );
  }



}
