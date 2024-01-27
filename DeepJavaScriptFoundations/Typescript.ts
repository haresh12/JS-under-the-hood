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
