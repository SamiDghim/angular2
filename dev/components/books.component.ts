import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HttpService} from "../services/http.service";

@Component({
    selector:    'books',
    templateUrl: 'templates/books.tpl.html',
    styleUrls:   ['src/css/books.css']
  })

export class BooksComponent implements OnInit{

  public books_error:Boolean = false;
  public books: string [];

  constructor(private _httpService: HttpService){}


  ngOnInit(): any{
    this.getBooks();
  }

  getBooks() {
    this._httpService.getBooks().subscribe(
      data => { this.books = data},
      err => { this.books_error = true }
    );
  }
}
