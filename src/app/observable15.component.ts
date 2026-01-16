import { Component } from "@angular/core";
import { filter, interval, map, of, switchMap, take, takeLast, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

@Component({
    selector:'app-observable15',
    imports:[],
    template:`<h2>SwitchMap</h2>
    <h5>Every new id cancels the previous HTTP request

    Only the latest request’s response is emitted</h5>
    <pre>
    Use switchMap when:

You want latest value only

Search/autocomplete

Live filtering

Route changes
    </pre>`,
    styles:[],
    standalone:true
})

export class Observable15Component {
    
    ngOnInit() {
        
                of(1,2,3,4)
                    .pipe(
                        filter((id) => id > 0 ),
                        tap((id) => console.log(id)),
                        switchMap((id) =>{
                            return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
                                map((data) =>{
                                return data.response
                            }))
                        }),
                        
        
                        
                    ).subscribe((val) => console.log(val))
        
        

    }
}