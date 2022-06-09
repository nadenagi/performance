angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees, $location) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.search = null;
  homePageVm.updateSearch = function (v) {
    homePageVm.search = v;
    if (v) {
      $location.path(window.location.pathname).search({ filter: v });
    } else {
      $location.path(window.location.pathname).search({});
    }
  };

  activate();

  function activate() {
    homePageVm.search = $location.$$search.filter;
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
      });
  }
}
