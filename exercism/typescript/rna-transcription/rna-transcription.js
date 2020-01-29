"use strict";
exports.__esModule = true;
var Transcriptor = /** @class */ (function () {
    function Transcriptor() {
    }
    Transcriptor.prototype.toRna = function (input) {
        var output = '';
        for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
            var i = input_1[_i];
            switch (i) {
                case 'C':
                    output = output + 'G';
                    break;
                case 'G':
                    output = output + 'C';
                    break;
                case 'A':
                    output = output + 'U';
                    break;
                case 'T':
                    output = output + 'A';
                    break;
                default:
                    throw new Error('Invalid input DNA.');
            }
        }
        return output;
    };
    return Transcriptor;
}());
//CGAT => GCUA
//There is a class Transcriptor that is calling the method toRna
//toRna receives a string that we are calling input
//We need to step through input one letter at a time
//Check whether the letter is 1 of 4 cases or not any of them
//If it is one of those cases change it
//If it isn't return an error
//Move on to the next letter
//at the end of everything return the full string
exports["default"] = Transcriptor;
