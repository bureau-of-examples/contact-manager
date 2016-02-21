/// <reference path="_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var module = angular.module('contactManagerApp', ['ngMaterial', 'ngMdIcons']);
    module.controller('mainController', ContactManagerApp.MainController);
    module.service('userService', ContactManagerApp.UserService);
    module.config(['$mdIconProvider', '$mdThemingProvider',
        function ($mdIconProvider, $mdThemingProvider) {
            $mdIconProvider.icon('menu', 'assets/svg/menu.svg', 24); //path relative to index.html
            $mdThemingProvider.theme('default').primaryPalette('blue').accentPalette('red');
        }]);
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=boot.js.map