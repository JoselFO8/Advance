import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { INTERNAL_PATHS, INTERNAL_ROUTES } from '@data/constants/routes';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { Page404Component } from '@modules/server/page404/page404.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: INTERNAL_PATHS.AUTH_LOGIN, 
    pathMatch: 'full', 
  },
  {
    path: INTERNAL_PATHS.API_ERROR_404,
    component: Page404Component
  },
  {
    path: 'auth', 
    loadChildren: () => import('@modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'panel',
    component: SkeletonComponent,
    canActivate: [AuthGuard],
    children: [ 
      {
        path: 'videos',
        loadChildren: () => import ('@modules/video/video.module').then((m) => m.VideoModule)
      },
      {
        path: 'users',
        loadChildren: () => import ('@modules/user/user.module').then((m) => m.UserModule)
      },
    ]
  },
  // {
  //   path: 'users',
  //   // component: UserListComponent,
  //   loadChildren: () => import ('@modules/user/user.module').then((m) => m.UserModule)
  // },
  {
    path: '**', 
    redirectTo: INTERNAL_ROUTES.AUTH_LOGIN, 
    pathMatch: 'full', 
  }

]; 

@NgModule({ 
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
