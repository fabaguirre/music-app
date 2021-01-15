import { Component, OnInit } from '@angular/core';
import { Track } from '../model/entities/track';
import { ChartService } from '../model/services/chart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  chartTracks: Track[];
  constructor(
    private chartService: ChartService
  ) { }

  ngOnInit() {
    this.chartService.get().subscribe(
      data => {
        this.chartTracks = data.tracks.data
      }
    )
  }

  play(track: Track){
    console.log('Play ' + track.title)

    let audio = new Audio();
    audio.src = track.preview;
    audio.load();
    audio.play();
  }

}
