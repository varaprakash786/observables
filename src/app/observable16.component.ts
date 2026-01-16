import { Component } from "@angular/core";
import { interval, Observable, of, Subject, take, takeLast, tap } from "rxjs";

@Component({
    selector:'app-observable16',
    imports:[],
    template:`<h2>Subjects</h2>
    <h6>An Rxjs Subject is a special Type of Observable that allows values to be multicasted to many Observers.
    Subject is called “multicast” because one emitted value is delivered to multiple subscribers at the same time.</h6>
    <pre>Subjects are also observers, means that all subjects can have methods like Next, error and Complete,
    that means subjects can also act as observers and subscribe to the observables.By this way, we understood that subjects are both observables and observers.</pre>`,
    styles:[],
    standalone:true
})

export class Observable16Component {
    /** Difference between observable and subject */
    
    ngOnInit() {
        this.observable();
        this.subjectAsObservable();
    }

    observable(){
        let observable$ = new Observable<number>((observer) => {
            observer.next(1);
            observer.next(2);
            observer.next(3);
            observer.complete();
        })

        let observer1 = {
            next: (data: number) => {
                console.log('observer1 ',data);
            },
            error: (error: any) => {
                console.log(error)
            },
            complete :() => {
                console.log('Observer1 is Completed...')
            }

        }

        let observer2 = {
            next: (data: number) => {
                console.log('observer2 ',data);
            },
            error: (error: any) => {
                console.log(error)
            },
            complete :() => {
                console.log('Observer2 is Completed...')
            }

        }

        observable$.subscribe(observer1);
        observable$.subscribe(observer2);
    }

    subjectAsObservable(){
        let observable$ = of(1,2,3,4,5);
        let subject = new Subject<number>();

        let observer1 = {
            next: (data: number) => {
                console.log('observer1 ',data);
            },
            error: (error: any) => {
                console.log(error)
            },
            complete :() => {
                console.log('Observer1 is Completed...')
            }

        }

        let observer2 = {
            next: (data: number) => {
                console.log('observer2 ',data);
            },
            error: (error: any) => {
                console.log(error)
            },
            complete :() => {
                console.log('Observer2 is Completed...')
            }

        }
        subject.subscribe(observer1)
        subject.subscribe(observer2)

        observable$.subscribe(subject)

    }
}