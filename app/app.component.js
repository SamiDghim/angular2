System.register(['angular2/core', 'angular2/router', './components/component1.component', './components/component2.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2, component1_component_1, component2_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (component1_component_1_1) {
                component1_component_1 = component1_component_1_1;
            },
            function (component2_component_1_1) {
                component2_component_1 = component2_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <header>\n          <ul>\n            <li><a [routerLink]=\"['Component1']\">component-1</a></li>\n            <li><a [routerLink]=\"['Component2']\">component-2</a></li>\n          </ul>\n        </header>\n        <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES, component1_component_1.Component1Component, component2_component_1.Component2Component]
                    }),
                    router_2.RouteConfig([
                        { path: '/component-1', name: 'Component1', component: component1_component_1.Component1Component, useAsDefault: true },
                        { path: '/component-2', name: 'Component2', component: component2_component_1.Component2Component }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUJBO2dCQUFBO2dCQUVBLENBQUM7Z0JBckJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSx5UUFRVDt3QkFDRCxVQUFVLEVBQUUsQ0FBRSwwQkFBaUIsRUFBRSwwQ0FBbUIsRUFBRSwwQ0FBbUIsQ0FBRTtxQkFDOUUsQ0FBQztvQkFFRCxvQkFBVyxDQUFDO3dCQUNYLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwwQ0FBbUIsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFHO3dCQUNoRyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMENBQW1CLEVBQUM7cUJBQzNFLENBQUM7O2dDQUFBO2dCQUlGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZ30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Q29tcG9uZW50MUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudDEuY29tcG9uZW50JztcbmltcG9ydCB7Q29tcG9uZW50MkNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudDIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnQ29tcG9uZW50MSddXCI+Y29tcG9uZW50LTE8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0NvbXBvbmVudDInXVwiPmNvbXBvbmVudC0yPC9hPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFsgUk9VVEVSX0RJUkVDVElWRVMsIENvbXBvbmVudDFDb21wb25lbnQsIENvbXBvbmVudDJDb21wb25lbnQgXVxufSlcblxuQFJvdXRlQ29uZmlnKFtcbiAge3BhdGg6ICcvY29tcG9uZW50LTEnLCBuYW1lOiAnQ29tcG9uZW50MScsIGNvbXBvbmVudDogQ29tcG9uZW50MUNvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlICB9XG4gIHtwYXRoOiAnL2NvbXBvbmVudC0yJywgbmFtZTogJ0NvbXBvbmVudDInLCBjb21wb25lbnQ6IENvbXBvbmVudDJDb21wb25lbnR9XG5dKVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
