import { Book } from './../shared/book';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../shared/book-data.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  isbn: string;
  book: Book;
  constructor(
    private route: ActivatedRoute,
    private bookData: BookDataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: { isbn: string }) => {
      this.isbn = params.isbn;
      this.bookData
        .getBookByIsbn(this.isbn)
        .subscribe(book => (this.book = book));
    });
  }
}
