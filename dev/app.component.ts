import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';
import {Component1Component} from './components/component1.component';
import {Component2Component} from './components/component2.component';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/app.tpl.html' ,
    directives: [ ROUTER_DIRECTIVES, Component1Component, Component2Component ]
})

@RouteConfig([
  {path: '/component-1/:source', name: 'Component1', component: Component1Component },
  {path: '/component-2', name: 'Component2', component: Component2Component }
])

export class AppComponent {

}
