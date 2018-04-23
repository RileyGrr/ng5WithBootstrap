import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopMenuComponent } from './riley/topMenu/topMenu.component';
import { HomeComponent } from './riley/TabContent/home/home.component';
import { SplendidComponent } from './riley/TabContent/splendid/splendid.component';
import { RileyComponent } from './riley/TabContent/riley/riley.component';


@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HomeComponent,
    SplendidComponent,
    RileyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
