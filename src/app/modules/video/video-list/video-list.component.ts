import { Component, OnInit } from '@angular/core';
import { VIDEOS } from '@data/constants/video.const';
import { VideoService } from '@data/services/api/video.service';
import { ICardVideo } from '@shared/components/cards/card-video/icard-video.metadata';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})

export class VideoListComponent implements OnInit {
  // public videos?: ICardVideo[] = VIDEOS;
  public videos?: ICardVideo[] | undefined;

  constructor(
    private videoService: VideoService
  ) {
    this.videoService.getAllVideos().subscribe(r => {
      if (!r.error) {
        console.log("DATA",r.data);
        
        this.videos = r.data.videos;
      }
    }) 
  }

  ngOnInit(): void {
    if(this.videos && this.videos?.length > 0) {
      console.log("VIDEOS", this.videos);
    }
  }
}
