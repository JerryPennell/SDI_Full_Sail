/* SDI 1205: Jerry Pennell
   Instructor: JDonlan
   Project 4
   API Project - Usage demonstration
*/


/*
 *Phone Number validation Function
 *Checks for basic American phone numbers 11, 10, 7 instances
 *pass in a string / num to determine if it fits the phone criteria
*/

var lib = new JerryLib();  //Create a new instance of Jerry Lib


var phonenum ="123x444c4444";   //Test Phonenum                                              
console.log("///  Phone number check ///");    //Phone Header output
console.log("Validating phone... "+lib.formatAndValidatePhone(phonenum));  //output for validation of phonenum check
console.log("");  //Spacing for next output
 
 
/* *Email address validation Function*/
	
var emailadd = "leroy.jenkins@hotmail.com";
console.log("///  Email address validation ///");    //Email Phone num header output
console.log("Is "+emailadd+" an email address? : "+lib.isValidEmail(emailadd));  //output of email validation check
console.log(""); //Spacing for next output

/* * URL validation Function */

var urlset = "http://www.google.com";
console.log("///  URL validation check///");   //URL header output
if(lib.is_valid_url(urlset)) {
	console.log(urlset+ " is a valid url");     //Console information for the check instead of just true
}else {
	console.log(urlset+" is not a valid url");  //Console log info of if the test is false
}
console.log(""); //Spacing for next output


/* * Title Case Function */	

var ThisStr = "little bo peep has a sheep";  //Input string for title case function
console.log("///  Title Case check///");      //header output for title case
console.log("This is title case for this string -> "+ThisStr.toTitleCase());    //Gets prototype member for changing title case of string
console.log(""); //Spacing for next output


/*
Given a string that is a list of things separated by 
a given string, as well as another string separator, 
return a string with the first separator changed to the               
second: "a,b,c" + "," + "/" → "a/b/c".
*/

console.log("///  Find and replace characters check///");
console.log("replaceChars "+lib.findAndReplace("a,b,c",",","/"));
console.log(""); //Spacing for next output

/*
Format a number to use a specific number 
of decimal places, as for money: 2.1 → 2.10
*/

var numtoformat = 2.445;          //input of starting decimal example
var decplaces = 2;                 //number of decimal places to set
console.log("/// Format decimal to number of places check ///");    //output header of function for format of decimals
console.log("Formatting the number "+numtoformat+" to "+decplaces+" decimal places= "+lib.format_number(numtoformat,2));  //Calls lib object and method to format our number
console.log(""); //Spacing for next output

/*
Fuzzy-match a number: is the number 
above or below a number within a certain percent?
*/


var nm= 9,           //Number to fuzzy match against
    percent=10;     //Percent for fuzzy match
console.log("/// Fuzzy Match check ///");    //Fuzzy match output header
console.log("Fuzzy match of  above or below a number ("+nm+") in this case, within a certain percent.. of "+percent+" percent is: "+nm.isFuzzy(nm,percent));    //output check of Fuzzy match
console.log(""); //Spacing for next output

/*
Find the number of hours or days 
difference between two dates.
*/

var dString = "April, 28, 2012";                 //Start string of first date input
var dStringtoo = "April, 31, 2012"            //End date of second string input
var diffofdate = new lib.DateDiff("April, 28, 2012", "April, 31, 2012");    //Gether the difference in the two dates by hours
console.log("/// Checks the difference between two dates ///");           //Header checking the differnce betwen the two dates 
console.log("Is the date valid "+lib.isValidDate(diffofdate));                   //Checks to see if the date is vaild
console.log("The difference of the date is = "+	 diffofdate.inHours());   //output of the date in hours
console.log("The difference of the days is = "+	 diffofdate.inDays());     //output of the date in days
console.log("");	 //Spacing for next output

/*
Given a string version of a number such as "42", 
return the value as an actual Number, such as 42.
*/
	
var testfunc = new lib.convertInteger("42");                                       //String integer to convert
console.log("/// Convert string to integer check ///");                      //Header integer string to actual number
console.log("Parse integer from string "+parseInt(testfunc));          //Output of parseInt method from library 
console.log(""); //Spacing for next output

/*
Find the smallest value in an array that is 
greater than a given number
*/

var arr=[1,6,12,14],          //Array input of numbers
             n=5;                      //number input to check against for smallest number
console.log("/// Looking for smallest value in array greater than given num check ///");   //output header for smallest value in array that is greater
console.log("The smallest number in the array that is greater than "+n+" is "+arr.minGreaterThan(n));   //calls method for check of number against array
console.log(""); //Spacing for next output

/*
Find the total value of just the numbers in an array, 
even if some of the items are not numbers.
*/

var ary = [100,"100",100,"3"];  //Array of input with both string numbers and actual numbers for validation
var sumcal = ary.sum();   //gathers the sum the values
console.log("/// Sum of total values of an array even if items are not numbers check ///");  //Header of total of actual numbers in array
console.log("The total value of just the numbers in the array is : "+sumcal);   //output of the array numbers
console.log(""); //Spacing for next output


/*
Given an array of objects and the name of a key, return 
the array sorted by the value of that key in each of the objects: 
"a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].
*/

var myObjectArray = [{ a : 2},{ a : 3},{ a : 1}];   //Input of object array for sorting

//sort by a, ascending
var x = myObjectArray.sortFields("a");	  //Field to sort by
console.log("/// Array of objects are sorted by values check///");  //Sorting the array of objects by value header output
for (var i = 0; i < x.length; i++){                         //Itterating with for loop of the sorted array for output
    console.log("Sorting values of object a["+i+"]="+x[i].a);   //output of item in the new sorted array
}
console.log(""); //Spacing for next output
	

	
