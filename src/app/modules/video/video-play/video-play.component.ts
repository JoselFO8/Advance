import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-play',
  templateUrl: './video-play.component.html',
  styleUrls: ['./video-play.component.scss']
})
export class VideoPlayComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('keydown', event => {
      console.warn(`KEYDOWN: Desde addevent: ${event.key}`)
    })
    
    window.addEventListener('click', this.print)
  }

  ngOnDestroy(): void {
    window.removeEventListener('click', this.print)
  }

  private print(event: MouseEvent) {
    console.log('CLICK', event.x, event.y);
  }

}
