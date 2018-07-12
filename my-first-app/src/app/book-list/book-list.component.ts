import { Book } from './../shared/book';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookDataService } from '../shared/book-data.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[];
  subscription: Subscription;
  outputFormat = bookFormat.HTML;
  constructor(private bookData: BookDataService) {}
  ngOnInit() {
    this.subscription = this.bookData
      .getBooksRest()
      .subscribe(books => (this.books = books));
  }

  toggleFormat() {
    this.outputFormat =
      this.outputFormat === bookFormat.HTML ? bookFormat.JSN : bookFormat.HTML;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

export enum bookFormat {
  HTML,
  JSN
}
