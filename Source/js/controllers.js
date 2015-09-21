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

// Allow multiple employee views to be in the 'maximized' state.
var allowMultipleSelection = true;
var $currentSelection;
function toggle($event){

    $target = $($event.currentTarget).closest('.item-renderer');

    if (!$target.hasClass('minimized')){
        minimize($target);
    } else {
        // It's minimized; maximize it.
        if ($currentSelection){
            if (!allowMultipleSelection) {
                minimize($currentSelection);
                $currentSelection = null;
            }
        }

        $currentSelection = $target;
        maximize($currentSelection);
    }

    function minimize($target){
        $target.addClass('minimized');
        $target.find('.max-toggle').removeClass('fa-minus').addClass('fa-plus');
    }

    function maximize($target){
        $currentSelection = $target;
        $currentSelection.removeClass('minimized');
        $currentSelection.find('.max-toggle').removeClass('fa-plus').addClass('fa-minus');
    }
}