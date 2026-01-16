import { Component } from "@angular/core";
import { BehaviorSubject, interval, take, takeLast, tap } from "rxjs";

@Component({
    selector:'app-obs18',
    imports:[],
    template:`<h2>BehaviorSubject</h2>`,
    styles:[],
    standalone:true
})

export class Observable18Component {
    
    ngOnInit() {
        let behaviourSubject$ = new BehaviorSubject(0);
        
        behaviourSubject$.subscribe((data) => {
            console.log('observer 1 - '+data)
        })
        behaviourSubject$.next(1);

        behaviourSubject$.subscribe((data) => {
            console.log('observer 2 -'+data)
        })
        behaviourSubject$.next(3);

        
        

    }
}