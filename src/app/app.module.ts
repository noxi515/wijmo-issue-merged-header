import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { AppComponent } from './app.component';
import { AppFlexGridColumnCssAllDirective } from './flex-grid-column-css-all.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppFlexGridColumnCssAllDirective
  ],
  imports: [
    BrowserModule,
    WjGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
