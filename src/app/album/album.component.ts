import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../model/entities/album';
import { AlbumService } from '../model/services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  album: Album;
  
  constructor(private activatedToute: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit() {
    this.activatedToute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.albumService.get(id)
        .subscribe(
          album => this.album = album
        )
      }
    })
  }

}
