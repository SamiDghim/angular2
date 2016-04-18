System.register(['angular2/core', 'angular2/router', './components/component1.component', './components/component2.component', "./services/http.service"], function(exports_1, context_1) {
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
    var core_1, router_1, component1_component_1, component2_component_1, http_service_1;
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
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_httpService) {
                    this._httpService = _httpService;
                    this.foods_error = false;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getFoods();
                    this.getBooksAndMovies();
                };
                AppComponent.prototype.getFoods = function () {
                    var _this = this;
                    this._httpService.getFoods().subscribe(function (data) { _this.foods = data; }, function (err) { _this.foods_error = true; });
                };
                AppComponent.prototype.getBooksAndMovies = function () {
                    var _this = this;
                    this._httpService.getBooksAndMovies().subscribe(function (data) {
                        _this.books = data[0];
                        _this.movies = data[1];
                    });
                };
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
                    __metadata('design:paramtypes', [http_service_1.HttpService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBTUUsc0JBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFMdEMsZ0JBQVcsR0FBVyxLQUFLLENBQUM7Z0JBS2MsQ0FBQztnQkFFbEQsK0JBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELCtCQUFRLEdBQVI7b0JBQUEsaUJBS0M7b0JBSkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQ3BDLFVBQUEsSUFBSSxJQUFNLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBLENBQUEsQ0FBQyxFQUM1QixVQUFBLEdBQUcsSUFBTSxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQSxDQUFDLENBQUMsQ0FDbkMsQ0FBQztnQkFDSixDQUFDO2dCQUVELHdDQUFpQixHQUFqQjtvQkFBQSxpQkFPQztvQkFOQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUMsU0FBUyxDQUM3QyxVQUFBLElBQUk7d0JBQ0YsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBQ3BCLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUN2QixDQUFDLENBQ0YsQ0FBQztnQkFDSixDQUFDO2dCQXRDSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixXQUFXLEVBQUUsd0JBQXdCO3dCQUNyQyxVQUFVLEVBQUUsQ0FBRSwwQkFBaUIsRUFBRSwwQ0FBbUIsRUFBRSwwQ0FBbUIsQ0FBRTtxQkFDOUUsQ0FBQztvQkFFRCxvQkFBVyxDQUFDO3dCQUNYLEVBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDBDQUFtQixFQUFFO3dCQUNuRixFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMENBQW1CLEVBQUU7cUJBQzVFLENBQUM7O2dDQUFBO2dCQThCRixtQkFBQztZQUFELENBNUJBLEFBNEJDLElBQUE7WUE1QkQsdUNBNEJDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZyxST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Q29tcG9uZW50MUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudDEuY29tcG9uZW50JztcbmltcG9ydCB7Q29tcG9uZW50MkNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudDIuY29tcG9uZW50JztcbmltcG9ydCB7SHR0cFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2h0dHAuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYXBwLnRwbC5odG1sJyAsXG4gICAgZGlyZWN0aXZlczogWyBST1VURVJfRElSRUNUSVZFUywgQ29tcG9uZW50MUNvbXBvbmVudCwgQ29tcG9uZW50MkNvbXBvbmVudCBdXG59KVxuXG5AUm91dGVDb25maWcoW1xuICB7cGF0aDogJy9jb21wb25lbnQtMS86c291cmNlJywgbmFtZTogJ0NvbXBvbmVudDEnLCBjb21wb25lbnQ6IENvbXBvbmVudDFDb21wb25lbnQgfSxcbiAge3BhdGg6ICcvY29tcG9uZW50LTInLCBuYW1lOiAnQ29tcG9uZW50MicsIGNvbXBvbmVudDogQ29tcG9uZW50MkNvbXBvbmVudCB9XG5dKVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBwdWJsaWMgZm9vZHNfZXJyb3I6Qm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZm9vZHM7XG4gIHB1YmxpYyBib29rcztcbiAgcHVibGljIG1vdmllcztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6YW55IHtcbiAgICB0aGlzLmdldEZvb2RzKCk7XG4gICAgdGhpcy5nZXRCb29rc0FuZE1vdmllcygpO1xuICB9XG5cbiAgZ2V0Rm9vZHMoKSB7XG4gICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0Rm9vZHMoKS5zdWJzY3JpYmUoXG4gICAgICBkYXRhID0+IHsgdGhpcy5mb29kcyA9IGRhdGF9LFxuICAgICAgZXJyID0+IHsgdGhpcy5mb29kc19lcnJvciA9IHRydWUgfVxuICAgICk7XG4gIH1cblxuICBnZXRCb29rc0FuZE1vdmllcygpIHtcbiAgICB0aGlzLl9odHRwU2VydmljZS5nZXRCb29rc0FuZE1vdmllcygpLnN1YnNjcmliZShcbiAgICAgIGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmJvb2tzID0gZGF0YVswXVxuICAgICAgICB0aGlzLm1vdmllcyA9IGRhdGFbMV1cbiAgICAgIH1cbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
