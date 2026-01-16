import { Component } from "@angular/core";
import { interval, take, takeLast, tap, throttle } from "rxjs";

@Component({
    selector: 'app-observable8',
    imports: [],
    template: `<h2>Throttle</h2>
    <pre>The RxJS throttle operator emits the first value from a source observable, 
    then ignores subsequent values for a duration determined by a durationSelector function (which returns another observable), 
    repeating the process.
    useful for rate-limiting events like button clicks or mouse movements to prevent overwhelming handlers. </pre>`,
    styles: [],
    standalone: true
})

export class Observable8Component {

    ngOnInit() {

        interval(1000).pipe(take(20),throttle((val) => interval(2000), { leading: true, trailing: true }))
            .subscribe(
                (v) => console.log(v),
                (error) => console.log(error),
                () => console.log('completed...')
            )

    }


}