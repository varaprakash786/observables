import { Component } from "@angular/core";
import { interval, map, mergeMap, of, take, takeLast, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

@Component({
    selector:'app-observable11',
    imports:[],
    template:`<h2>Higher Order Observable</h2>
    <pre>A higher-Order mapping operators transform higher-order Observables.They map each value from an 
    Outer Observable to a new inner Observableand automatically subscribe it, and unsubscribe
    from the inner Observable</pre>`,
    styles:[],
    standalone:true
})

export class Observable11Component {
    
    ngOnInit() {

        of(1,2,3)//outer observable
            .pipe(
                 map((value) => {
                return of(value *10) //Inner Observable
                })
        ).subscribe((val) => { // returns Observable
            val.subscribe(data => {  // again need to subscribe innerObservable
                console.log(data)
            })
        })
console.log('----')
        /** can be written above problem using mergeMap(here mergeMap automatically unsubscribe) */
        
        of(1,2,3)//outer observable
            .pipe(
                 mergeMap((value) => {
                return of(value *10) //Inner Observable
                })
        ).subscribe((val) => { 
                console.log(val)
        })
        console.log('********')
         of(1,2,3)//outer observable
            .pipe(
                 mergeMap((value) => {
                return ajax(`https://jsonplaceholder.typicode.com/posts/${value}`) //Inner Observable
                })
        ).subscribe((val) => { 
                console.log(val.response)
        })
           
    }
}