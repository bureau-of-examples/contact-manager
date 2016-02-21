/// <reference path="_all.ts" />

module ContactManagerApp {

    let module = angular.module('contactManagerApp', ['ngMaterial', 'ngMdIcons']);
    module.controller('mainController', MainController);
    module.service('userService', UserService);
    module.config(['$mdIconProvider', '$mdThemingProvider',
        ($mdIconProvider: angular.material.IIconProvider, $mdThemingProvider: angular.material.IThemingProvider) => {

            $mdIconProvider.defaultIconSet('assets/svg/avatars.svg', 128);
            $mdIconProvider.icon('menu', 'assets/svg/menu.svg', 24); //path relative to index.html

            $mdThemingProvider.theme('default').primaryPalette('blue').accentPalette('red');
    }]);
}
