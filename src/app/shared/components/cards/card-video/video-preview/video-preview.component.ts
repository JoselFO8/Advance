import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-video-preview, [app-video-preview]',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.scss']
})
export class VideoPreviewComponent {
  @Input() poster = '';
  @Input() src = '';
  // @Output() onHover = addEventListener

}
