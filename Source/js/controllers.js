/**
 * Created by Zack Jordan on 9/19/15.
 */

angular.module('employeeDirectory', [])
    .controller('DirectoryController', function($scope){

        // TODO Obviously the model should be coming from elsewhere.
        // 'minimized' and 'maximized' refer to CSS classes.

        $scope.model = json;

        // Clicks represent a change in view, not in model. Thus, we never touch the model.
        $scope.toggle = toggle;
    })
;