import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../model/entities/album';
import { Track } from '../model/entities/track';
import { AlbumService } from '../model/services/album.service';
import { SharedService } from '../model/services/shared.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  album: Album;
  
  constructor(private activatedToute: ActivatedRoute, private albumService: AlbumService, private sharedService: SharedService) { }

  ngOnInit() {
    this.activatedToute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.albumService.get(id)
        .subscribe(
          album => {
            this.album = album
            this.album.tracks = album.tracks.data
          }
        )
      }
    })
  }

  play(track: Track){
    track.album = this.album
    this.sharedService.loadTrack(track)
  }

}
