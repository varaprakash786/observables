import { Component } from "@angular/core";
import { interval, take } from "rxjs";

@Component({
    selector:'app-observable4',
    imports:[],
    template:`<h2>Take operator</h2>
    <h6>take limits the number of values you receive from an Observable.
After it emits N values, it automatically completes.

👉 Think of it as: “give me only the first N values, then stop.”</h6>
    <pre>
    Core behavior

Emits the first count values
Completes immediately after reaching the count
Automatically unsubscribes from the source
    </pre>`,
    styles:[],
    standalone:true
})

export class Observable4Component {
    
    ngOnInit() {
        const newObserval = interval(500);

        newObserval.pipe(
            take(5)
        ).subscribe(
            (val) => console.log(val),
            (error) => console.log(error),
            () => console.log('Completed...')
        )
        

    }
}