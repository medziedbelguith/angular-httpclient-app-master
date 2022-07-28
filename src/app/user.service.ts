import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { retry,catchError } from 'rxjs/operators';
import { stringify } from 'querystring';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public apiURL = 'https://reqres.in/api';
  constructor(public http: HttpClient) {}
  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getUsers():Observable<User>{
    return this.http.get<User>(this.apiURL + '/users')
    .pipe(
      retry(1),
      catchError(this.handleError)
    ) 
  }
  getUser(id:any):Observable<User>{
    return this.http.get<User>(this.apiURL + '/users/'+id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  createUser(user:any):Observable<User>{
    return this.http.post<User>(this.apiURL + '/users/',stringify(user),this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  updateUser(id:any,user:any):Observable<User>{
    return this.http.put<User>(this.apiURL +'/users/'+id,stringify(user),this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  deleteUser(id:any):Observable<User>{
    return this.http.delete<User>(this.apiURL +'/users/'+id,this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
