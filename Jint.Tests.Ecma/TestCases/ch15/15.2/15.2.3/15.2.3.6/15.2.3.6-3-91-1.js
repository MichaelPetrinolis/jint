/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-91-1.js
 * @description Object.defineProperty - 'Attributes' is the Math object that uses Object's [[Get]] method to access the 'configurable' property (8.10.5 step 4.a)
 */


function testcase() {
        var obj = {};

        try {
            Object.prototype.configurable = true;

            Object.defineProperty(obj, "property", Math);

            var beforeDeleted = obj.hasOwnProperty("property");

            delete obj.property;

            var afterDeleted = obj.hasOwnProperty("property");

            return beforeDeleted === true && afterDeleted === false;
        } finally {
            delete Object.prototype.configurable;
        }
    }
runTestCase(testcase);
