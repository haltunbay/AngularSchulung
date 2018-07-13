import { InfoBoxComponent } from './info-box/info-box.component';
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { TitleBoxComponent } from './title-box/title-box.component';

/*const routes: Routes = [
  {
    path: 'sandbox',
    component: NavigationComponent,
    children: [
      {
        component: MouseCursorComponent,
        path: 'mouse'
      },
      {
        component: InfoBoxComponent,
        path: 'infobox'
      },
      {
        component: TitleBoxComponent,
        path: 'titlebox'
      }
    ]
  }
];*/

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        component: MouseCursorComponent,
        path: 'mouse'
      },
      {
        component: InfoBoxComponent,
        path: 'infobox'
      },
      {
        component: TitleBoxComponent,
        path: 'titlebox'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SandboxRoutingModule {}
