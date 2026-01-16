import { Component } from "@angular/core";
import { concat, debounceTime, fromEvent, Observable, of } from "rxjs";

@Component({
    selector:'app-obs31',
    imports:[],
    template:`<h2>DebunceTime operator</h2>
    <button id="button_debounce">Debounce Click</button>
    <h6>debounceTime waits for a pause in emissions, then emits the latest value only after a specified time has passed without any new values.

👉 Think of it as: “wait until things calm down, then act.”</h6>
    <pre>
    Core behavior

Delays emission by time milliseconds
Resets the timer on every new value
Emits only the latest value
Completes when the source completes
    </pre>
    `
    ,
    styles:[],
    standalone:true
})

export class Observable31Component {
    
    ngOnInit() {
     
    }

    ngAfterViewInit(): void {
            let buttonEvent = fromEvent(
                document.getElementById('button_debounce')!,'click'
            )
    
            buttonEvent.pipe(debounceTime(3000))
            .subscribe((v) => console.log(v)
        )
    }
}