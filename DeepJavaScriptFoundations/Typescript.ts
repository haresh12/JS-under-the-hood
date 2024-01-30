/**
 *  LEARN ALL LATEST THING ABOUT TS :
 *
 *   SUPERSET OF JAVASCRIPT : MAKE SURE ITS NOT GIVING ANY NEW FEATURE
 *
 *   ALL ABOUT TYPE SAFETY
 *   ONLY JOB OF TS IS STATIC CHECKING THATS IT
 *   ITS JUST A DEVELOPEMENT TOOL YOUR CODE STILL COMPILE IN JS
 *
 */

let haresh: string = "s"; // you don't need to write type typscript can inffer the value

let greetings: string = "Hello world";

/**
 *  tcs fileName.ts (Run code)
 *  no more typo issue
 *  infer the value
 *  don't have int or float make sure its only number not numbers
 */

let userId: number = 22;

userId.toExponential(); // only number methods will come in suggestion

/**
 *  TYPE INTERENCE
 *
 *  DON'T GIVE TYPE IF YOU ARE GIVING VALUE ON SAME LINE TS HAS MIND
 *  IF YOU ARE ASSIGNING VALUE IMMIDATELY THEN NO NEED TO WRITE TYPE
 */

/**
 *  ANY KEYWORD : REALLY DON'T USE
 *  IF TS ALSO DON'T KNOW WANT TO INFFER THEN IT WILL GIVE ANY VALUE
 */

let jare; // no type given so ts will

function getHaresh() {
  return true;
}

jare = getHaresh();

/**
 *  noImplicitAny : PUT THIS IN ts confit MMMI
 *  noImplicitAny
 *  for function parameters its must that you pass type
 */

/**
 * ONE THING AT TIME TS WILL GIVE YOU ONE ERROR AT TIME ONCE
 * YOU FIX THAT THEN IT WILL MOVE YOU TO NEXT ERROR
 * DEFAULT VALUE IS FEATURE OF ES6 IT HAS NOTHING TO DO WITH TS
 */

// TYPES TO PARAMETER AND RETURN TYPE OF FUNCTION IS STRING
function someValue(num: number): string {
  return num.toString();
}

// RETURN MORE THEN ONE TYPE WITH UNIQN TYPE
// THIS PIPE IS USED FOR UNION TYPE ITS MOST IMORTENT
function getSomething(val: string): false | string {
  if (val == "j") {
    return "jj";
  }
  return false;
}

// ARROR FUNCTION
const getHello = (val: string): number => {
  return 5;
};

/**
 *  GO AMOUT TIME TS HELPS YOU TO INFFER TYPE RATHER YOU DEFINE
 *  BY YOUR SELF
 */

/**
 *  DEFAULT TYPE OF FUNCTION RETURN IS VOID BUT IT WOULD
 *  BE GOOD THE WE MENTION THAT EXPLICITY
 */

/**
 *  UNION , VOID THIS TWO IMORTENT THING I LEARNED TILL NOW
 */

/**
 *  MI INTERVIEW QUESTION DIFFERENT BETWEEN VOID AND NEVER TYPE
 *
 *  SEE IN ALMOST ALL CASE TS RETURN VOID TYPE BY DEFAULT
 *
 *  BUT THERE ARE CASES WHEN YOU WANT TO THROUGH ERROR AND IN
 *  THAT CASE FUNCTION WILL NEVER RETURN SOMETHING AND THATS
 *  WHERE YOU CAN USE NEVER
 */

/**
 *  VOID , NEVER , UNION , TYPE INFER THIS FOUR THINGS LEARNED
 */
/**
 *  OBJECTS : ODD BEHAVIOUR THAT COMES WITH OBJECT
 */

/**
 *  TYPE ALIES :
 */

// TYPE ALIES
// THIS IS TYPE ALIES SEE WE DON'T DEFINE VALUE HERE
// BUT WE DEFINE WHAT TYPE OF VALUE WE EXPECT IN THIS OBJECT
type User = {
  name: string;
  paid: boolean;
  rank: number;
};

// IMPORTENT THING ABOUT TYPE ALIES IS THAT WE DON'T
// NEED TO WRITE THOSE BIG OBJECT AT THE TIME OF
// FUNCTION DECLEARION AND ALSO YOU CAN USE N NUMBER OF
// TIME
function getMyUser(user: User): User {
  return { name: "a", paid: false, rank: 1 };
}

/**
 *  THINGS THAT I LEARNED TILL NOW
 *   TYPE INFER  dikahi de rha he andha nhi hu
 *   UNION TYPE  boolen | string
 *   TYPE ALIES  type haresh = {}
 *   NEVER AND VOID MMMMMI
 */

/** MI THINGS
 *  readonly : NO ONE SHOULD ABLE TO CHANGE IT
 *  ? : OPTIONAL PASS OR DON'T PASS I DON'T CARE
 *
 */

type USER = {
  readonly id: string;
  name: string;
  card?: number;
};

let myUser: USER = { id: "1", name: "a" };

myUser.id = "asdad"; // YOU CAN NOT CHANGE IT BROTHER

