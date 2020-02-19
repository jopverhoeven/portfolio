import { PageProjectComponent } from './../../pages/page-project/page-project.component';
import { PageHomeComponent } from './../../pages/page-home/page-home.component';
import { ProjectComponent } from './../../components/home/project/project.component';
import { AboutComponent } from './../../components/about/about.component';
import { HomeComponent } from './../../components/home/home.component';
import { DefaultComponent } from './default.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// tslint:disable-next-line: max-line-length
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatInputModule, MatSelectModule, MatButtonModule, MatListModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    AboutComponent,
    ProjectComponent,
    PageHomeComponent,
    PageProjectComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
  ]
})
export class DefaultModule { }
