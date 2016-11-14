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
var userService = (function () {
    function userService() {
    }
    userService.prototype.getUsers = function () {
        var array = [
            { id: 1, firstName: 'Jimmy', lastName: 'Rodriguez 1', email: 'ingjimmy2@gmail.com' },
            { id: 1, firstName: 'Jimmy 2', lastName: 'Rodriguez 2', email: 'ingjimmy3@gmail.com' },
            { id: 1, firstName: 'Jimmy 3', lastName: 'Rodriguez 3', email: 'ingjimmy4@gmail.com' },
            { id: 1, firstName: 'Jimmy 4', lastName: 'Rodriguez 4', email: 'ingjimmy5@gmail.comD' }
        ];
        return array;
    };
    userService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], userService);
    return userService;
}());
exports.userService = userService;
//# sourceMappingURL=user.service.js.map