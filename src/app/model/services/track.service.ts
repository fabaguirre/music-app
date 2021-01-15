import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Track } from '../entities/track';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private proxy: string = 'https://cors-anywhere.herokuapp.com/';
  private url: string = 'https://api.deezer.com/search/track?q='
  
  constructor(private http: HttpClient) { }

  findByName(name: string): Observable<any>{
    return this.http.get<any>(this.proxy + this.url + name);
  }

}
