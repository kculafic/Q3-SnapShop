import angular from 'angular'
import angularMaterialize from 'angular-materialize'

import uiRouter from 'angular-ui-router'

import CatalogCtrl from './catalog/catalog.controller';
import CatalogService from './catalog/catalog.service';

import CartService from './cart/cart.service';
import CartController from './cart/cart.controller';

import CartCountCtrl from './cart/cart_count.controller';

import AuthService from './user/authentication.service';
import loginCtrl from './user/login.controller';

import SignUpService from './user/signUp.service';
import SignUpCtrl from './user/signUp.controller';

import SignOutCtrl from './user/signOut.controller';

angular.module('my-app', [angularMaterialize, uiRouter])
  .service('CatalogService', CatalogService)
  .controller('CatalogCtrl', CatalogCtrl)
  .service('CartService', CartService)
  .controller('CartController', CartController)
  .controller('CartCountCtrl', CartCountCtrl)
  .service('AuthService', AuthService)
  .controller('loginCtrl', loginCtrl)
  .service('SignUpService', SignUpService)
  .controller('SignUpCtrl', SignUpCtrl)
  .controller('SignOutCtrl', SignOutCtrl)
  .config(['$stateProvider', ($stateProvider) => {
  $stateProvider
    .state('home', {
      url: '',
      templateUrl: 'views/home.html'
    })
    .state('main', {
      url: '/',
      templateUrl: 'views/home.html'
    })
  //   .state('shops', {
  //     url: '/shops',
  //     templateUrl: 'views/shops.html'
  //   })
  //   .state('user', {
  //     url: '/user',
  //     templateUrl: 'views/user/user.html'
  //   })
  //   .state('user.profile', {
  //     url: '/profile',
  //     templateUrl: 'views/user/profile.html'
  //   })
  //   .state('user.account', {
  //     url: '/account',
  //     templateUrl: 'views/user/account.html'
  //   });
  }]);
