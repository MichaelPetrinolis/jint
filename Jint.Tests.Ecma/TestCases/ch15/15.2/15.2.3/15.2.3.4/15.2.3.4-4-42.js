/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.4/15.2.3.4-4-42.js
 * @description Object.getOwnPropertyNames - own data property of String object 'O' is pushed into the returned array
 */


function testcase() {
        var str = new String("abc");

        Object.defineProperty(str, "ownProperty", {
            value: "ownString",
            configurable: true
        });

        var result = Object.getOwnPropertyNames(str);

        for (var p in result) {
            if (result[p] === "ownProperty") {
                return true;
            }
        }

        return false;
    }
runTestCase(testcase);
