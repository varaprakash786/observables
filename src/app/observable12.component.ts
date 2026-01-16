import { Component } from "@angular/core";
import { interval, map, mergeMap, of, take, takeLast, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

@Component({
    selector: 'app-observable12',
    imports: [],
    template: `<h2>MergeMap(order of observable not garenteed,which ajax call completed first well be exected)</h2>`,
    styles: [],
    standalone: true
})

export class Observable12Component {

    ngOnInit() {
        of(1, 2, 3)//outer observable
            .pipe(
                mergeMap((id) => {
                    console.log(id)
                    return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
                        map((data) => {
                            return data.response
                        })
                    )
                },
                )
            ).subscribe((val) => {
                console.log(val)
            })

    }
}