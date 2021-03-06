/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.3/15.3.4/15.3.4.5/15.3.4.5-2-16.js
 * @description Function.prototype.bind - 'Target' is a function
 */


function testcase() {
        function testFunc() {}
        try {
            testFunc.bind();
            return true;
        } catch (e) {
            return false;
        }
    }
runTestCase(testcase);
