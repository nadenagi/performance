const an = angular
  .module('appModule')
  .component('employeesList', {
    templateUrl: 'components/employees-list/employees-list.html',
    controller: EmployeesListComponent,
    controllerAs: 'EmployeesListComponentVm',
    bindings: {
      employeesList: '<',
      highlight: '<',
    },
  });

function EmployeesListComponent() {
  this.parseHighlight = function (text) {
    return this.highlight ? text.toString().replace(new RegExp(this.highlight, 'ig'), (same) => {
      return `<span class="glow">${same}</span>`;
    }) : text;
  };
}

an.filter('safeHtml', function ($sce) {
  return function (val) {
    return $sce.trustAsHtml(`${val}`);
  };
});
