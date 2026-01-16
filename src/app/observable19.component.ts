import { Component } from "@angular/core";
import { interval, ReplaySubject, take, takeLast, tap } from "rxjs";

@Component({
    selector:'app-obs19',
    imports:[],
    template:`<h2>Reply subject</h2>
    <pre>
    Why use ReplaySubject?

Use it when:

Late subscribers must receive previous emissions

You want to buffer values

You don’t know when subscribers will subscribe
    </pre>`,
    styles:[],
    standalone:true
})

export class Observable19Component {
    
    ngOnInit() {
        
        let replySubject$ = new ReplaySubject<number>(1); // buffer size = 1;
        replySubject$.next(1);

        replySubject$.subscribe((data) => {
            console.log('observer1 - ',data)
        })

        replySubject$.next(2)
        replySubject$.next(3)
        replySubject$.next(4)

        setTimeout(() => {
            
            replySubject$.subscribe((data) => {
            console.log('observer2 - ',data)
            })
        },3000)

    }
}