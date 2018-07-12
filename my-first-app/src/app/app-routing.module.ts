import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';

export const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/books'
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
