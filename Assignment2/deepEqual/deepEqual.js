'use strict';
// Don't add or change anything above this comment.

/*
* Don't change the declaration of this function.
*/
 
function deepEqual(val1, val2) {
    // Case 1 & 4: If two values are primitive, objects and are strictly equal, then they are deep equal.
    if (val1 === val2){
    return true;
    }

    // Case 2: If two values are primitive and are not strictly equal, then they are not deep equal.
    else if (typeof val1 !== "object" && typeof val2 !== "object") {
        // console.log(val1); for debugging
    return false;
    }
    
    // Case 3: If one value is an object and the other value is primitive, then they are not deep equal.
    else if (typeof val1 !== typeof val2){
    return false;
    }
    
    
    // Case 5: If two values are both objects and are not strictly equal, then we determine deep equality as follows:
    else if (typeof val1 === "object" && typeof val2 === "object") {

        /* Case 5.1 If both values are non-array objects, then they are deep equal if both the objects have exactly the same properties and 
        the values of these properties are deep equal. The order of properties in these non-array objects doesn't matter for deep equality.*/

        //refrenced more about array.isarray from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
        
        if (!Array.isArray(val1) && !Array.isArray(val2)) { //If both values are non-array objects,
        
        //Refrenced object.keys more from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
        
            let empty = {}; // empty object evaluates to be true
            let value1_keys = Object.keys(val1);
            let value2_keys = Object.keys(val2 || empty); // here it will take all keys of val2 or assign empty object to  value2_keys.
                // console.log(value1_keys);for debugging
                // console.log(value2_keys); for debugging
            if(value1_keys.length !== value2_keys.length) { // not strictly operator
                return false;
            }

            for(let properties of value1_keys) {
                // console.log(properties); // for debugging
                if(!deepEqual(val1[properties], val2[properties])) {
                    // console.log(val1[properties]); // for debugging
                    //  console.log(val2[properties]); // for debugging
                    return false;
                }
            }
        return true;
        }

        // Case 5.2 If both values are arrays, then they are deep equal if their elements are deep equal and these elements are in the same order.
        
        else if (Array.isArray(val1) && Array.isArray(val2)) { // If both values are arrays

            if (val1.length !== val2.length) // not strictly operator
            return false;

            let i = 0;
            while (i < val1.length) {
                // console.log(val1.length);
              if (!deepEqual(val1[i], val2[i])) {
                return false;
              }
              i++;
            //   console.log(i); // for debugging
            }
            

            return true;
        }

    // Case 5.3 All other pairs of objects are not deep equal.
    else 
    return false;
    }
}

// Don't add or change anything below this comment.
module.exports = deepEqual;