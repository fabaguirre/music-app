import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private proxy: string = 'https://cors-anywhere.herokuapp.com/';
  private url: string = 'https://api.deezer.com/chart/0'
  
  constructor(private http: HttpClient) { }

  get(): Observable<any>{
    return this.http.get<any>(this.proxy + this.url);
  }

}
