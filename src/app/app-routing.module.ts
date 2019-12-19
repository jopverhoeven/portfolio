import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { DefaultComponent } from './layout/default/default.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'about',
    component: AboutComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
