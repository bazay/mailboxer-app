app.controller('RegisterController', ['$scope', '$window', 'register', 'ROUTES', 'current_user', function($scope, $window, register, ROUTES, current_user) {
  $scope.header = $('.header h1');
  $scope.header.html('Register');
  console.log(current_user)
  $scope.company_id = current_user.company_id;
  $scope.fuse_id = current_user.fuse_id;
  $scope.email = 'hi'
  $scope.username = 'hi'
  
  $scope.submit = function() {
    // current_user.email = $scope.email;
    // current_user.username = $scope.username;
    // register.success(function(data) {
    //   current_user = data;
    //   $window.location.href = '#/inbox';
    // })
    // .error(function(err) {
    //   $window.alert(err);
    // });  
  }
}]);