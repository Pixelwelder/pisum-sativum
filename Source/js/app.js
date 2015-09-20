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

    // Can handle any ten-digit number interspersed with non-numeric characters.
    // Can also handle an extension, assuming it is notated with an 'x'.
    // Returns (xxx) xxx-xxxx.
    .filter('phone', function(){
        return function(input){
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
    })

    // Assumes that the first five digits are the zip and the rest is the +4.
    .filter('zipcode', function(){
        return function(input){
            if (!input) return '';

            // Remove any non-numeric stuff.
            var output = input.replace(/\D/g, '');

			// Got a +4?
			if (output.length > 5)
				output = [output.substr(0, 5), '-', output.substr(5)].join('');
			
			return output;
        }
    })
	
	// Removes http if it is present.
	.filter('website', function(){
		return function(input){
			if (!input) return '';
			
			output = input.replace(/.*?:\/\//g, "");
			return output;
		}
	})
;