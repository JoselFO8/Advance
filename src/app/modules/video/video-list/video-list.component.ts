import { Component } from '@angular/core';
import { VIDEOS } from '@data/constants/video.const';
import { ICardVideo } from '@shared/components/cards/card-video/icard-video.metadata';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})

export class VideoListComponent {
  public videos?: ICardVideo[] = VIDEOS;

  constructor(
    // private videoService:
  ) {
    
  }

  // playVideo(video: any) {
  //   if(video) {
  //     video.play()
  //   }
  //   return
  // }

  // pauseVideo(video: any) {
  //   if(video) {
  //     video.pause();
  //     video.currentTime = 0;
  //   }
  //   return
  // }
}
