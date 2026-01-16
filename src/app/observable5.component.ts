import { Component } from "@angular/core";
import { interval, take, takeLast, tap } from "rxjs";

@Component({
    selector:'app-observable5',
    imports:[],
    template:`<h2>TakeLast(2) only takes last 2 values you want</h2>`,
    styles:[],
    standalone:true
})

export class Observable5Component {
    
    ngOnInit() {
        const newObserval = interval(500);

        newObserval.pipe(
            tap(s => console.log('tap - ',s)),
            take(20),
            takeLast(4)
        ).subscribe(
            (val) => console.log('takeLast ',val),
            (error) => console.log(error),
            () => console.log('Completed...')
        )
        

    }
}