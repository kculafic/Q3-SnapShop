import angular from 'angular'
import angularMaterialize from 'angular-materialize'

import uiRouter from 'angular-ui-router'


import CatalogCtrl from './catalog/catalog.controller'
import CatalogService from './catalog/catalog.service';




angular.module('my-app', [angularMaterialize, uiRouter])
  .service('CatalogService', CatalogService)
  .controller('CatalogCtrl', CatalogCtrl);
