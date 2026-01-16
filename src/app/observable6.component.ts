import { Component } from "@angular/core";
import { interval, skip, take, takeLast, tap } from "rxjs";

@Component({
    selector:'app-observable6',
    imports:[],
    template:`<h2>Skip(10) Observable values outof 15</h2>`,
    styles:[],
    standalone:true
})

export class Observable6Component {
    
    ngOnInit() {
        
        const newObserval = interval(500);

        newObserval.pipe(
            
            take(15),
            skip(10),
            
        ).subscribe(
            (val) => console.log(val),
            (error) => console.log(error),
            () => console.log('Completed...')
        )

    }
}