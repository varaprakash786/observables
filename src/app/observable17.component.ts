import { Component } from "@angular/core";
import { interval, share, take, takeLast, tap } from "rxjs";

@Component({
    selector:'app-observable17',
    imports:[],
    template:`<h2>Share operator</h2>
    <pre>The share operator in RxJS is used to turn a unicast (cold) Observable 
    into a multicast (hot) one, so multiple subscribers share the same execution.
    
    How share() works internally:

Creates a Subject

Shares the source among subscribers

Subscribes to source only once

Unsubscribes when last subscriber leaves</pre>

Most common use case: sharing side effects
Example: HTTP call (Angular)
    Only one HTTP request
    Both subscribers get the same response
    `,
    styles:[],
    standalone:true
})

export class Observable17Component {
    
    ngOnInit() {
        
        let source$ = interval(1000).pipe(share(),take(10))
        source$.subscribe((data) => {
            console.log(data)
        })

        setTimeout(() => {
            source$.subscribe((data) => {
                console.log(data)
            })
        }, 2000)

    }
}