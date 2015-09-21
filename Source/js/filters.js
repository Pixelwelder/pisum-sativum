/**
 * Created by Zack Jordan on 9/21/15.
 */

angular.module('employeeDirectory')

    .filter('phone', function(){
        return formatPhone;
    })

    // Assumes that the first five digits are the zip and the rest is the +4.
    .filter('zipcode', function(){
        return formatZipcode;
    })

    // Removes http if it is present.
    .filter('website', function(){
        return formatWebsite;
    })