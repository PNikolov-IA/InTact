import { AnonymousGuardService } from './core/guards/anonymous.guard';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { RoleGuardService } from './core/guards/admin.guard';
import { AuthGuardService } from './core/guards/auth.guard';
import { LayoutComponent } from './layouts/layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AnonymousGuardService]
  },
  {
    path: 'auth',
    canActivate: [AnonymousGuardService],
    children: [
      {
        path: '',
        loadChildren: './auth/auth.module#AuthModule'
      }]
  },
  {
    path: 'devices',
    canActivate: [RoleGuardService],
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './devices/devices.module#DevicesModule'
      }]
  },
  {
    path: 'chart-reports',
    canActivate: [AuthGuardService],
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './chart-reports/chart-reports.module#ChartReportsModule'
      }]
  },
  {
    path: 'table-reports',
    canActivate: [AuthGuardService],
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './table-reports/table-reports.module#TableReportsModule'
      }]
  },
  {
    path: 'users',
    canActivate: [RoleGuardService],
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './users/users.module#UsersModule'
      }]
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
