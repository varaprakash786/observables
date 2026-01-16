import { Component } from "@angular/core";
import { concat, interval, merge, Observable, of, take, takeLast, tap } from "rxjs";

@Component({
    selector:'app-obs26',
    imports:[],
    template:`<h2>Merge operator</h2>
    <h6>The merge operator is used to combine multiple Observables and emit their values as they arrive, in parallel.

👉 It does not wait for completion or ordering — it just forwards values from all sources immediately.</h6>
    <pre>
    Core behavior

Subscribes to all Observables at the same time
Emits values whenever any Observable emits
Interleaves values
Completes when all Observables complete
Errors if any Observable errors
    </pre>
    `
    ,
    styles:[],
    standalone:true
})

export class Observable26Component {
    
    ngOnInit() {
        
        let source1$ = new Observable((observer) => {
            observer.next(1)
            observer.next(2)
            
        })
        let source2$ = of('A','B','C')
        let source3$ = interval(1000).pipe(take(5))

        merge(source1$,source2$,source3$).subscribe((val) => {
            console.log(val)
        })

    }
}