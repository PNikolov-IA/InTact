import { AuthGuardService } from './core/guards/auth.guard';
import { AnonymousGuardService } from './core/guards/anonymous.guard';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
=======
>>>>>>> 0fff236f1ce5a36b89c35375b3e5b80a2ccffe39
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RegisterComponent } from './auth/register/register.component';
<<<<<<< HEAD
import { UsersComponent } from './users/users.component';
=======
import { RoleGuardService } from './core/guards/admin.guard';
>>>>>>> 0fff236f1ce5a36b89c35375b3e5b80a2ccffe39

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AnonymousGuardService]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AnonymousGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AnonymousGuardService]
  },
  {
    path: 'devices',
    canActivate: [RoleGuardService],
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './devices/devices.module#DevicesModule'
      }]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }]
<<<<<<< HEAD
  },

  {
    path: 'users',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './users/users.module#UsersModule'
      }]
=======
>>>>>>> 0fff236f1ce5a36b89c35375b3e5b80a2ccffe39
  }
  // { path: 'dashboard',      component: DashboardComponent },
  // { path: 'user-profile',   component: UserProfileComponent },
  // { path: 'table-list',     component: TableListComponent },
  // { path: 'typography',     component: TypographyComponent },
  // { path: 'icons',          component: IconsComponent },
  // { path: 'maps',           component: MapsComponent },
  // { path: 'notifications',  component: NotificationsComponent },
  // { path: 'upgrade',        component: UpgradeComponent },
  // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
<<<<<<< HEAD
  exports: [RouterModule]
=======
  exports: [
    RouterModule
  ]
>>>>>>> 0fff236f1ce5a36b89c35375b3e5b80a2ccffe39
})
export class AppRoutingModule { }
