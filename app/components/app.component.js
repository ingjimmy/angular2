"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_service_1 = require('../services/user.service');
var AppComponent = (function () {
    function AppComponent(serv) {
        this.serv = serv;
    }
    AppComponent.prototype.getUsers = function () {
        var _this = this;
        this.serv.userAll().subscribe(function (h) {
            _this.users = h;
        }, function (err) {
            console.log(err);
        });
    };
    AppComponent.prototype.getAll = function () {
        this.serv.login().subscribe(function (h) {
            console.log(h);
        }, function (err) {
            console.log(err);
        });
    };
    AppComponent.prototype.setUser = function (event, user) {
        this.selectedUser = user;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '../app/templates/user.template.html',
            providers: [user_service_1.userService]
        }), 
        __metadata('design:paramtypes', [user_service_1.userService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map