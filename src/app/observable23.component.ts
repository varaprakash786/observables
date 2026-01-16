import { Component } from "@angular/core";
import { combineLatest, interval, Observable, take, takeLast, tap } from "rxjs";

@Component({
    selector:'app-obs23',
    imports:[],
    template:`<h2>CombineLatest</h2>
    <pre>
    combineLatest is an RxJS creation/combination operator that lets you combine multiple Observables and react whenever any of them emits, using the latest value from each.

Basic idea

1. You give combineLatest multiple Observables

2. It waits until each Observable has emitted at least once

3. After that, any new emission from any Observable triggers a new combined emission

4. The emitted value contains the latest value from each Observable


    </pre>
    `,
    styles:[],
    standalone:true
})

export class Observable23Component {
    
    ngOnInit() {
        let source1$ = new Observable((observer) => {
            setTimeout(()=> {
                
                observer.next(1)
            },1000)
            
        })
        let source2$ = new Observable((observer) => {
            setTimeout(()=> {
                observer.next(1)
            },5000)
            
        })

        combineLatest([source1$,source2$]).subscribe((val) => {
            console.log('After 5 sec ',val )
        })

    }
}