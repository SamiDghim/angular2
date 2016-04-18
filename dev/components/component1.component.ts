import {Component,OnInit} from 'angular2/core':
import {RouteParams,RouteConfig} from 'angular2/router';

@Component({
    selector: 'component-1',
    templateUrl: 'templates/component-1.tpl.html',
    styleUrls:   ['src/css/component1.css']
  })


export class Component1Component implements OnInit{
  source: string;
  optional: string;
  constructor(private _routeParams: RouteParams){}

  ngOnInit(){
    this.source = this._routeParams.get('source');
    this.optional = this._routeParams.get('optional');
  }
}
