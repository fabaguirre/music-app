import { Component, OnInit } from '@angular/core';
import { Album } from '../model/entities/album';
import { Artist } from '../model/entities/artist';
import { Track } from '../model/entities/track';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  track: Track;
  constructor() { }

  ngOnInit() {
    this.track = new Track();
    this.track.title = 'Una vez';
    this.track.artist = new Artist();
    this.track.artist.name = 'Bad Bunny';
    this.track.album = new Album();
    this.track.album.title = 'YHLQMDLG';
    this.track.album.cover_medium = 'https://musica.news/wp-content/uploads/2020/03/Portada-de-YHLQMDLG-Bud-Bunny.jpg';
  }

}
