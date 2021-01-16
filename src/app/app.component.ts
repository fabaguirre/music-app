import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent,interval } from 'rxjs';
import { debounceTime} from 'rxjs/operators';
import { Track } from './model/entities/track';
import { AlbumService } from './model/services/album.service';
import { SharedService } from './model/services/shared.service';
import { TrackService } from './model/services/track.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('searchBox') searchInput: ElementRef;
  
  user = 'Fabrizio A.';
  hideResult:boolean;
  searchResults: Track[]= new Array();

  track: Track;

  constructor(
    private trackService: TrackService,
    private albumService: AlbumService,
    private router:Router,
    private sharedService: SharedService
    ){}

  ngAfterViewInit(){
    let buttonStream$=fromEvent(this.searchInput.nativeElement, 'keyup')
    .pipe(debounceTime(500))
    .subscribe(()=>{
      let param: string = this.searchInput.nativeElement.value;
      if(param.length != 0 && param != null){
        this.search(this.searchInput.nativeElement.value);
        this.hideResult = false;
      }else{
        this.hideResult = true;
      }
    });
  }

  search(param: string) {
    this.searchResults = new Array()

    this.trackService.findByName(param).subscribe(
      data => {
        this.searchResults = this.searchResults.concat(data.data)
      }
    )

    this.albumService.findByAlbum(param).subscribe(
      data => {
        this.searchResults = this.searchResults.concat(data.data)
      }
    )
  }

  onResultClick(item){
    this.hideResult=true;
    this.searchInput.nativeElement.value = '';

    if(item.type == 'track'){
      this.track = item
      this.sharedService.loadTrack(item)
    }else{
      this.router.navigate(['/album',item.id]);
    }
  }
}
