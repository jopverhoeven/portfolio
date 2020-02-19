import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageProjectComponent } from './pages/page-project/page-project.component';
import { AboutComponent } from './components/about/about.component';
import { DefaultComponent } from './layout/default/default.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: PageHomeComponent
  }, {
    path: 'about',
    component: AboutComponent,
  }, {
    path: 'project',
    children: [
      {
        path: ':id',
        component: PageProjectComponent
      }
    ]
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
