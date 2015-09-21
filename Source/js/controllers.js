/**
 * Created by Zack Jordan on 9/19/15.
 */

angular.module('employeeDirectory', [])
    .controller('DirectoryController', function($scope){

        // TODO Obviously the model should be coming from elsewhere.
        // Make the model presentable.
        var model = json;

        // TODO This should be a service.
        $scope.model = json;
    })
;