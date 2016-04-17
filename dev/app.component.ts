import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {Component1Component} from './components/component1.component';
import {Component2Component} from './components/component2.component';

@Component({
    selector: 'my-app',
    template: `
        <header>
          <ul>
            <li><a [routerLink]="['Component1', {source: 'AppComponent', optional: 'this is optional param'}]">component-1</a></li>
            <li><a [routerLink]="['Component2']">component-2</a></li>
          </ul>
        </header>
        <router-outlet></router-outlet>
    `,
    directives: [ ROUTER_DIRECTIVES, Component1Component, Component2Component ]
})

@RouteConfig([
  {path: '/component-1/:source', name: 'Component1', component: Component1Component },
  {path: '/component-2', name: 'Component2', component: Component2Component }
])

export class AppComponent {

}
