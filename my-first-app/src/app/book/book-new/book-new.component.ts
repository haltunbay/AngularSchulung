import { BookDataService } from './../../shared/book-data.service';
import { Book } from './../../shared/book';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, Form } from '@angular/forms';
@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {
  book: Book;
  form: FormGroup;
  constructor(private fb: FormBuilder, private bookData: BookDataService) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      subtitle: [''],
      abstract: [''],
      isbn: [
        '',
        Validators.compose([Validators.required, Validators.minLength(13)])
      ],

      author: ['', Validators.required],
      publisher: this.fb.group({
        name: [''],
        url: ['']
      })
    });
  }

  onSubmit(formData: FormData) {
    // this.bookData.createBook(this.book).subscribe();
    console.log(formData);
  }

  ngOnInit() {}
}
