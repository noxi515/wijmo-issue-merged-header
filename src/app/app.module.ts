import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
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
