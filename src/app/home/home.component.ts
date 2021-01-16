import { Component, OnInit, Output } from '@angular/core';
import { Track } from '../model/entities/track';
import { ChartService } from '../model/services/chart.service';
import { SharedService } from '../model/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  chartTracks: Track[];
  constructor(
    private chartService: ChartService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.chartService.get().subscribe(
      data => {
        this.chartTracks = data.tracks.data
      }
    )
  }

  play(track: Track){
    this.sharedService.loadTrack(track)
  }

}