// ALSO WHY HAVE'T YOU PASSED THE CARD BECAUSE ITS OPTIONAL

/**
 *  NEXT IMPORTENT AND USEFUL THING THAT I HAVE LEARNED IS THAT
 *  HOW YOU CAN COMBINE THE TYPES
 *
 */

type some = {
  name: string;
};

type date = {
  value: string;
};

type card = some &
  date & {
    number: string;
  };

/**
 *  ONE OF THE BIGGEST MISTAKE YOU CAN DO IS THAT  ASSIGNING
 *  WHILE COMBINING THE VALUE DON'T USE && MAKE SURE TO USE &
 */

/**
 *  THINGS THAT LEARNED
 *
 *  TYPE INFER
 *  UNION TYPE
 *  TYPE ALIES
 *  READ ONLY
 *  OPTIONAL
 *  COMBINE TYPES
 *  NEVER AND VOID : DEFAULT IS VOID AND NEVER WHEN YOU WANT TO THROUGH ERROR
 */

/**
 *  ARRAY IN TS DEFAULT TYPE IS NEVER WEIRD AND NEW FOR ME
 */

// VERY SIMPLE

let superHeros: string[] = ["haresh", "hitesh", "jay"];

let salary: number[] = [121, 132, 11];

// ALSO YOU CAN GIVE CUSTOM TYPE LIKE DIFFERNT TYPE ALIES

let users: Array<USER>;

// UNION : DON'T USE ANY INSTEND USE UNION MMI

type USERR = {
  name: string;
  role: string;
};

type ADMIN = {
  name: string;
  role: string;
  priceChange: number;
};

// NOW HARESH CAN BE USER OR ADMIN I AM NOT SURE IN THAT CASE USE UNION
// THIS UNION LIST CAN BE AS LONG AS YOU WANT
let hitesh: USERR | ADMIN | USER;

// GOOD THING TO LEARN ABOUT UNION
// SUPPOSE IN ONE ARRAY YOU NEED BOTH TYPE STRING AND NUMBER
// HOW WOULD YOU DEAL WITH THAT

let notGoodWay: string[] | number[];
let goodWayArray: (string | number)[]; // THIS IS MOST IMPORTENT

/**
 *  TUPLES : MAKE USRE THIS IS MOST IMPORTENT INTERVIEW QUESION
 *  WE NEED TO UNDERSTAND WHEN TO USE IT AND WHEN NOT TO USE
 */

/**
 *  SEE FOR KNOW IF YOU WANTED TO UNDERSTAND BASIC ABOUT TUPLE
 *  THEN I HAVE ONLY ONE THING TO SAY THAT IF YOU NEED THINGS
 *  ON SPECIFIC ORDER AT THAT TIME WE CAN USE TUPLE
 */

/**
 *  EXAMPLE I KNOW IN ARRAY I NEED STRING AND BOOLEAN THAT MAKE
 *  SENESE BUT THATS CAN BE DONE WITH BASIC TYPESCRIPT AND WE
 *  FOR ME AT THIS TIME ORDER ALSO MATTER LIKE STRING SHOULD
 *  COME FIRST AND THEN BOOLEAN IN THAT CASE I CAN USE TUPLE
 */

let tUser: [string, boolean];

tUser = ["", false]; // this is fine

tUser = [false, ""]; // this is not bhai i need string first

/**
 *  SIMPLE ANS USE TUPLE IF ORDER ALSO MATTERS FOR YOU
 *  WHY THE  HELL WE ARE ABLE TO USE ALL METHODS OF
 *  ARRAY IN TUPLE THIS IS BAD NEVER TRY TO USE THAT
 */

/**
 *  ENUM
 */
// BY DEFAULT VALUE IS LIKE 0 ,1 2
enum SeatChoice {
  HARESH,
  HITESH,
  JAY,
}

SeatChoice.HARESH;
// MOST OF TIME YOU WILL USE STRING
enum SseatChoice {
  HARESH = "a",
  HITESH = "aaa",
  JAY = "aa",
}
// SEE ONE THING IN CASE OF ENUM WE ARE NOT DOING
// EQUAL TO SIGN LIKE TYPE
const enum HARESH {
  TOP,
  MIDDEL,
  LOWER,
}

// THIS IS BEST THING I LEARNED THAT AFTER PUTTING
// CONST HOW LESS CODE IS GENEREATED

// ALWAYS USE const INFRONT OF TYPE

/**
 *  INTERFACE VS TYPE :MOSTLY BOTH ARE SAME WE NEED TO UNDERSTAND
 *  HOW ITS DIFFERENT FROM TYPE
 */

/**
 * SUPPOSE YOU HAVE ONE INTERFACE WHICH IS LIKE USER AND IN THAT
 * YOU HAVE TO PROPERTY BUT THAT INTERFACE COMING FROM SOME
 * THIRD PARTY LIBRARY NOW IN YOU CASE YOU WANT TO ADD ONE MORE
 * FAILD INTO THAT THEN YOU CAN DO IT WITH INTERFACE
 */

