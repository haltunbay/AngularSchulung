import { ConfirmCanactivateGuard } from './shared/confirm-canactivate.guard';
import { ConfirmCandeactivateGuard } from './shared/confirm-candeactivate.guard';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ProvideModule } from './provide/provide.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book/book.component';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  imports: [CommonModule, BookRoutingModule, ProvideModule],
  declarations: [BookComponent, BookDetailComponent, BookListComponent, BookEditComponent],
  providers: [ConfirmCandeactivateGuard, ConfirmCanactivateGuard]
})
export class BookModule {}
