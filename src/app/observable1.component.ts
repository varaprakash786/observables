import { Component } from "@angular/core";
import { Observable } from "rxjs";

@Component({
    selector:'app-observable1',
    imports:[],
    template:`<h2>Creating new Custom Observable</h2>
    <h6>Check with error line no 39</h6>`,
    styles:[],
    standalone:true
})

export class Observable1Component {
    
    ngOnInit() {

        const newObservable  = new Observable<number>(observer => {
     /** If I remove number type(new Observable<number>) I will get error in line 39(subscribe(observer)) */
            observer.next(100),
            observer.next(200),
            
            observer.complete();
        })
        /** Calling Observal by subscribe mtd1 Starts*/
        newObservable.subscribe(
            (data) => console.log(data),
            (error) => console.log(error),
            () => console.log('Completed')
        )
        /** Calling Observal by subscribe mtd1 Ends*/
        console.log('---------')
        /** Calling Observal by subscribe mtd2 Strats*/
        let observer = {
            next: (data: number) => console.log(data),
            error: (error: string) => console.log(error),
            complete: () => console.log('Complete all done')

        }
        newObservable.subscribe(observer)
          /** Calling Observal by subscribe mtd2 Ends*/
    }
}