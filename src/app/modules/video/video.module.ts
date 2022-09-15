import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayComponent } from './video-play/video-play.component';



@NgModule({
  declarations: [
    VideoListComponent,
    VideoPlayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VideoModule { }
