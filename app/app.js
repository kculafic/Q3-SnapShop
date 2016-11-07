import angular from 'angular'
import angularMaterialize from 'angular-materialize'

import CatalogCtrl from './catalog/catalog.controller'
import CatalogService from './catalog/catalog.service';


angular.module('my-app', [angularMaterialize])
  .service('CatalogService', CatalogService)
  .controller('CatalogCtrl', CatalogCtrl);
