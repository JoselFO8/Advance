

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from '@core/guards/no-auth.guard';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayComponent } from './video-play/video-play.component';

const routes: Routes = [ 
  {
    path: '', 
    component: VideoListComponent,
    // canActivate: [NoAuthGuard]
  }, 
  {
    path: ':id',
    component: VideoPlayComponent,
    canActivate: [NoAuthGuard]
  }
]; 

@NgModule({ 
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class VideoRoutingModule {}