import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor( private http: HttpClient,) { }

  public callService(apiUrl): Observable<any> {
    return this.http.get(apiUrl);
  }
}
