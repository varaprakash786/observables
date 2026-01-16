import { Component } from "@angular/core";
import { concat, interval, Observable, of, take, takeLast, takeWhile, tap } from "rxjs";

@Component({
    selector:'app-obs30',
    imports:[],
    template:`<h2>TakeWhile operator</h2>
    <h6>takeWhile lets values pass through an Observable as long as a condition is true.
As soon as the condition becomes false, it completes the stream.

👉 Think of it as: “keep taking values while this is true.”</h6>
    <pre>
    Core behavior

Evaluates each emitted value against a predicate
Emits values while predicate returns true
Stops immediately when predicate returns false
Completes the Observable
    </pre>
    `
    ,
    styles:[],
    standalone:true
})

export class Observable30Component {
    
    ngOnInit() {
         const source$ = interval(1000)

        source$.pipe(takeWhile((data) => data <5)).subscribe((val) => {
            console.log('takeWhile.. ',val)
        })


    }
}