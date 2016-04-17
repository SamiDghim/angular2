import {Component} from 'angular2/core':
import {Router} from 'angular2/router';

@Component({
    selector:    'component-2',
    templateUrl: 'templates/component-2.tpl.html',
    styleUrls:   ['src/css/component2.css']

  })
export class Component2Component{
  constructor(private _router: Router){}

  onNavigate(){
    this._router.navigate(['Component1', {source: 'Component2 - From Component 1', optional: 'this is optional param'}]);
  }
}
