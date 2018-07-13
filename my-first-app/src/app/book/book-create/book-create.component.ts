import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/book';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../../shared/book-data.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  isbn: string;
  book: Book = {
    title: '',
    subtitle: '',
    isbn: '',
    abstract: '',
    numPages: 0,
    author: '',
    publisher: {
      name: '',
      url: ''
    }
  };
  constructor(
    private route: ActivatedRoute,
    private bookData: BookDataService
  ) {}

  createBook() {
    this.bookData.createBook(this.book).subscribe();
  }

  ngOnInit() {}
}
