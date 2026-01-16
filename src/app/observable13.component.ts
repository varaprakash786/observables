import { Component } from "@angular/core";
import { concatMap, interval, map, of, take, takeLast, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

@Component({
    selector:'app-observable13',
    imports:[],
    template:`<h2>concatMap(order of observable is garenteed,which ajax call executed in order follows order(1,2,3,4...))</h2>`,
    styles:[],
    standalone:true
})

export class Observable13Component {
    
    ngOnInit() {
        
          of(1, 2, 3)//outer observable
                   .pipe(
                       concatMap((id) => {
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