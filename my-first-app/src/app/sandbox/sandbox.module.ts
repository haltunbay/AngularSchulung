import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';
import { TitleBoxComponent } from './title-box/title-box.component';
import { SandboxRoutingModule } from './sandbox-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { InfoBoxComponent } from './info-box/info-box.component';

@NgModule({
  imports: [CommonModule, SandboxRoutingModule],
  declarations: [
    NavigationComponent,
    InfoBoxComponent,
    TitleBoxComponent,
    MouseCursorComponent
  ]
})
export class SandboxModule {}
