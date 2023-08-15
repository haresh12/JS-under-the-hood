/**
 *  First lets understand with one weird example that why should even we learn about types.
 */

  let x = 5;
  x++;
  console.log(x); // output : 6

  let y = 5;
  ++y;
  console.log(y); // output : 6

 /**
  *  Now in above example we are seeing that for x we are using post increment and for y we are using pre-increment and in our min
  *  whenver we see x++ what we thing is that its equal to x+1 so lets try one thing lets use x + 1 rather then using x++ but this
  *  time we are not going to use number we are going to assing value in string lets see what happen then
  */

// With this we will understand that a++ is not really equal to a+1
 let a = "5";
 a = a + 1; 
 console.log(a); // Output : 51 

 let b = "5";
 b++;
 console.log(b); // Output : 6

 /**
  *  And for above question answer lies in this specification link so most of time we have assumption that this is how code should 
  *  behave and if it does not work that way we think it should work then we blame the language that its behaving weird but 
  *  real problem is not with language but its with our understanding of that specific language. In below javascript specification
  *  link that have mentioned that this is how post increment operator will behave.
  * 
  *  https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-postfix-increment-operator
  * 
  *  To get answer of our question we really need to understand only this three points
  *  
  *  1.Evaluation of LeftHandSideExpression : First, we need to evaluate the LeftHandSideExpression, which is essentially getting 
  *  the value of the variable that comes before ++. In our example a++ so a comes before ++ .
  *   
  *  2. Converting to Numeric: The value obtained from the LeftHandSideExpression is then converted to a numeric value using 
  *     ToNumeric. This is important because the increment operation requires numeric values. 
  * 
  *  3. Checking if the Value is a Number: If the obtained numeric value is a regular JavaScript number (not a BigInt), 
  *     then it proceeds with the following steps: a. It adds 1 to the numeric value (oldValue) to get the new value (newValue).
  * 
  *  So in simple words it first convert the value to number and that perform the opration in case of x + 1 these things does not
  *  happend and thats the reason you see different behaviour of both a + 1 and  a++.
  * 
  *  In case of of post increment if variable value is not numaric then we will get NaN
  */

  let c = "5a"
  c++;
  console.log(c); // NaN

/**
 *  Now we seen in above problem that there was no issue with the langauge but in our understanding of that language so lets try
 *  to learn different primitive types in JS and see how they behave and once we are done with all this most of the things will make
 *  sense again.
 */

/**
 *  PRIMITIVE TYPES IN JS
 *  
 *  undefined
 *  string 
 *  number
 *  boolean
 *  object
 *  symbol
 *   
 *  NOW ABOVE LISTED ARE ALL THE TYPES THAT WE HAVE LISTED IN SPEC BUT TEHRE ARE FEW OTHER SUBTYPES OR WE CAN SEE THEY BEHAVE DIFFERENT
 *  SO WE CAN SAY THOSE ARE ALSO THE TYPES. BECAUSE THEY BEHAVE DIFFERENTLY.
 *  
 *  undecleard
 *  null
 *  array
 *  function
 *  bigint
 * 
 *  Here is one thing that we heard mostly everywhere that everything in javascript is object. But
 *  
 *  string , undefined , number , boolean , symbol and bigint these are not really object 
 *  array , function and objects we can say that these are objects.
 * 
 *  Thing to understand that all the primitive types can behave as an object like we can have different methods on them
 *  but that does not make then object. SO ONE THING TO LEARN HERE IS THAT EVERYTHING IN JAVASCRIPT IS NOT AN OBJECT ITS
 *  LIKE EVERYTHING IN JAVASCRIPT CAN BEHAVE AS AN OBJECT.
 */

/**
 *  typeof : this is the operator in JS that is used to check the type of specific variable lets see some of the example 
 */

 let v;
 console.log(typeof v); // undefined 

 v = "1";
 console.log(typeof v); // string

 v = 5;
 console.log(typeof v); // number

 v = {};
 console.log(typeof v); // object

 v = Symbol();
 console.log(typeof v); // symbol

 v = true;
 console.log(typeof v); // boolean

 v = null;
 console.log(typeof v); // object (Yep does not make sense but this is what it is)

 v = function s(){};
 console.log(typeof v); // function

 v = [1,2,3];
 console.log(typeof v); // object

 /**
  *  See function and array both are subtypes of object but you see when you do typeof for function it return function but
  *  when you do it for array it returns us then object and this is the clearly the mistake but again this is what it is 
  */

 /**
  *  Also if we need to check whether the assigned value to specific veriable is array or not then we can use below utility
  *  function
  */

 console.log(Array.isArray(v)); // true
 /**
  *  In above all things look straight forward but there is one mistake that we can make is regarding checking that typeOf 
  *  specific variable is undefined or not lets see what i am taking about.
  */

 let see;

 console.log(typeof see === undefined);  // And here made mistake again because most of us thing output will be true from above learning
                                         // but real answer is false
/**
 *   WHY DID WE GET OUPTUT FALSE THEN ?
 *   Because typeof operator always returns the string value and it guaranteed to return some value in form of string its like
 *   typeof operator has some enum values and it will always return value from those enum values and those all values are string
 *   now when you check typeof  see === undefined then undefined is not really a string and to achieve intented output we have
 *   to do like typeof see === "undefined" which will give use output true.
 */

console.log(typeof see === undefined); // false
console.log(typeof see === "undefined"); // true

/**
 *  What will happend if we try to find the typeof for the variable that does not even exist lets see
 */
 
console.log(typeof iAmNoWhere);
