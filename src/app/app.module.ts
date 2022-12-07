import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component'; 
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { HeaderComponent } from './layout/header/header.component';
import { LeftNavComponent } from './layout/left-nav/left-nav.component';
import { LeftNavMenuComponent } from './layout/left-nav/left-nav-menu/left-nav-menu.component';
import { Page404Component } from './modules/server/page404/page404.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ 
    AppComponent, 
    SkeletonComponent,
    FooterComponent,
    NavigationComponent,
    HeaderComponent,
    LeftNavComponent,
    LeftNavMenuComponent,
    Page404Component
  ],
  imports: [ 
    BrowserModule,
    // Core
    CoreModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [ 
    {
      provide: LocationStrategy, 
      useClass: PathLocationStrategy
    }
  ], 
  bootstrap: [AppComponent] 
})
export class AppModule { }
