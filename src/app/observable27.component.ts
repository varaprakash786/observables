import { Component } from "@angular/core";
import { concat, interval, Observable, of, partition, take, takeLast, tap } from "rxjs";

@Component({
    selector:'app-obs27',
    imports:[],
    template:`<h2>Partition</h2>
    <h6>The partition operator splits one Observable into two Observables based on a predicate (condition).

👉 One stream gets values that match the condition, the other gets the rest.</h6>
    <pre>
   Core behavior

Takes one source Observable
Applies a predicate function
Returns two Observables
[pass$, fail$]
Both Observables emit from the same source
Source is subscribed to only once
    </pre>
    `
    ,
    styles:[],
    standalone:true
})

export class Observable27Component {
    
    ngOnInit() {
        
        let source1$ = new Observable<number>((observer) => {
            observer.next(1)
            observer.next(2)
            observer.next(3)
            observer.next(9)
            observer.complete()
        })
        let data = partition(source1$, (value) => value %2 == 0)

        data[0].subscribe((val) => {
            console.log('first Partition ',val)
        })

        
        data[1].subscribe((val) => {
            console.log('second Partition ',val)
        })

    }
}