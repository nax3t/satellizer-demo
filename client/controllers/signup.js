angular.module('MyApp')
  .controller('SignupCtrl', function($scope, $location, $auth, toastr, $cookies) {
    $scope.signup = function() {
      $auth.signup($scope.user)
        .then(function(response) {
          $auth.setToken(response);
          $cookies.put('currentUser', response.data.user.displayName);
          $location.path('/');
          toastr.info('You have successfully created a new account and have been signed-in');
        })
        .catch(function(response) {
          toastr.error(response.data.message);
        });
    };
  });