import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { catchError,Observable, of } from "rxjs";

@Component({
    selector:'app-obs21',
    imports:[],
    template:`<h2>CatchError</h2>
    <pre>
    catchError is an error-handling operator that lets you intercept an error, handle it, and decide what the stream should do next.
    uses:
    ✔ Prevents app crash
    ✔ UI still renders
    </pre>
    `,
    styles:[],
    standalone:true
})

export class Observable21Component {
    constructor(private http: HttpClient){}
    private apiUrl = 'https://jsonplaceholder.typicode.com/userss';

    
    ngOnInit() {
        
       let source$ = new Observable((observer) => {
        observer.next('A')
        observer.next('B')
        observer.error('error occured..')
        observer.next('C')
       }) 

       source$.pipe(catchError((error) => {
        throw 'Error Occured...'
       })).subscribe({
        next: (data) => console.log(data),
        error: (error) => console.log(error),
        complete: () => console.log('Completed exected..') 
       })

       console.log('---')

       this.http.get(this.apiUrl).pipe(catchError((error) => {
            console.error('got error ',error)
         return of([])
       })).subscribe((val) => {
        console.log('Value- ',val)
       })
    }

    
}