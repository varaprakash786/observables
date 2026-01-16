import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Observer4 } from "./observerclass";

@Component({
    selector:'app-observable2',
    imports:[],
    template:`<h2>Different ways of Subscribing 
    Observable(Object Oriented,Variable Notation ,callback notation and class notation)</h2>
    <h6>Check with error line no 35</h6>`,
    styles:[],
    standalone:true
})

export class Observable2Component {
    
    ngOnInit() {

        const newObservable  = new Observable<number>(observer => {
     /** If I remove number type(new Observable<number>) I will get error in line 35(subscribe(observer)) */
            observer.next(100),
            observer.next(200),
            observer.complete();
        })
        
        /** Calling Observal by subscribe mtd2 Strats (Variable Notation)*/
        let observer = {
            next: (data: number) => console.log('Obs1 '+data),
            error: (error: string) => console.log(error),
            complete: () => console.log('Complete all done')

        }
        newObservable.subscribe(observer)
          /** Calling Observal by subscribe mtd2 Ends*/
        console.log('---------')
        /** Calling Observal by subscribe mtd2 Strats  (Object oriented)*/
        
        newObservable.subscribe({
             next: (data: number) => console.log('Obs2 '+data),
            error: (error: string) => console.log(error),
            complete: () => console.log('Complete all done')
        })
          /** Calling Observal by subscribe mtd2 Ends*/
        console.log('---------')
        /** Calling Observal by subscribe mtd3 Starts (callBack)*/
        newObservable.subscribe(
            (data) => console.log('Obs3 '+data),
            (error) => console.log(error),
            () => console.log('Completed all Done')
         )
        /** Calling Observal by subscribe mtd3 Ends*/
         console.log('---------')
        /** Calling Observal by subscribe mtd4 Starts (class)*/
        newObservable.subscribe(new Observer4)
        /** Calling Observal by subscribe mtd3 Ends*/

    }
}