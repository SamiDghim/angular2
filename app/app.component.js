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
    var core_1, router_1, component1_component_1, component2_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
                        templateUrl: 'templates/app.tpl.html',
                        directives: [router_1.ROUTER_DIRECTIVES, component1_component_1.Component1Component, component2_component_1.Component2Component]
                    }),
                    router_1.RouteConfig([
                        { path: '/component-1/:source', name: 'Component1', component: component1_component_1.Component1Component },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFiRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixXQUFXLEVBQUUsd0JBQXdCO3dCQUNyQyxVQUFVLEVBQUUsQ0FBRSwwQkFBaUIsRUFBRSwwQ0FBbUIsRUFBRSwwQ0FBbUIsQ0FBRTtxQkFDOUUsQ0FBQztvQkFFRCxvQkFBVyxDQUFDO3dCQUNYLEVBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDBDQUFtQixFQUFFO3dCQUNuRixFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMENBQW1CLEVBQUU7cUJBQzVFLENBQUM7O2dDQUFBO2dCQUlGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlQ29uZmlnLFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtDb21wb25lbnQxQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50MS5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21wb25lbnQyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50Mi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYXBwLnRwbC5odG1sJyAsXG4gICAgZGlyZWN0aXZlczogWyBST1VURVJfRElSRUNUSVZFUywgQ29tcG9uZW50MUNvbXBvbmVudCwgQ29tcG9uZW50MkNvbXBvbmVudCBdXG59KVxuXG5AUm91dGVDb25maWcoW1xuICB7cGF0aDogJy9jb21wb25lbnQtMS86c291cmNlJywgbmFtZTogJ0NvbXBvbmVudDEnLCBjb21wb25lbnQ6IENvbXBvbmVudDFDb21wb25lbnQgfSxcbiAge3BhdGg6ICcvY29tcG9uZW50LTInLCBuYW1lOiAnQ29tcG9uZW50MicsIGNvbXBvbmVudDogQ29tcG9uZW50MkNvbXBvbmVudCB9XG5dKVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
