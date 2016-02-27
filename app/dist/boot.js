/// <reference path="_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var module = angular.module('contactManagerApp', ['ngMaterial', 'ngMdIcons']);
    module.controller('mainController', ContactManagerApp.MainController);
    module.service('userService', ContactManagerApp.UserService);
    module.config(['$mdIconProvider', '$mdThemingProvider',
        function ($mdIconProvider, $mdThemingProvider) {
            $mdIconProvider.defaultIconSet('assets/svg/avatars.svg', 128);
            $mdIconProvider.icon('menu', 'assets/svg/menu.svg', 24); //path relative to index.html
            $mdIconProvider.icon('hangouts', 'assets/svg/hangouts.svg', 512);
            $mdIconProvider.icon('twitter', 'assets/svg/twitter.svg', 512);
            $mdIconProvider.icon('phone', 'assets/svg/phone.svg', 512);
            $mdIconProvider.icon('google_plus', 'assets/svg/google_plus.svg', 512);
            $mdThemingProvider.theme('default').primaryPalette('blue').accentPalette('red');
        }]);
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=boot.js.map