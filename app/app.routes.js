angular.module('appModule')
  .config(($locationProvider) => {
    $locationProvider.html5Mode({
      enabled: false,
    });
  })
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/page-not-found');

    $stateProvider
      .state({
        name: 'app',
        url: '/',
        templateUrl: './pages/home-page/home-page.html',
        controller: 'homeController',
        controllerAs: 'homePageVm',
      })
      .state({
        name: 'team-performance',
        url: '/team-performance',
        template: '<v-performance-page></v-performance-page>',
      })
      .state({
        name: 'page-not-found',
        url: '/page-not-found',
        template: '<v-page-not-found></v-page-not-found>',
      });
  });
