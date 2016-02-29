angular
    .module('myApp', [])
    .directive('inputAndButton', function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'form-template.html'

        };
    })
    .directive('userForm', function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'form-template-2.html'

        };
    });


