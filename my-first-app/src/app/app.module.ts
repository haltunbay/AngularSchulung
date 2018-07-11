import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    MouseCursorComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
