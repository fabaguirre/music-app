import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { fromEvent,interval } from 'rxjs';
import { debounceTime} from 'rxjs/operators';
import { Track } from './model/entities/track';
import { TrackService } from './model/services/track.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('searchBox') searchInput: ElementRef;
  
  title = 'FractalUp Music';
  hideResult:boolean;
  searchResults: Track[]= new Array();

  constructor(private trackService: TrackService){}

  ngAfterViewInit(){
    let buttonStream$=fromEvent(this.searchInput.nativeElement, 'keyup')
    .pipe(debounceTime(500))
    .subscribe(()=>{
      let param: string = this.searchInput.nativeElement.value;
      if(param.length != 0){
        this.search(this.searchInput.nativeElement.value);
        this.hideResult = false;
      }else{
        this.hideResult = true;
      }
    });
  }

  search(param: string) {
    //this.searchResults = new Array()
    
    /*for (let index = 0; index < 60; index++) {
      let t1 = new Track()
      t1.title='Hola mundo' + index.toString()
      this.searchResults.push(t1)
      
    }*/

    this.searchResults = new Array()
    this.trackService.findByAlbum(param).subscribe(
      data => {
        console.log(data.data)
        this.searchResults = this.searchResults.concat(data.data)
        console.log(this.searchResults.length)
      }
    )
    this.trackService.findByName(param).subscribe(
      data => {
        console.log(data.data)
        this.searchResults = this.searchResults.concat(data.data)
        console.log(this.searchResults.length)
      }
    )
  }

  onResultClick(track: Track){
    this.hideResult=true;
    console.log(track)
  }
}
