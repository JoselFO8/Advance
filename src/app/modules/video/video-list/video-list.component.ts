import { AfterViewInit, asNativeElements, Component, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { SolidButtonComponent } from '@shared/components';
import { SOLID_BUTTON_TYPE_ENUM } from '@shared/components/buttons/solid-button/solid-button-type.enum';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})

// export class VideoListComponent implements AfterViewInit {
export class VideoListComponent {
  public videoElement: any = 'assets/images/poster.jpg'
  public $btnTypes = SOLID_BUTTON_TYPE_ENUM;

  @ViewChild('mainButton') mainButton: SolidButtonComponent; // Para este caso aplica
  // @ViewChild('container') container: ElementRef; // Para este caso aplica
  @ViewChild('container',{static:false, read: ElementRef}) container: any;
  @ViewChild('mainVideo',{static:false, read: ElementRef}) mainVideo: any;
  // @ViewChild('myVideo') myVideo: any;

  constructor() {
    // this.mainButton = {
    //   title: '',
    //   type: SOLID_BUTTON_TYPE_ENUM.PRIMARY,
    //   url: '',
    //   onClick: new EventEmitter()
    // }

    this.mainButton = new SolidButtonComponent;

    // this.container = ;
  }

  // ngAfterViewInit() {
  //   let video = this.myVideo.nativeElement;
  //   video.src = URL.createObjectURL(this.videoElement);
  //   video.play();
  // }

  // onClicks(events: any) {
  //   console.log(events);
  // }

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

  // //First will do with single video 
  // //This code will play for first video only. now will do code for multiple videos
  // document.querySelector(".videoplay").addEventListener("mouseover", function() {
  //     this.play()
  // })

  // document.querySelector(".videoplay").addEventListener("mouseleave", function() {
  //     this.pause()
  // })
  // </script>

}
