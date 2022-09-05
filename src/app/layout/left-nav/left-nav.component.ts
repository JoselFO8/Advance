import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LEFT_NAV_MENUS } from '@data/constants/left-nav-menu.const';
import { ILeftNavMenu } from '@data/interfaces';
import { AuthService } from '@data/services/api/auth.service';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {
  @Output() showMenu = new EventEmitter<any>() 
  public faBars = faBars;
  public name = 'Marcelo Stephens'
  public position = 'CEO';
  public avatar = 'assets/images/defaults/Man_1.jpg';
  public logo = 'assets/images/defaults/Logo_2.png';
  public menus: ILeftNavMenu[] = LEFT_NAV_MENUS; 
  public logoutMenu: ILeftNavMenu;
  
  constructor(
    private authService: AuthService
  ) {
    this.logoutMenu = {
      title: '',
      links: [
        {
          icon: faTimes,
          name: 'Cerrar sesion',
          method: () => this.authService.logout()
        }
      ]
    }
   }

  ngOnInit(): void {
  }

}
