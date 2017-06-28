/**
 * Created by zhangxiaoyu on 2017/6/14.
 */

'use strict';

angular.
  module('sandwichApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/index', {
          template: '<index></index>'
        }).
        when('/servers', {
          template: '<server-list></server-list>'
        }).
        when('/servers/:assetId', {
          template: '<server-detail></server-detail>'
        }).
        when('/users', {
          template: '<user-list></user-list>'
        }).
        when('/projects', {
          template: '<project-list></project-list>'
        }).
        when('/datacenters', {
          template: '<datacenter-list></datacenter-list>'
        }).
        otherwise('/index');
    }
  ]);
