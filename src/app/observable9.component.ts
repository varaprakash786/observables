import { AfterViewInit, Component } from "@angular/core";
import { debounce, fromEvent, interval, take, takeLast, tap } from "rxjs";

@Component({
    selector:'app-observable9',
    imports:[],
    template:`<h2>Debounce</h2>
    <h6>The RxJS debounce operator emits a value from a source observable only after a specified period of silence (no new values) has passed, dropping any previous pending emissions
    
    </h6>
    <h5>crucial for performance, reducing unnecessary work in rapid event streams like search inputs or window resizing</h5>
    <button id="button_debounce">Debounce Click</button>
    `,
    styles:[],
    standalone:true
})

export class Observable9Component implements AfterViewInit{
    
    ngOnInit() {
        
    //     interval(1000).pipe(
    //         take(20),
    //         debounce((val) => interval(val*100))
    //     ).subscribe(
    //         (v) => console.log(v),
    //         (error) => console.log(error),
    //         () => console.log('Exec Completed..')
    // )

    }

    ngAfterViewInit(): void {
        let buttonEvent = fromEvent(
            document.getElementById('button_debounce')!,'click'
        )

        buttonEvent.pipe(debounce(val => interval(1000)))
        .subscribe((v) => console.log(v)
    )
    }
}