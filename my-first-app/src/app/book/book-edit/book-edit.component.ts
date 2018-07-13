import { Book } from './../../shared/book';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../../shared/book-data.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  isbn: string;
  book: Book;
  constructor(
    private route: ActivatedRoute,
    private bookData: BookDataService
  ) {}

  saveBook() {
    this.bookData.saveBook(this.book).subscribe();
  }

  ngOnInit() {
    this.route.params.subscribe((params: { isbn: string }) => {
      this.isbn = params.isbn;
      this.bookData
        .getBookByIsbn(this.isbn)
        .subscribe(book => (this.book = book));
    });
  }
}
