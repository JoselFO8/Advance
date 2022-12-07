import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBars, faBell, faComment, faGlassCheers } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() showMenu = new EventEmitter<any>() 
  public faBars = faBars;
  public faBell = faBell;
  public faComment = faComment;
  public prueba = faGlassCheers;
  public avatar = 'assets/images/defaults/Man_1.jpg';
  public logo = 'assets/images/logo/VideoTube.png';

  constructor() { }

  ngOnInit(): void {
  }

}