// SUPPOSE THIS IS FROM THIRD PART LIBRARY
interface PHONE {
  brand: string;
  id: number;
  onSale: boolean;
}

// BHAI I NEED TO ADD ON MORE PROPERTY IS ONLINE OR STORE
// DON'T WORRY JUST CREATE ONE MORE INTERFACE WITH SAME SAME

// THIS IS IMORTENT THAT TWO INTERFACE WITH SAME NAME NOT GIVING
// ERROR

interface PHONE {
  onStore: boolean;
}

// IN CASE OF TYPE YOU GET ERROR LIKE DUPLICATE IDENTIFIER 
// GOOD THING TO LEARD
type USER {
    aas : boolean
}

// ALSO IF YOU DON'T WANT TO CREATE INTERFACE WITH SAME NAME THEN
// YOU CAN EXTEND THE OTHER INTERFACE ALSO

// YOU CAN EXTEND MULTIPLE INTERFACE THATS SOMTHING NEW
interface SHOP extends PHONE{
    isMyShop : boolean
}

// SEE HERE WE COMBINED ALL THREE INTERFACE WITH JUST 
// EXTEND YOU CAN USE IMPLENMENTS IF YOU HAVE MORE THEN
// ONE INTERFACE TO EXTEND
let buyPhone : SHOP = {brand : 'H',id : 1, onSale : false,
isMyShop : true,onStore : true}


// INTERFACE CAN BE EXTENDED
// INTERFACE CAN BE REOPENED YES I GOT THAT POINT NOW
// TRY TO USE INTERFACE MOST OF THE PLACES

/**
 * noImplicityAny yaad rakhna
 * UNION
 * TYPE ALIES
 * NEVER AND VOID
 * INTERFACE
 * ENUM
 * TUPLE
 * readonly
 * optional 
 * & ; for multiple type alies
 * 
 */

/**
 *  outDir in tsconfig : // YOU CAN DEFINE WHERE SHOULD OUTPUT GOES
 * 
 *   tsc --init ; // USED TO CREATE ts config file
 * 
 *   tsc -w // for watch mode
 */

/**
 *  PUBLIC AND PRIVATE KEYWORD (HOPING THAT THIS ARE SAME AS JAVA)
 */

/**
 *  TYPE MODIFIER IN TYPESCRIPT PUBLIC PRIVATE READONLY
 *  MAKE SURE YOU DON'T FORGET THAT ITS MODIFIER
 *  # IN JS MAKE SENSE AS PRIVATE
 * 
 *  # IN JAVASCRIPT AND PRIVATE IN TS
 * 
 *  PUBLIC PRIVATE READONLY # MODIFIER IN TS AND JS 
 * 
 *  get set I REALLY DON'T THING WE FOLLOW THIS STRUCTURE IN
 *  MOST OF THE PROJECT EXPECT TIGER 21 
 * 
 *  get set private public this all remind me on JAVA KOTLIN
 *  JUST TO PROVIDE DATA HIDING 
 * 
 *  SET DOES OT RETURN ANYTHING AND GET SHOULD ALWAYS RETRUN SOMETHING
 *   
 *  MAKE SURE ABOUT SET ITS LIKE INTERVIEW QUESION BECAUSE IT DOES 
 *  NOT RETURN ANYTHING
 * 
 *  SAME AS PRIVATE PROPERTY WE CAN HAVE PRIVATE METHODS ALSO
 * 
 *  DON'T LEARN MUCH ABOUT OOPS CONCEPT FOR NOW 
 * 
 *  IN ABRESCT CLASS METHOD IMPLEMENTATION ALSO POSIBLE 
 */

/**
 *  GENERAIC ONE OF THE MOST IMPORTENT THING NEED TO UNDERSTAND
 */

// BEST ONE EXAMPLE FOR GENERICS

// function identity(arg : number) : number{
//     return 1
// }

// // WHAT IF I NEED ONE FUNCTION THAT ACCEPT STRING AND RETURN STRING
// function identity(arg : string) : string{
//     return "a"
// }

// // WHAT IF I NEED ONE FUNCTION THAT ACCEPT BOOLEN AND RETURN BOOLEN
// function identity(arg : boolean) : boolean{
//     return false
// }

function identity<T>(arg : T) : T{
    return arg
}

// HOW WEIRD THIS SYTEX LOOKS
const identityWithArrow  = <T>(pro : T[]) : T => {
    return pro[1]
}


// YOU CAN CREATE GENERAIC CLASS ALSO THE WAY YOU CREATED GENERIC
// FUNCTIONS

// typeOf is used as TYPE GUARD JUST FENCY NAME BUT SIMPLY WE NEED
// TO CHECK TYPE WHEN WE ARE NOT SURE WHAT VALUE WE HAVE

// BASICALLY UNDERSTAND IN TS IS KNOW AS TYPE GUARD
let x  : string | number | boolean
x=0;
if(typeof x ===  'string'){
    x = x + parseInt(x)
}else{
     x = x + 5
}

// Discrimant UNION is just one field in each interface will have
// different value we can check according to that function what
// type is basically returned



/**
 *  partial
 *  required
 *  readonly
 *  omit 
 *  pick
 */