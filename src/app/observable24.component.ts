import { Component } from "@angular/core";
import { concat, interval, Observable, of, take, takeLast, tap } from "rxjs";

@Component({
    selector:'app-obs24',
    imports:[],
    template:`<h2>Concat operator</h2>
    <h6>The concat operator in RxJS is used to run Observables sequentially, one after another.

👉 Next Observable starts only after the previous one completes.</h6>
    <pre>
    Core idea

Subscribes to the first Observable
Waits for it to complete
Then subscribes to the next
Emits all values in order
Completes when the last Observable completes
    </pre>
    `
    ,
    styles:[],
    standalone:true
})

export class Observable24Component {
    
    ngOnInit() {
        
        let source1$ = new Observable((observer) => {
            observer.next(1)
            observer.next(2)
            observer.complete()
        })
        let source2$ = of('A','B','C')

        concat(source1$,source2$).subscribe((val) => {
            console.log(val)
        })

    }
}