import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient, private authService:AuthService) { }

  saveBook(books:any[]):Observable<any>{
    const tk = this.authService.getToken();
    return this.http.post("https://vaphttp-a7f9e-default-rtdb.firebaseio.com/data.json?auth=" +tk, books);

  }

  getBook():Observable<any>{
  const tk = this.authService.getToken();
    return this.http.get("https://vaphttp-a7f9e-default-rtdb.firebaseio.com/data.json?auth=" +tk);

  }

}
