var chocolateBars = [ "snickers", "hundred grand", "kitkat","skittles" ];

var destructivelyAddElementToBeginningOfArray = chocolateBars.unshift("Mr. Goodbar");


var addElementToBeginningOfArray = [ "Hershey's", ...chocolateBars ];

var destructivelyAddElementToEndOfArray = ...chocolatebars.push("Mr. Goodbar");

var addElementToEndOfArray = [ ...chocolatebars, "hershey's" ];