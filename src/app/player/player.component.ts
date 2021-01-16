import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Track } from '../model/entities/track';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnChanges {

  @Input() track: Track;
  isPlaying: boolean;
  isMute: boolean;
  audio = new Audio();
  constructor() { }

  ngOnInit() {
    this.isPlaying = false;
    this.isMute = false;
  }

  ngOnChanges(changes: SimpleChanges){
    this.audio.src = this.track.preview;
    this.audio.load();
    this.audio.play();

    this.isPlaying = true;
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
    this.audio.volume = event.target.value
  }

}
