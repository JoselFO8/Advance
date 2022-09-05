import { Component, Input, OnInit } from '@angular/core';
import { ICarouselItem } from './Icarousel-item.metadata'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  /**
   * Custom Properties (Propiedades q vienen desde el padre POR TANTO USAR @Input)
  */
  @Input() height = 500;
  @Input() isFullScreen = false;
  @Input() items: ICarouselItem[] = [];
  /**
   * Final Properties
  */
  public finalHeight: string | number = 0; // public para usarla en el html, pues private es para el componente
  public currentPosition = 0; // 0 por defecto

  constructor() { 
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
   }

  ngOnInit(): void {
    this.items.map( (i, index) => {
      i.id = index;
      i.marginLeft = 0;
    })

    console.log(this.items)
  }

  setCurrentPosition(position: number) {
    this.currentPosition = position;
    let index = this.items.find(i => i.id === 0);
    if (typeof index?.id === 'number') this.items[index?.id].marginLeft = -100 * position;
    console.log('setCurrentPosition', this.currentPosition)
    console.log('ITEMS', this.items)
  }

  // Metodos para ir a la siguiente posicion
  setNext() {
    console.log('setNext')
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if (nextPosition <= this.items.length - 1) {
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition = 0;
    }
    let index = this.items.find(i => i.id === 0);
    if (typeof index?.id === 'number') this.items[index.id].marginLeft = finalPercentage;
    this.currentPosition = nextPosition
    console.log('nextPosition',nextPosition,'currentPosition', this.currentPosition, 'finalPercentage', finalPercentage)
    console.log('ITEMS', this.items)
  }

  setBack() {
    console.log('setBack')
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;
    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition;
    } else {
      backPosition = this.items.length - 1; 
      finalPercentage = -100 * backPosition;
    }
    let index = this.items.find(i => i.id === 0);
    if (typeof index?.id === 'number') this.items[index.id].marginLeft = finalPercentage  
    this.currentPosition = backPosition
    console.log('backPosition',backPosition,'currentPosition', this.currentPosition, 'finalPercentage', finalPercentage)
    console.log('ITEMS', this.items)
  }

}
