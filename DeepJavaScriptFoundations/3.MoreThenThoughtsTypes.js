/**
 *  NEW THING FOR ME ALSO 
 *   
 * if (undefined === null) {
    console.log('T') ; // REALLY BOTH ARE SAME GOOD
    }  
*/

/**
 * Some JS developers believe that the newer ?. is superior to ., and should thus almost always be used instead of ..
 * I believe that's an unwise perspective. First of all, it's adding extra visual clutter,
 * which should only be done if you're getting benefit from it. Secondly, you should be aware of, and planning for,
 * the emptiness of some value, to justify using ?.. If you always expect a non-nullish value to be present in some 
 * expression, using ?. to access a property on it is not only unnecessary/wasteful, but also could potentially hide 
 * future bugs where your assumption of value-presence had failed but ?. covered it up. As with most features in JS, use . 
 * where it's most appropriate, and use ?. where it's most appropriate. 
 * Never substitute one when the other is more appropriate.
 */



/**
 * BELOW THING IS ALSO GREAT THAT SEE WHEN WE PASS NULL THEN IT RETURN NULL BUT WHEN WE PASS UNDEFIEND IT RETURNS Hello
 */

function greet(msg = "Hello") {
    console.log(msg);
}

greet();            // Hello
greet(undefined);   // Hello
greet("Hi");        // Hi

greet(null);        // null

/**
 *  The = .. clause on a parameter is referred to as the "parameter default". It only kicks in and assigns its default value to the parameter 
 *  if the argument in that position is missing, or is exactly the undefined value. If you pass null, that clause doesn't trigger, 
 *  and null is thus assigned to the parameter.
 */

/**
 * Number Values  : 
 * 
 * The number type contains any numeric value (whole number or decimal), such as -42 or 3.1415926.
 *  These values are represented by the JS engine as 64-bit, IEEE-754 double-precision binary floating-point values. 3
   JS numbers are always decimals; whole numbers (aka "integers") are not stored in a different/special way. 
   An "integer" stored as a number value merely has nothing non-zero as its fraction portion;
   42 is thus indistinguishable in JS from 42.0 and 42.000000.
   We can use Number.isInteger(..) to determine if a number value has any non-zero fraction or not:
 */

/**
 * Number.isInteger(42);           // true
   Number.isInteger(42.0);         // true
   Number.isInteger(42.000000);    // true
   Number.isInteger(42.0000001);   // false
 */

/**
 *  Parsing vs Coercion
 */

/**
 *  ONE MORE INTERSTING THING I FOUND IS THAT  IN PARSEINT WE CAN PASS THE SECOND PERAMETER ALSO WHICH ALLOW US TO TELL THAT WE
 *  NEED OCTAL DECIMAL OR ANY OTHER VALUE MOST OF THE CASE WE WILL USE DECIMAL WHICH IS DEFAULT VALUE BUT ONE THING TO LEARN 
 *  HERE FOR MOSTLY IN INTERVIEW TEST OR ANY APPTITUDE TEST THIS KIND OF QUESION COME AND WE FEEL IT WILL GIVE COMPPIL TIME ERROR
 *  BUT IN REALLY ITS VALID SYNTEX 
 *  console.log(parseInt(someNumericText,8));
 *  console.log(parseInt(someNumericText,10))
 */

/**
 *  parseInt("42",10) === parseFloat("42");     // true  // IF THIS QUESTION WOULD ASK ME I WOULD BE SAY FALSE BUT I THING BECAUSE IN 
 *  JS WE HAVE ONLY NUMBER TYPE AND ===  CHECK WHICH IS VALID AND SECOND IS VALUE HERE PARSEFLOAT AND PARSEINT BOTH WILL RETURN SAME 42
 *  THIS WAY TRUE MAKE MORE SENSE 
 */

/**
 * const val = typeof haresh || 2  // THIS ONE IS INCREDIBLE SEE typeof haresh is RETURNING STRING "undefined" and because of that 
 *  first condition getting true because string "undefined" its not placeholder undefined everything make sense now
   console.log(val)
   console.log(parseInt(val))
 */

/**
 * The parseInt(..) utility specifically, takes as an optional -- but actually, rather necessary -- second argument, radix: 
 * the numeric base to assume for interpreting the string characters for the number (range 2 - 36). 
 * 10 is for standard base-10 numbers, 2 is for binary, 8 is for octal, and 16 is for hexadecimal. 
 * Any other unusual radix, like 23, assumes digits in order, 0 - 9 followed by the a - z (case insensitive) character ordination.
 *  If the specified radix is outside the 2 - 36 range, parseInt(..) fails as invalid and returns the NaN value.
 */

