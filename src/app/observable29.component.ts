import { Component } from "@angular/core";
import { concat, interval, Observable, of, take, takeLast, tap, zip } from "rxjs";

@Component({
    selector:'app-obs29',
    imports:[],
    template:`<h2>Zip operator</h2>
    <h6>zip combines multiple Observables pairwise, emitting arrays (or values) only when each Observable has emitted at least once.
Think of it as “zipping up” values like a zipper: the first values combine, then the second, etc.
Unlike combineLatest, it waits for the next value from all Observables to emit again.</h6>
    <pre>
   Key behavior

Subscribes to all Observables simultaneously
Waits for one value from each Observable
Emits a combined array of these values
Repeats for the next set of values
Completes when any Observable completes
    </pre>
    `
    ,
    styles:[],
    standalone:true
})

export class Observable29Component {
    
    ngOnInit() {
        
        let source1$ = new Observable((observer) => {
            observer.next(1)
            observer.next(2)
            observer.complete()
        })
        let source2$ = of('A','B','C')
        let source3$ = of(10,3,60)

        zip(source1$,source2$,source3$).subscribe((val) => {
            console.log(val)
        })

    }
}