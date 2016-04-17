import {Component} from 'angular2/core';
import {Component1Component} from './components/component1.component';
import {Component2Component} from './components/component2.component';
import {RouterConfig} from 'angular2/router';
@Component({
    selector: 'my-app',
    template: `
        <p>Hello World!!</p>
        <component-2></component-2>
        <component-1></component-1>
    `,
    directives: [Component2Component, Component1Component]
})

export class AppComponent {

}
