import { Component } from "@angular/core";
import { concat, distinctUntilChanged, from, interval, Observable, of, take, takeLast, tap } from "rxjs";

@Component({
    selector:'app-obs32',
    imports:[],
    template:`<h2>DistinctUntilChanged operator</h2>
    <h6>distinctUntilChanged prevents consecutive duplicate values from being emitted.

👉 It only compares a value with the previous emitted value, not all past values.</h6>
    <pre>
    Core behavior

Emits the first value
For each next value:
Emits it only if it’s different from the previous one
Comparison is strict equality (===) by default
Stream does not complete early
    </pre>
    `
    ,
    styles:[],
    standalone:true
})

export class Observable32Component {
    
    ngOnInit() {
        
        of(1,2,1,1,3,2).pipe(distinctUntilChanged()).subscribe((val) => console.log(val))
        const employees = [
            {id:1, name:'Raja'},
            {id:4, name:'Raja raj'},
            {id:2, name:'Ram'},
            {id:3, name:'Varma'},
        ]
        const employees1 = [
            {id:1, name:'Raja'},
            {id:1, name:'Raja'},
            {id:2, name:'Ram'},
            {id:3, name:'Varma'},
        ]

        from(employees).pipe(distinctUntilChanged()).subscribe((val) => {
            console.log('It is checking reference of Obj', val)
        })

        from(employees1).pipe(distinctUntilChanged()).subscribe((val) => {
            console.log('It is checking reference of Obj', val)
        })
    }
}