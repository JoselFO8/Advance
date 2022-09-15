import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {
  public showLeftNav = false;
  public $theme: 'dark' | 'red' | 'blue-dark' | 'yellow' = 'red'
  constructor() {  }

  showMenu() {
    this.showLeftNav = !this.showLeftNav; 
  }

  ngOnInit(): void {
  }

}
