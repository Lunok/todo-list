import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent implements OnInit, OnDestroy {

  private _pairSecondsubscription: Subscription;
  public secondes: number;

  constructor() { }

  ngOnInit(): void {
    const secondsObs = interval(1000); // Observer

    /*const secondsObs = new Observable((observer) => {
      let value: number = 0;

      const interval = setInterval(() => {
        //if(value % 2 === 0) {
          //observer.next(value);
       // }
        observer.next(value);
        value++;
        //observer.complete();
      }, 1000);

      return () => clearInterval(interval);
    });*/

    // Subscription, each time a new value is detected, we make an update
    this._pairSecondsubscription = secondsObs.subscribe((value) => {
      this.secondes = value as number;
    },
    (error) => {
      console.log(error);
    });
  }

  // Once the subscription is done, we destroy it
  ngOnDestroy() {
    this._pairSecondsubscription.unsubscribe();
  }
}
