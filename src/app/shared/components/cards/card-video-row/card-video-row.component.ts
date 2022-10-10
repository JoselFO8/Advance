import { Component, Input, OnInit } from '@angular/core';
import { ICardVideo } from '../card-video/icard-video.metadata';

@Component({
  selector: 'app-card-video-row',
  templateUrl: './card-video-row.component.html',
  styleUrls: ['./card-video-row.component.scss']
})
export class CardVideoRowComponent implements OnInit {
  @Input() data?: ICardVideo;

  constructor() { }

  ngOnInit(): void {
  }

  playVideo(video: any) {
    if(video) {
      video.play()
    }
    return
  }

  pauseVideo(video: any) {
    if(video) {
      video.pause();
      video.currentTime = 0;
    }
    return
  }

}
