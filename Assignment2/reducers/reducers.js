'use strict';
// Don't add or change anything above this comment.

/**
 * See assignment description for the requirements
 */

function reducer1(previousValue, currentValue) {

    // console.log('previous', previousValue); //for debugging 
    // console.log('prevcurrous', currentValue); // for debugging
    
    /* case 1 : If this function is passed to reduce, any non-numeric values in the array will be skipped and 
    the sum of only the numeric values in the array will be returned. */
    //isNan refrenced https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN    

        if((!isNaN(previousValue )&& !isNaN(currentValue))) 
            {
                if(typeof currentValue == "boolean"){ // cheking the currentValue if True or False
                    return previousValue;      // if yes return 1st element of the array
                }
                else {
                    return previousValue + currentValue; //sum of only the numeric values in the array will be returned.
                }

            }

        // reducer1 skips a non-numeric value even if it is the first element
        else { 
            if (!isNaN(previousValue) ) 
                return previousValue ;

            if(!isNaN(currentValue)) 
                return  currentValue ; 
        }

    /* If all the values in the array are non-numeric, then the value 0 will be returned. */
        
    //reducer1 returns 0 if all the elements are non-numeric 
        if(isNaN(previousValue) && ( previousValue === previousValue)){
            return 0;
        }
};

/**
 * See assignment description for the requirements
 * 
 */

function reducer2(previousValue, currentValue) {
    
    // reducer2 throws TypeError exception for a non-numeric value even when it is the first element
    
    if (isNaN(previousValue) )
    {
        throw new TypeError('My error message');

    }
    
    
    // reducer2 throws TypeError exception for a non-numeric value

    if (isNaN(currentValue)) 
    {
        throw new TypeError('My error message');
    }

    return previousValue + currentValue;
    
}
  


// Don't add or change anything below this comment.
module.exports = { reducer1, reducer2 };