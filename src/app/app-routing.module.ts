import { NgModule } from '@angular/core';
import {ActivatedRoute, Router, RouterModule, Routes} from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {RouterTestingModule} from '@angular/router/testing';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
 //   RouterTestingModule.withRoutes(APP_ROUTES),

  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
