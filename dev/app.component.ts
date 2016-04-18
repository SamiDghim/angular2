import {Component, OnInit} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';
import {Component1Component} from './components/component1.component';
import {Component2Component} from './components/component2.component';
import {HttpService} from "./services/http.service";

@Component({
    selector: 'my-app',
    templateUrl: 'templates/app.tpl.html' ,
    directives: [ ROUTER_DIRECTIVES, Component1Component, Component2Component ]
})

@RouteConfig([
  {path: '/component-1/:source', name: 'Component1', component: Component1Component },
  {path: '/component-2', name: 'Component2', component: Component2Component }
])

export class AppComponent implements OnInit{
  public foods_error:Boolean = false;
  public foods;
  public books;
  public movies;

  constructor(private _httpService: HttpService) { }

  ngOnInit():any {
    this.getFoods();
    this.getBooksAndMovies();
  }

  getFoods() {
    this._httpService.getFoods().subscribe(
      data => { this.foods = data},
      err => { this.foods_error = true }
    );
  }

  getBooksAndMovies() {
    this._httpService.getBooksAndMovies().subscribe(
      data => {
        this.books = data[0]
        this.movies = data[1]
      }
    );
  }
}
