import { Component, Input, OnInit } from '@angular/core';
import { ICardVideo } from './icard-video.metadata';

@Component({
  selector: 'app-card-video',
  templateUrl: './card-video.component.html',
  styleUrls: ['./card-video.component.scss']
})
export class CardVideoComponent implements OnInit {
  @Input() data?: ICardVideo;

  constructor() {}

  ngOnInit(): void {
    // if (this.data) {
    //   console.log('DATA+++',this.data);
    // }
  }

  playVideo(video: any) {
    // console.log(video)
    if(video) {
      video.play()
    }
    return
  }

  pauseVideo(video: any) {
    // console.log(video)
    if(video) {
      video.pause();
      video.currentTime = 0;
    }
    return
  }

}
