/**
 * @ngdoc module
 * @name te.decamel
 * @description
 * An AngularJS filter for converting 'camelCaseStrings' to 'Camel Case Strings'
 */

angular.module('te.decamel', [])
    .filter("decamel", function() {
         return function(input, delimiter = " ", capitalize = true) {
             input = input || "";

             var words = input.match(/[A-Za-z][a-z]*/g);
             var out = words;
             if (capitalize) {
                 out = out.map(function (word) {
                     return word.charAt(0).toUpperCase() + word.substring(1);
                 });
             }

             return out.join(delimiter);
         };
     });
