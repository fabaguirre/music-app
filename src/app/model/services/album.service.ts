import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private proxy: string = 'https://cors-anywhere.herokuapp.com/';
  private url: string = 'https://api.deezer.com/album/'
  private urlSearch: string = 'https://api.deezer.com/search/album?q='
  
  constructor(private http: HttpClient) { }

  get(id: string): Observable<any>{
    return this.http.get<any>(this.proxy + this.url + id);
  }

  findByAlbum(album: string): Observable<any>{
    return this.http.get<any>(this.proxy + this.urlSearch + album);
  }

}