/**
 *  WHEN WE TALK ABOUT NUMBER I THING THIS ONE ALSO GOOD POINT THAT CAN BE HELPFUL SOME TIME TO CONVERT IN DIFFERENT BASE VALUE AND 
 *  THESE IS WHERE WE CAME TO KNOW THAT WE CAN PASS THIS BASE VALUES IN toString() method
 *  
 */

 const myAge = 42;

 myAge.toString(2);          // "101010"
 myAge.toString(8);          // "52"
 myAge.toString(16);         // "2a"
 myAge.toString(23);         // "1j"
 myAge.toString(36);         // "16"


 /**
  *  SOUNDS LIKE WE HAVE SOMETHING MORE TO LEARN HERE REGARDING 
  *  Number.MAX_VALUE === (Number.MAX_VALUE + 1);
      // true -- oops!

        Number.MAX_VALUE === (Number.MAX_VALUE + 10000000);
         // true
  */


/**
 *  I UNDERSTAND THAT WE WE DO PLUS IT DOES NOT GO BEYOND THE LIMIT BUT WHAT ABOUT MINUS - WE ARE DOING -1 THEN WHY
 *  ITS STILL GIVING TRUE ANS FROM GPT 
 * 
 *  console.log(Number.MAX_VALUE === Number.MAX_VALUE - 1) 

The output of the code console.log(Number.MAX_VALUE === Number.MAX_VALUE - 1) will be true.

In JavaScript, Number.MAX_VALUE represents the largest positive finite value that can be represented in the Number data type. 
When you subtract 1 from Number.MAX_VALUE, it doesn't change the value because Number.MAX_VALUE is so large that the subtraction of 1 has no effect on it; 
it remains the same value.

So, Number.MAX_VALUE === Number.MAX_VALUE - 1 is true because you are essentially comparing a value to itself after subtracting 1, which doesn't change the value.
 */

/**
 * console.log(Number.MAX_VALUE === Number.MAX_VALUE - Math.pow(2,999)) dont no what is minimum value but make sense 999 will
 * give you false
 */

/***
 *  THIS IS INCREDIBLE THING TO DISCUSS WHAT IS DIFFERENT BETWEEN Number.MAX_VALUE and Number.MAX_SAFE_INTERGER
 *  Since Number.MAX_VALUE is an integer, you might assume that it's the largest integer in the language. 
 *  But that's not really accurate.
    The largest integer you can accurately store in the number type is 2^53 - 1, or 9007199254740991, 
    which is way smaller than Number.MAX_VALUE (about 2^1024 - 1). This special safer value is exposed as
    Number.MAX_SAFE_INTEGER:
 */

/**
 *  ONE THING I LEARNED THAT WE CAN ADD HELL LOT OF VALUE IN MAX_SAFE_INTEGER BUT WHEN ITS COME TO MATH.MAX_VALUE
 */

/**
 *  ALSO ONE THING THAT JS HAS BOTH MAX_VALUE AND MAX_SAFE_INTEGER THEN WHAT IS THE DIFFERENT I KNOW BOTH STORE HELL
 *  DIFFERENT RANG OF VALUE BUT ONE THING I DON'T KNOW IS WHY WE HAVE THESE TWO DIFFERENT THING
 */

/**
 *  In summary, Number.MAX_VALUE is about the maximum value for floating-point numbers, 
 *  while Number.MAX_SAFE_INTEGER is about the maximum value for integers that can be safely and precisely 
 *  represented in JavaScript without loss of precision. (LOSS OF PERCISION)
 *  MEANING OF precision :  the quality, condition, or fact of being exact and accurate.
 */

/**
 *  Invalid Number : 
 * 
 *  WE ALREADY HAVE LOT OF DIFFERENT CONTENT IN 1.TYPES REGARDING  AND HERE WE HAVE ALSO SAME CONTENT HERE BUT ONE MORE THING
 *  TO LEARN HERE IS THAT I WAS AWARE THAT NAN VALUES ARE NOT EQUAL TO EACH OTHER BUT IN SEE THATS ONLY WITH === 
 *   
 *  THERE IS WAY WITH THAT TWO NAN VALUES CAN GIVE :  
 * 
 *  const politicianIQ = "nothing" / Infinity;

    console.log(Number.isNaN(politicianIQ));  // true
    console.log(politicianIQ === NaN); // with === we are going to get false
    console.log(Object.is(NaN,politicianIQ));  // with Object.is() we are going to get true
 */

/**
*  Here's a fact of virtually all JS programs, whether you realize it or not: NaN happens. Seriously, 
* almost all programs that do any math or numeric conversions are subject to NaN showing up.
*/


