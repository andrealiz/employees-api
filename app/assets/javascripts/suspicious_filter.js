angular.module("app").filter('suspicious', [function () {
  return function(employees) {
  //   var suspicious = [];
  //   if (employees) {
  //     for (var i = 0; i < employees.length; i++) {
  //       if (employees[i].birthdate < "1946-01-01") {
  //         // console.log(employees[i]);
  //         suspicious.push(employees[i]);
  //       }
  //     }
  //     return suspicious;
  //   }
  // }
    if (employees) {
      var suspiciousEmployees = [];
      var date = new Date();
      var thisYear = date.getFullYear();
      var seventyYearsAgo = thisYear - 70;

      for (var i = 0; i < employees.length; i++) {
        var birthYear = parseInt($scope.employees[i].birthdate.substring(0, 4));
        if (birthYear < seventyYearsAgo) {
          suspiciousEmployees.push(employees[i]);
        }
      }
      return suspiciousEmployees;
    }
  }
}]);