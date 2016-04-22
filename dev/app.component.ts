import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';
import {Component1Component} from './components/component1.component';
import {BooksComponent} from './components/books.component';
import {Component3Component} from './components/component3.component';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/app.tpl.html' ,
    directives: [ ROUTER_DIRECTIVES, Component1Component, BooksComponent, Component3Component ]
})

@RouteConfig([

  {path: '/component-1', name: 'Component1', component: Component1Component, useAsDefault: true },
  {path: '/books',       name: 'Books',      component: BooksComponent },
  {path: '/component-3', name: 'Component3', component: Component3Component }
])

export class AppComponent {

}
