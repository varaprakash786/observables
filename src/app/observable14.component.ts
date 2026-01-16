import { Component } from "@angular/core";
import { exhaustMap, filter, interval, map, take, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

@Component({
    selector:'app-observable14',
    imports:[],
    template:`<h2>ExhaustMap(It excludes outer observal value until ajax(inner Obs) call is)</h2>
    <h6>While a request is in progress, all new ids are ignored

Only when the request completes can the next one start</h6>`,
    styles:[],
    standalone:true
})

export class Observable14Component {
    
    ngOnInit() {
        
        interval(100)
            .pipe(
                filter((id) => id > 0 ),
                tap((id) => console.log(id)),
                exhaustMap((id) =>{
                    return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
                        map((data) =>{
                        return data.response
                    }))
                }),
                take(5),

                
            ).subscribe((val) => console.log(val))

    }
}