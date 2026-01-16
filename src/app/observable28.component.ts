import { Component } from "@angular/core";
import { concat, interval, Observable, of, race, take, takeLast, tap } from "rxjs";

@Component({
    selector:'app-obs28',
    imports:[],
    template:`<h2>Race operator</h2>
    <h6>The race operator lets multiple Observables compete, and only the first Observable to emit a value “wins”.
Only the winning Observable continues emitting
All other Observables are ignored/unsubscribed
Think of it like a race — the first to emit gets everything</h6>
    <pre>
    Core behavior

Subscribe to all Observables simultaneously
Wait for the first emission from any Observable
Emit only from that Observable
Ignore the rest
Completes when the winning Observable completes
    </pre>
    `
    ,
    styles:[],
    standalone:true
})

export class Observable28Component {
    
    ngOnInit() {
        
        let source1$ = new Observable((observer) => {
            observer.next(1)
            observer.next(2)
            observer.complete()
        })
        let source2$ = of('A','B','C')

        race(source1$,source2$).subscribe((val) => {
            console.log(val)
        })

    }
}