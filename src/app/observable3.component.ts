import { Component } from "@angular/core";
import { filter, interval, map, of, Subscription, tap } from "rxjs";

@Component({
    selector: 'app-observable3',
    imports: [],
    template: `<h2>Pipe and Map</h2>
    <h6>pipe(operator1(),operator1())</h6>
    `,
    styles: [``],
    standalone: true
})

export class Observable3Component {
    subObs!: Subscription;
    ngOnInit() {
        const newObservable = of(2,6,8,3,31,7,5,9,1,56,33,24);

        const subObs = newObservable.pipe(
            filter((num) => {
                return num % 2 == 0
            }),
            map((val) => { 
                return val * 10 
            }))

        subObs.subscribe(
            (val) => console.log('++ ', val),
            (error) => console.log(error),
            () => console.log('Compled Execution')
        )

    }

    ngDestroy() {
        this.subObs.unsubscribe()
    }
}