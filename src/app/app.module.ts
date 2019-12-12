import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatMenuModule, MatButtonModule, MatCardModule, } from '@angular/material/';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AboutComponent } from './about/about.component';
import { MeComponent } from './about/me/me.component';
import { FonstagramComponent } from './about/fonstagram/fonstagram.component';
import { LollookupComponent } from './about/lollookup/lollookup.component';
import { UiModule } from './ui/ui.module';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AboutComponent,
    MeComponent,
    FonstagramComponent,
    LollookupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,



    // Material Components
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    UiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
