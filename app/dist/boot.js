/// <reference path="_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var module = angular.module('contactManagerApp', ['ngMaterial']);
    module.controller('mainController', ContactManagerApp.MainController);
    module.service('userService', ContactManagerApp.UserService);
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=boot.js.map