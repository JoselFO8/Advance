import { Component, OnInit } from '@angular/core';

// Icons
import { faBars, faShare, faThumbsUp, faThumbsDown, faDownload, faHandScissors, faPlusSquare, faCarrot } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {
  public faBars = faBars;
  public faThumbsUp = faThumbsUp;
  public faThumbsDown = faThumbsDown;

  constructor() { }

  ngOnInit(): void {
  }

}
