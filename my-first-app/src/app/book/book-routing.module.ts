import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { ConfirmCanactivateGuard } from './shared/confirm-canactivate.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ConfirmCandeactivateGuard } from './shared/confirm-candeactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    children: [
      {
        component: BookListComponent,
        path: ''
      },
      {
        component: BookCreateComponent,
        path: 'new'
      },
      {
        component: BookDetailComponent,
        path: ':isbn'
        // canDeactivate: [ConfirmCandeactivateGuard],
        // canActivate: [ConfirmCanactivateGuard]
      },
      {
        component: BookEditComponent,
        path: ':isbn/edit'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {}
