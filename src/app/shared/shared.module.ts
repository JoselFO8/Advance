// Crear los imports

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';

import * as fromComponents from './components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VideoPreviewComponent } from './components/cards/card-video/video-preview/video-preview.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  declarations: [
    ...fromComponents.components,
    VideoPreviewComponent
  ], 
  exports: [ 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule, 
    FontAwesomeModule,
    ...fromComponents.components
  ]
})
export class SharedModule { }
