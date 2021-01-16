import { Component, OnInit } from '@angular/core';
import { Track } from '../model/entities/track';
import { SharedService } from '../model/services/shared.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  track: Track;
  isPlaying: boolean;
  isMute: boolean;
  volume: number = 0.5;
  audio = new Audio();
  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.isPlaying = false;
    this.isMute = false;

    this.sharedService.getTrack().subscribe(
      track => {
        console.log('Shared service', track)
        this.track = track
        
        if(this.track != null){
          this.audio.src = this.track.preview;
          this.audio.load();
          this.audio.play();
          this.audio.volume = this.volume;

          this.isPlaying = true;
        }
      }
    )
  }

  play(){
    if(this.isPlaying){
      this.audio.pause()
    }
    else{      
      this.audio.play()
    }
    
    this.isPlaying = !this.isPlaying
  }

  mute(){
    this.audio.muted = !this.isMute
    this.isMute = !this.isMute
  }

  setVolume(event: any){
    this.volume = event.target.value / 100
    this.audio.volume = this.volume
  }

}
