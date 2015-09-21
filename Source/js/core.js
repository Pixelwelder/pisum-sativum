/**
 * Created by Zack Jordan on 9/21/15.
 */
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

// Can handle any ten-digit number interspersed with non-numeric characters.
// Can also handle an extension, assuming it is notated with an 'x'.
// Returns (xxx) xxx-xxxx.
function formatPhone(input){
    if (!input) return '';

    // Extension? Assume one 'x'.
    var num, ext;
    if (input.indexOf('x') > -1) {
        var split = input.split('x');

        num = split[0];
        ext = 'x' + split[1];
    } else {
        num = input;
        ext = '';
    }

    // Remove non-numeric and format.
    num = num.replace(/\D/g, '');
    num = num.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, "($1) $2-$3");

    return num + ' ' + ext;
}

function formatZipcode(input){
    if (!input) return '';

    // Remove any non-numeric stuff.
    var output = input.replace(/\D/g, '');

    // Got a +4?
    if (output.length > 5)
        output = [output.substr(0, 5), '-', output.substr(5)].join('');

    return output;
}

function formatWebsite(input){
    if (!input) return '';

    output = input.replace(/.*?:\/\//g, "");
    return output;
}