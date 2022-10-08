import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '@data/services/api/video.service';
import { ICardVideo } from '@shared/components/cards/card-video/icard-video.metadata';

@Component({
  selector: 'app-video-play',
  templateUrl: './video-play.component.html',
  styleUrls: ['./video-play.component.scss']
})
export class VideoPlayComponent implements OnInit {
  // public video?: ICardVideo;
  public id: number;
  public currentVideo?: ICardVideo;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService
  ) {
    this.id = this.route.snapshot.params['id'];
    console.log("Desde video-play This ID", this.id);
  }

  ngOnInit(): void {
    this.videoService.getVideoById(this.id).subscribe(
      r => {
        if (!r.error) {
          this.currentVideo = r.data.video
          console.log('this.currentVideo', this.currentVideo);
        }
      }
    )
  }


}
