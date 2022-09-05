// Crear los imports

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';

import * as fromComponents from './components';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardLoaderComponent } from './components/loaders/card-loader/card-loader.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  declarations: [...fromComponents.components, CarouselComponent, CardLoaderComponent], 
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
