import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-video',
  templateUrl: './card-video.component.html',
  styleUrls: ['./card-video.component.scss']
})
export class CardVideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  playVideo(video: any) {
    console.log(video)
    if(video) {
      video.play()
    }
    return
  }

  pauseVideo(video: any) {
    console.log(video)
    if(video) {
      video.pause();
      video.currentTime = 0;
    }
    return
  }

}
