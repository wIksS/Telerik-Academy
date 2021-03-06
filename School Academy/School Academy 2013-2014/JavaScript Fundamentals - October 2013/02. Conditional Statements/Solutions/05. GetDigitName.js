/*
 05. Write script that asks for a digit and depending on 
 the input shows the name of that digit (in English) using
 a switch statement.
*/

function GetDigitName (number) {
    
	var integer = parseInt(number);

    if (Number.isNaN(integer)) {
        return "Error! There is some incorrect input value!";
    }

    switch (integer)
    {
    	case 0: return "zero";
    	case 1: return "one";
    	case 2: return "two";
    	case 3: return "three";
    	case 4: return "four";
    	case 5: return "five";
    	case 6: return "six";
    	case 7: return "seven";
    	case 8: return "eight";
    	case 9: return "nine";
    }
}

(function Solve () {
    
	for (var i = 0; i < 10; i++) {

	    console.log(GetDigitName(i));
	};
    
}).call(this);