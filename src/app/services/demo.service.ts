import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class Demoservice {
    private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    this.http.get(this.apiUrl).subscribe((s) => {
        console.log(s)
    })
    return this.http.get(this.apiUrl);
  }

  
}