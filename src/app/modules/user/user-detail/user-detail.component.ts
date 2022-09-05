import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { USERS } from '@data/constants/user.const';
import { UserService } from '@data/services/api/user.service';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  // public users: ICardUser[] = USERS
  public users?: ICardUser;
  public id: number;
  public currentUser?: ICardUser;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { 
    this.id = +this.route.snapshot.params['id'];
    // this.currentUser = this.users.find(user => user.id === +this.id) // Se debe agregar un + antes de this, ya que id llega como string, asi se parsea a numero
    // this.currentUser = this.users.find(user => user.id === this.id) // SE VA ATOMAR DSDE API
    // No se necesita dejarlo en ngOnInit por q las constantes se cargan de forma automatica, no es asincrona
    // console.log(this.currentUser)
  }

  ngOnInit(): void {
    this.userService.getUserById(this.id).subscribe(
      r => {
        if (!r.error) {
          this.currentUser = r.data
        }
      }
    )
  }

}
