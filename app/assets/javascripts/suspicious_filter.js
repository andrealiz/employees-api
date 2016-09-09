angular.module("app").filter('suspicious', [function () {
  return function(employees) {
    var suspicious = [];
    if (employees) {
      for (var i = 0; i < employees.length; i++) {
        if (employees[i].birthdate < "1946") {
          // console.log(employees[i]);
          suspicious.push(employees[i]);
          console.log(suspicious);
        }
      }
      return suspicious;
    }
  }
}]);