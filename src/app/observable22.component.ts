import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { catchError, interval, Observable, of, retry, take, takeLast, tap } from "rxjs";

@Component({
    selector: 'app-obs22',
    imports: [],
    template: `<h2>Retry</h2>
    <pre>
    retry is an error-handling operator that automatically resubscribes to the source Observable when an error occurs.
    uses:
    ✔ Retries up to 3 times
✔ If it still fails → error is thrown.
✔ Handles temporary network issues
✔ Falls back gracefully
    </pre>
    `,
    styles: [],
    standalone: true
})

export class Observable22Component {
    constructor(private http: HttpClient){}
    private apiUrl = 'https://jsonplaceholder.typicode.com/userss';

    ngOnInit() {

        let source$ = new Observable((observer) => {
            observer.next('A')
            observer.next('B')
            observer.error('error occured..')
            observer.next('C')
        })
        source$.pipe(retry(2)).subscribe((val) => {
            console.log('observer1- ', val)
        })

        this.http.get(this.apiUrl).pipe(
            retry(2),
            catchError(() => of([]))
        );

    }
}