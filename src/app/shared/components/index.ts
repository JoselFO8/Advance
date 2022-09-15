// importar componentes
import { CardUserComponent } from "./cards/card-user/card-user.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { TitleH1Component } from "./titles/title-h1/title-h1.component";


// Loaders
import { CardLoaderComponent } from "./loaders/card-loader/card-loader.component";

// fromComponents ?
export const components: any[] = [
    CardUserComponent, // Organizar de forma alfabetica 
    CarouselComponent,
    TitleH1Component,
    // Loaders
    CardLoaderComponent,
];

// export all components
export * from './cards/card-user/card-user.component';
export * from './titles/title-h1/title-h1.component';

// Loaders
export * from './loaders/card-loader/card-loader.component'