/**
 *  BigInteger Values : (WE NEED FEW POINTS FOR THIS ALSO)
 * 
 *  As the maximum safe integer in JS numbers is 9007199254740991 (see above), such a relatively 
 *  low limit can present a problem if a JS program needs to perform larger integer math, or
 *  even just hold values like 64-bit integer IDs (e.g., Twitter Tweet IDs).
 * 
 * For that reason, JS provides the alternate bigint type (BigInteger), which can store arbitrarily large 
 * (theoretically not limited, except by finite machine memory and/or JS implementation) integers.
 * 
 * To distinguish a bigint from a whole (integer) number value, which would otherwise both look the same (42), 
 * JS requires an n suffix on bigint values:
    myAge = 42n;        // this is a bigint, not a number (for any bigint number we will need to add n at the end of it)

    myKidsAge = 11;     // this is a number, not a bigint

  A bigint value can also be created with the BigInt(..) function; for example, to convert a whole (integer) number value to a bigint:

  myAge += BigInt(inc); // THIS ONE WE NEED TO UNDERSTAND

  const a = new  BigInt(3);  // NEVER EVER CALL WITH NEW KEYWORD


  Just as with BigInt(..), the Symbol(..) function must be called without the new keyword. (in apptitude test it can be asked like that)

 */


  /**
   *  FEW THINGS ABOUT SYMBOL : 
   *  DEVELOPER CAN NOT SEE THE VALUE OF SYMBOL WHAT VALUE IS GETTING PASSED INSIDE PRETHESES ITS JUST FOR DEBUGGING PURPOSE
   * 
   * Symbols are guaranteed by the JS engine to be unique (only within the program itself), and are unguessable. In other words, 
   * a duplicate symbol value can never be created in a program.
   */


  /**
   *  It's important to note that symbol properties are still publicly visible on any object;
   *  they're not actually private. But they're treated as special and set-apart from the normal
   *  collection of object properties. It's similar to if I had done instead:

   */


  /********************************** CHAP : 2   ****************************/


  /**
   *  Primitive Immutability : THIS IS BASE AND I THING THIS ONE SHOULD BE DISCUSSED AS MUCH AS POSSIBLE 
   *  SEE WE ARE SAYING THAT PRIMITIVE VALUES IN JS ARE IMMUTABLE BUT WE CAN EASYLY CHANGE VALUES LIKE 
   *  FROM I  = 10 ; TO I= 15 SO HOW THOSE ARE IMMUTABLE AND BIG REASSON IS WE HAVE BIG MISS UDERSTANDING 
   *  GAP OF UNDERSTANDING WHAT DO WE MEAN BY IMMUTABLE 
   * 
   * myAge = 42;
     // later:
     myAge = 43; 

     The myAge = 43 statement doesn't change the value. It reassigns a different value 43 to myAge,
     completely replacing the previous value of 42.

     REPLIACING THE VALUE  42 WITH 43 AND MAKING  CHANGE IN 42 IS LOT DIFFERENT THING
   */


     /**
      *  Additionally, properties cannot be added to any primitive values:  (POINT THAT MENTIONED BY RAVI AND WHY I HAVE THIS TOPIC)
      * 
      * greeting = "Hello.";
      * greeting.length;            
      * // WHAT IF WE DO THIS 
      * greeting.length = 100; // THIS WON'T DO ANYTHING YOU
      */



     /**
      *   String Equality : 
      *   
      *   SOMETHING THAT I LEARNED NEW ALSO : 
      *   console.log("my name" === "my n\x61me");               // true
      * 
      *    NOW THIS IS AGAIN SHOCKING THAT HOW THE HELL JS IS HANDLING INTERNALLY THIS IF SOMEONE ASK ME TO CREATE
      *    FUNCTION THAT COMPARE TO STRING I WOULD REALLY NOT THING ABOUT THAT SCENARIO AND IN MOST CASES JS ALSO
      *    SHOULD NOT THING ABOUT THAT SCENARIO BECAUSE 99% WE DONT DO THIS KIND TO THING 
      * 
      *    BUT LETS UNDERSTAND RATHER THEN CRYING my n\x61me SEE x61 HEAR hexadecimal Unicode representation value 'a'
      */


     /***
      *  AGAIN ONE MORE WIERD THING ABOUT THING ABOUT NUMBERS OR WE CAN SAY ABOUT Numeric Relational Comparisons
      *  OR THIS I THING BEST UNDERSTANDING WE CAN GET IT FROM CHAT GPT ONLY
      *  
      *  Q : CAN YOU TELL ME WHO THE HELL 0.1 + 0.2 NOT EQUAL TO 0.3
      *  The reason that 0.1 + 0.2 is not exactly equal to 0.3 in many programming languages, including JavaScript,
      *  is due to how floating-point numbers are represented in binary.
         Floating-point numbers in JavaScript (and in most programming languages) use a binary representation,
         and not all decimal fractions can be precisely represented in binary. This can lead to tiny inaccuracies 
         when performing operations on floating-point numbers.
         In your case, when you add 0.1 and 0.2, the result is not exactly 0.3 due to the internal representation 
         of those numbers.
      */


    
   /** 
        *  Mathematical Operators (MOST OF US WILL HAVE IDEA BUT STILL PUT HER FOR SAFE SIDE )
        *   40 + 2;                 // 42
            44 - 2;                 // 42
            21 * 2;                 // 42
            84 / 2;                 // 42
            7 ** 2;                 // 49
            49 % 2;                 // 1

            40 + "2";               // "402" (string concatenation)
            44 - "2";               // 42 (because "2" is coerced to 2)
            21 * "2";               // 42 (..ditto..)
            84 / "2";               // 42 (..ditto..)
           "7" ** "2";             // 49 (both operands are coerced to numbers)
           "49" % "2";             // 1 (..ditto..)
    */