import { AfterViewInit, Component, OnInit } from "@angular/core";
import { fromEvent, interval, Observable, take, takeUntil } from "rxjs";

@Component({
    selector:'app-observable7',
    imports:[],
    template:`<h2>TakeUntil operator</h2>
    <button class="btn btn-primary" id="clickBtnd" (click)="startTimer()">Start Timer</button>
    <button class="btn btn-danger" id="clickBtn">Stop Timer</button>
    <h6>takeUntil lets values pass through a source Observable until another Observable emits.
When the notifier Observable emits, the source completes immediately.

👉 Think of it as: “keep taking values until this other thing happens.”</h6>
    <pre>
    Core behavior

Subscribes to two Observables:
Source (main stream)
Notifier (stop signal)
Emits values from the source
Stops and completes as soon as the notifier emits once
Automatically unsubscribes from the source
    </pre>
    
    `,
    styles:[],
    standalone:true
})

export class Observable7Component implements AfterViewInit {
    buttonEvent!: Observable<any>;    
    
    ngAfterViewInit(){
        this.buttonEvent = fromEvent(
            document.getElementById('clickBtn')!,'click');

    }

    startTimer(){
        interval(500).pipe(takeUntil(this.buttonEvent))
            .subscribe(
                (val) => console.log(val),
                    (error) => console.log(error),
        () => console.log('Execution Completed...'))

            
    }
    // ngOnInit() {
        

    //     const newObservable = interval(500)
    //     newObservable.pipe(
    //         takeUntil(this.buttonEvent)
    //     ).subscribe(
    //             (val) => console.log(val),
    //         (error) => console.log(error),
    //     () => console.log('Execution Completed...'))

    // }
    
}