import { Component } from "@angular/core";
import { AsyncSubject, interval, take, takeLast, tap } from "rxjs";

@Component({
    selector:'app-obs20',
    imports:[],
    template:`<h2>AsyncSubject</h2>
    <pre>
    An AsyncSubject is a special type of Subject that:

✅ Emits only the last value

✅ Emits it only when the subject completes

If it never completes → nothing is emitted.
    </pre>`,
    styles:[],
    standalone:true
})

export class Observable20Component {
    
    ngOnInit() {
        
        let asyncSubject$ = new AsyncSubject<number>();
                asyncSubject$.next(1);
        
        asyncSubject$.subscribe((data) => {
            console.log('observer1 - ',data)
        })
        asyncSubject$.next(2)
        asyncSubject$.next(3)
        asyncSubject$.next(4)
        asyncSubject$.complete()

        setTimeout(() => {
            
        asyncSubject$.subscribe((data) => {
            console.log('observer2 - ',data)
        })
        },3000)
    }
}