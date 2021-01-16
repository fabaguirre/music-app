import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Track } from '../model/entities/track';
import { ChartService } from '../model/services/chart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() trackSelected: EventEmitter<Track> = new EventEmitter<Track>();

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
    this.trackSelected.emit(track)
  }

}
