// importar componentes
import { CardUserComponent } from "./cards/card-user/card-user.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { TitleH1Component } from "./titles/title-h1/title-h1.component";


// Loaders
import { CardLoaderComponent } from "./loaders/card-loader/card-loader.component";

// Complex Table
import { ComplexTableComponent } from "./tablets/complex-table/complex-table.component";
import { CtTheaderComponent } from "./tablets/complex-table/ct-theader/ct-theader.component";
import { CtTbodyComponent } from "./tablets/complex-table/ct-tbody/ct-tbody.component";
import { CtTfooterComponent } from "./tablets/complex-table/ct-tfooter/ct-tfooter.component";

// fromComponents ?
export const components: any[] = [
    CardUserComponent, // Organizar de forma alfabetica 
    CarouselComponent,
    TitleH1Component,
    // Loaders
    CardLoaderComponent,
    // Complex-Table
    ComplexTableComponent,
    CtTheaderComponent,
    CtTbodyComponent,
    CtTfooterComponent
];

// export all components
export * from './cards/card-user/card-user.component';
export * from './titles/title-h1/title-h1.component';

// Loaders
export * from './loaders/card-loader/card-loader.component'

// Complex Table
export * from "./tablets/complex-table/complex-table.component";
export * from "./tablets/complex-table/ct-theader/ct-theader.component";
export * from "./tablets/complex-table/ct-tbody/ct-tbody.component";
export * from "./tablets/complex-table/ct-tfooter/ct-tfooter.component";
