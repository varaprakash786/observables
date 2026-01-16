import { Component } from "@angular/core";
import { constObs, functionObs } from "./services/function";

@Component({
    selector:'app-observable',
    imports:[],
    template:`<h2>Diff between Fun and Observables</h2>
    <h6>Observables emits multiple values where funs returns single value</h6>
    <h6>Observables can be called by asynchronus(using setTimeOut after 3 sec)</h6>`,
    styles:[],
    standalone:true
})

export class ObservableComponent {
    constructor(){
        console.log('fun call Begining')
        console.log(functionObs())
        console.log('fun call End')
        console.log('---------')
        console.log('observer call Begining')
        constObs.subscribe((data) => {
            console.log(data)
        })
        console.log('observer call Ending')
    }

    ngDestroy(){
        
    }
    
}