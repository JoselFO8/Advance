import { Component, ElementRef, ViewChild } from '@angular/core';
import { SolidButtonComponent } from '@shared/components';
import { SOLID_BUTTON_TYPE_ENUM } from '@shared/components/buttons/solid-button/solid-button-type.enum';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})

export class VideoListComponent {
  // export class VideoListComponent {
  public posterElement: any = 'assets/images/poster.jpg'
  public videoElement: any = 'assets/video/video.mp4'
  public $btnTypes = SOLID_BUTTON_TYPE_ENUM;

  @ViewChild('mainButton') mainButton: SolidButtonComponent; // Para este caso aplica
  // @ViewChild('container') container: ElementRef; // Para este caso aplica
  @ViewChild('container',{static:false, read: ElementRef}) container: any;
  @ViewChild('mainVideo2',{static:false, read: ElementRef}) mainVideo2: any;
  

  constructor() {
    this.mainButton = new SolidButtonComponent;
  }


  playVideo(video: any) {
    console.log('PLAY VIDEO', video);
    if(video) video.play()
    return
  }

  pauseVideo(video: any) {
    console.log('PAUSE VIDEO', video);
    if(video) {
      video.pause()
    }
    return
  }
  
  onclick() {
    console.log('Prueba video');
  }

  onClicks(events: any) {
    console.log(events);
  }

  actions(events: SOLID_BUTTON_TYPE_ENUM) {
    switch (events) {
      case SOLID_BUTTON_TYPE_ENUM.SUCCESS:
        console.log('ejecutando metodo success');
        break;
      case SOLID_BUTTON_TYPE_ENUM.DANGER:
        console.log('ejecutando metodo danger');
        break;    
      default:
        console.log('ejecutando metodo primary');
        break;
    }
    console.log(events);
    
  }

  continue(status: boolean) {
    console.log(status ? 'si continuar' : 'no continuar');
  }

  actionsChild() {
    this.mainButton.title = 'Prueba'
    this.container.nativeElement.style.display = 'none'    
  }

}
