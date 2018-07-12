import { BookDetailComponent } from './book-detail/book-detail.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';
import { TitleBoxComponent } from './title-box/title-box.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';

export const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'books/:isbn',
    component: BookDetailComponent
  },
  {
    path: 'titlebox',
    component: TitleBoxComponent
  },
  {
    path: 'mouse',
    component: MouseCursorComponent
  },
  {
    path: 'info',
    component: InfoBoxComponent
  },
  {
    path: 'home',
    component: NavigationComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
