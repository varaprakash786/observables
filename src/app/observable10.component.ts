import { Component } from "@angular/core";
import { catchError, interval, map, of, take, takeLast, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

@Component({
    selector:'app-observable10',
    imports:[],
    template:`<h2>Ajax Obs</h2>`,
    styles:[],
    standalone:true
})

export class Observable10Component {

    newArr = [
        {id: 1, name: 'Leanne Graham', username: 'Bret'},
        
{id: 2, name: 'Ervin Howell', username: 'Antonette'},

{id: 3, name: 'Clementine Bauch', username: 'Samantha'},

{id: 4, name: 'Patricia Lebsack', username: 'Karianne'}
    ]
    
    ngOnInit() {

        const mapArr = this.newArr.map((s) => ({
            id: s.id,name: s.name
        }))

        console.log(mapArr)
        
        ajax(`https://jsonplaceholder.typicode.com/users`).pipe(
            map(userResponse => console.log(userResponse.response)),
            catchError(error => {
                console.log('error.', error)
                return of(error)
            })
        ).subscribe((val) => console.log(val));

        ajax.getJSON(`https://jsonplaceholder.typicode.com/users`).pipe(
        
            map(userArray => {
                console.log(userArray)
            }) 
        ).subscribe((val) => console.log(val))

    }
}