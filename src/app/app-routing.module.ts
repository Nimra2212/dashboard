import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardListComponent } from './components/dashboard-list/dashboard-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {path: 'dashboard-list', component: DashboardListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
