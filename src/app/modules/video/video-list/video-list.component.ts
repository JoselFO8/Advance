import { Component, OnInit } from '@angular/core';
import { VIDEOS } from '@data/constants/video.const';
import { VideoService } from '@data/services/api/video.service';
import { ICardVideo } from '@shared/components/cards/card-video/icard-video.metadata';
import { format } from "timeago.js"

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
        // console.log("DATA",r.data);
        // console.log(
        //   "Pruebas format desde video-list", format(r.data.videos[0].createdAt, 'en_US')
        // );
        let formatDateVideos = r.data.videos.map(v => {
          let formatDate = format(v.createdAt, 'en_US')
          v.createdAt = formatDate
          return v
        })
        // this.videos = r.data.videos
        this.videos = formatDateVideos;
      }
    }) 
  }

  ngOnInit(): void {
    if(this.videos && this.videos?.length > 0) {
      console.log("VIDEOS", this.videos);
    }
  }
}
