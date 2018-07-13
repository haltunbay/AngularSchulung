import { ConfirmCanactivateGuard } from './shared/confirm-canactivate.guard';
import { ConfirmCandeactivateGuard } from './shared/confirm-candeactivate.guard';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ProvideModule } from './provide/provide.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book/book.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookNewComponent } from './book-new/book-new.component';

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule,
    ProvideModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    BookComponent,
    BookDetailComponent,
    BookListComponent,
    BookEditComponent,
    BookCreateComponent,
    BookNewComponent
  ],
  providers: [ConfirmCandeactivateGuard, ConfirmCanactivateGuard]
})
export class BookModule {}
