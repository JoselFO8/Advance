import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayComponent } from './video-play/video-play.component';
import { VideoRoutingModule } from './video-routing.module';
import { VideoDetailComponent } from './video-detail/video-detail.component';



@NgModule({
  declarations: [
    VideoListComponent,
    VideoPlayComponent,
    VideoDetailComponent
  ],
  imports: [
    VideoRoutingModule,
    SharedModule
  ]
})
export class VideoModule { }
