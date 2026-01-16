import { Component } from "@angular/core";
import { forkJoin, interval, Observable, of, take, takeLast, tap } from "rxjs";

@Component({
    selector:'app-obs25',
    imports:[],
        template:`<h2>forkJoin operator</h2>
    <h6>forkJoin is used to wait for multiple Observables to complete and then emit their final values once.

👉 Think of it like Promise.all for Observables.</h6>
    <pre>
    Key behavior

Subscribes to all Observables in parallel
Waits until all of them complete
Emits once, with the last value from each
Then completes
If any Observable errors, forkJoin errors
If any Observable never completes, forkJoin never emits
    </pre>
    `,
    styles:[],
    standalone:true
})

export class Observable25Component {
    
    ngOnInit() {
        
        let source1$ = of(1,2,3,4)
        let source2$ = of('A','B','C')
        let source3$ = new Observable((observer) => {
            observer.next(40)
            observer.next(50)
            observer.complete()
        })
        forkJoin([source1$,source2$]).subscribe((val) => {
            console.log(val)
        })

        forkJoin([source1$,source2$,source3$]).subscribe((val) => {
            console.log(val)
        })
    }
}