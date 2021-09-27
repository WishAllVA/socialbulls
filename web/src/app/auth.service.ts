import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  signin = (userDetails) => {
    return this.http.post(`${apiUrl}/auth/signin`, userDetails, httpOptions)
  }

  signup = (userDetails) => {
    return this.http.post(`${apiUrl}/auth/signup`, userDetails, httpOptions)
  }

}
