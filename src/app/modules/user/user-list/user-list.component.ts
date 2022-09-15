import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS } from '@data/constants/carousel.const';
// import { USERS } from '@data/constants/user.const';
import { UserService } from '@data/services/api/user.service';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { ICarouselItem } from '@shared/components/carousel/Icarousel-item.metadata';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  // public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS; // Ahora inyectar informacion en el html del componente
  public users?: ICardUser[];


  constructor(
    private userService: UserService
  ) {
    this.userService.getAllUser().subscribe(r => {
        if (!r.error) {
          this.users = r.data.users;
        }
      }
    )
  }

  ngOnInit(): void {
  }

}
