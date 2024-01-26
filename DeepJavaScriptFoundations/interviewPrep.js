/**
 *  ALL IMPORTENT JAVASCRIPT QUESTIONS
 *
 */

/***
 *   EXECUTION CONTEXT :  EVERYTHING IN JS HAPPENS INSIDE EXECUTION CONTEXT  ITS JUST LIKE CONTAINER 
 * 
 *    IT HAS TWO PART MEMORY CREATION AND CODE EXECUTION
 * 
 *    MEMORY CONTAINER : STORE ALL THE FUNCTIONS AND COMPONENT IN KEY VALUE PAIR 
 * 
 *    FOR VARIABLE THE VALUE WILL BE UNDEFIEND AND FOR FUNCTION IT STORES ENITER CODE OF THE FUNCTION
 * 
 *    ALSO JS IN SNCRONIZED SINGLE TRHREADED LANGUAGE SO AT THE TIME OF CODE EXECUTION CODE GET EXECUTED ONE LINE AT A TIME AND SOME SPECIFIC ORDER 
 *    AND THAT ORDER IS TOP TO BOTTOM
 * 
 *    ALSO THIS CODE COMPONENT IS ALSO KNOWN AS THREAD OF EXECUTION => SEE AT THE END ITS RUNNING CODE LINE BY LIN E NOTHING NEW IS HAPPENING THERE
 * 
 *    Synchronous:- In a specific synchronous order.
      Single-threaded:- One command at a time.
 *  
 * 
 */

/***
 *     How JS is executed & Call Stack
 *
 *     AS SOON AS WE RUN ANY JAVASCRIPT PROGRAM THE FIRST THING WILL HAPPEN IS GLOBAL EXECUTION CONTEXT WILL BE CREATED
 *     NOW THAT GLOBAL EXECUTION CONTEXT WILL HAVE TWO PART LIKE MEMORY CREATION FACE AND CODE EXECTUTION FACE NOW
 *     IN FIRST PHASE JS WILL TRY TO ASSIGN MEMORY TO EACH AND EVERY VARIABLES AND FUNCTION
 *
 *     IN FIRST PHASE OF MEMORY CREATION  JS WILL ASSIGN UNDEFINED VALUE TO VARIABLES AND IN CASE OF FUNCTIONS IT WILL COPY ENTIRE FUNCTIONS CODE
 *
 *     NOT SECOND PART COMES INTO THE PICTURE WHICH IS CODE EXEUCTION PHASE IN THAT JS WILL TRY TO RUN CODE ONE LINE AT TIME FROM TOP TO BOTTOM
 *
 *    IF YOU SEE EVERYTHING IN SECOND PHASE IS SAME AS OTHER LANGUAGE SO HERE ONE THING WE NEED TO UNDERSTAND IS THAT IN JAVASCRIPT AT THE THE
 *    TIME OF CODE EXECUTION IF IT SEES THE NEW FUNCTIO THEN FOR THAT NEW EXECUTION CONTEXT WILL BE CRREATED AND SAME PROCESS WILL HAPPEN AGAIN
 *
 *    SO FIRST GLOBLE EXECUTION CONTEXT : GOOD SAME TO PART MEMORY CREATION AND CODE EXECUTION
 *
 *    FOR EACH FUNCTION JS WILL CREATE LOCAL EXECUTION CONTEXT I AM JUST USING WORD LOCAL FOR MY UNDERSTANDING ELSE WE CAN SIMPLY SAY GLOBAL EXECUTION CONTEXT
 *
 *    ONE MORE THING WE NEED TO UNDERSTAND THAT WHETHER ITS GLOBAL OR WHETHER ITS LOCAL BOTH EXECUTION CONTEXT WILL BEHAVE SAME WAY AND BOTH WILL HAVE SAME TWO
 *    FACES MAKE SENSE
 *
 *    SEE IF WE WILL TRY TO REMEBER EVERYTHING THEN THATS HARD BUT IF YOU UNDERSTAND THIS THINGS THIS ARE SIMPLE THING
 *
 *    AT THIS POINT OF TIME ONE QUEUSTION CAN COME INTO MIND THAT HOW THE HELL JS HANDLES ALL THIS THINGS LIKE GLOBAL EXECUTION CONTEXT , EXECUTION CONTEXT AND
 *    EVERYHING SO SIMPLE ANSWER FOR THAT IS ALSO CALL STACK :
 *
 *    FIRST GLOBLE EXEUCTION CONTEXT WILL BE PUTTED INTO CALL STACK AND THEN EACH AND EVERY FUNCTION SUPPOSE FUNCTION IS DONE WITH ITS EXECUTION PART THEN
 *    IT WILL BE REMOVED FROM CALLSTACK AND AT LAST GLOBAL EXECUTION CONTEXT WILL BE REMOVED FROM THE CALLSTACK
 */

/***
 *    SO TILL THIS POINTS WE LEARD FEW IMPORTENT WORD AS BELOW
 *
 *    SYNCRONIZED SINGLE THREADED LANGUAGE
 *    MEMORY CREATION PHASE
 *    CODE EXECUTION PHASE : ALSO KNOW AS THREAD OF EXECUTION
 *    CALL STACK
 *    EXECUTION CONTEXT
 *    GLOBAL EXECUTION CONTEXT
 */

/**
 *  Hoisting in JavaScript (variables & functions)
 *
 *  BEFORE WE TALK ABOUT HOISTING UNDERSTAND ONE THING THAT
 *
 *   console.log(a);
 *   var a = 10;
 *
 *  IF YOU WILL TRY TO RUN THIS KIND FO CODE IN ANY OTHER PROGRAMING LANGUAGE THEN IT WILL THROUGH AS ERROR LINE ANYTHING SO ALWAYS BE THANKFUL FRO JAVASCRIPT
 *
 *  BUT HARESH COULD YOU TELL US HOW JS DOES THAT WHATS THE MAGIC BEHIND THAT ?
 *
 *   IF YOU NEED AWNSER IN ONE WORD THAN ITS BECAUSE OF TWO PHASE OF JAVASCRIPT CODE EXECUTION 1. MEMORY CREATTION AND CODE EXECUTION
 *
 *   IN  JS MEMORY CREATION PHASE HAPPENS FIRST AND THEN ACTUALLY CODE EXECUTION HAPPENS NOW IN MEMORY CREATION PHASE JS ALREADY ASSING UNDEFINED VALUE FO A
 *   VARIABLE AND THIS WAY AT THE TIME OF CODE EXECUTION JS ALREADY KNOW THAT I HAVE ASSIGNED MEMEORY TO VARIABLE A IN PAST SO I AM SURE THAT IT WILL BE IN THE
 *   PROGRAM
 *
 *  AND MAKE SURE FOR ABOVE CODE OUTPUT WILL BE UNDEFINED BECAUSE THAT IS THE DEFAULT VALUE JAVASCRIPT GIVES VARIABLES AND WE ARE ASSIGNING ACTUAL VALUE AFTER CONSOLE
 *  LOG SO BEFORE THAT IT WILL BE ALWAYS UNDEFINED.
 *
 *  IN CASE OF FUNCTION PICTURE IS LITTLE DIFFERNT SEE IN CASE OF FUNCTION JS STORE ENTIRE FUNCTION CODE SO THERE IF YOU WILL SEE WE WILL GET THE EXECT OUTPUT
 *
 *  IN CASE OF FUNCTION WE DON'T NEED TO WORRY WHETHERE YOU CAN CALLING FUNCTION BEFORE DECLERING IT AND IN CASE OF VARIABLE YOUR APP WON'T GET CRASH
 *  BUT VALUE WILL BE UNDEFINED
 *
 *   sameDay()  // call before declertion no issue brother i will give you same output
 *   function sameDay(){
 *     console.log('BE HUMBLE BE NICE BUT NEVER LET GO')
 *   }
 *   sameDay() // calling after declerion no issue at all i will give you same output MAKE SURE YOU ALWAYS PREFER THIS ONE RATHER THEN ABOVE ONE
 *
 *  NOW HARESH I UNDERSTAND THIS BUT WHAT HAPPENS IN CASE OF ARROW FUNCION : GOOD QUESTION
 *
 *  In case of arrow function your program will be crashed if you try to run function before initalizing it and it make sense
 *
 *  SEE IN CASE OF ARROW FUNCTION AT THEN TIME OF MEMORY CREATION THE JS ASSIGN UNDEFIEND VALUE TO THE FUNCTION AND NOW IF YOU TRY TO INVOKE UNDEFINED THEN
 *  WHAT ELSE OUTPUT WILL YOU EXPECT.
 *
 *    doSomething();  // WHY ARE YOU CALLING ME BEFORE INITAILIZING ME
 *
 *   var doSomething =  () => {
 *    console.log("but i have nothing to do sir");
 *   }
 *
 *  TILL KNOW YOU MIGHT BE HAVE CONFUTION THAT WHY ITS BEHAVING DIFFERENT IN CASE OF NORMAL FUNCION AND IN CASE OF ARROW FUNCTION SEE REMEMBER SIMPLE THING
 *  THAT IN CASE OF ARROW FUNCTION  UNDEFINED VALUE IS GETTING ASSING TO THE VARIABLE IN CASE OF NORMAL FUNCTION ENTIRE CODE HASE BEEN COPIED.
 *
 *
 *  IN MOST OF THE INTERVIEWS THEY MAY ASK YOU WHATS THE DIFFERENT BETWEEN ARROW FUNCTION AND NORMAL FUNCTION SO SIMPLE ANSWER IS HOISTING AND OTHER MAJOR
 *  DIFFERNT IS HOW THIS KEYWORD BEHAVES BUT THAT WE WILL LEARN LATER
 *
 *
 *  HERE ONE MORE IMPORTENT THING TO LEARN THAT THERE IS HUGE DIFFERENCE BETWEEN UNDEFIEND AND NOT DEFINED
 *
 *   // PROGRAM 1 THIS WILL GIVE YOU UNDEFINED BECAUSE X IS IN THE MEMORY IT JUST NO VALUE HAS BEEN ASSGINED AT THE POINT OF CONSOLE.
 *    console.log(x)
 *    var x = 20;
 *
 *   /// PROGRAM 2 WE DON'T HAVE Y ANYWHERE SO IT WON'T EVEN RUN THE PROGRAM IT WILL GIVE SIMPLE ERROR THAT Y IS NOT-DEFINED
 *   console.log(y);
 *
 *   ONE YOU UNDERSTAND DIFFERENT BETWEEN UNDEFINED AND NOT DEFINED YOU UNDERSTAND LIFE
 */

/***
 *  HERE WE LEARNED FEW WORDS
 *
 *  HOISTING
 *  ARROW FUNCTION AND NORMAL FUNCTION
 *  UNDEFINED AND NOT DEFINED
 */

/**
 *   Functions and Variable Environments  : (THIS IS SIMPLE NOT MUCH TO EXPLAIN)
 *
 *   var x = 1;
 *   a();
 *   b();
 *
 *  function a() {
 *   var x = 10;
 *   console.log(x);
 *  }
 *
 *  function b() {
 *   var x = 10;
 *   console.log(x);
 *  }
 *
 *   console.log(x);
 *
 *   SEE ONLY THING TO LEARN HERE IS ABOUT HOW FUNCTIONS FINDS OUT FOR THE VARIABLES GIVEN THE EXAMPLE YOU SEE WE HAVE 3 DIFFERENT X VARIABLES ONE INSIDE
 *   A FUNCTION ONE INSIDE B FUNCTION AND ONE AT GLOBAL LEVEL
 *
 *  NOW SEE WHEN WE ARE RUNNING FUNCTION A() AT THAT TIME FUNCTION A WILL TRY TO FIND X INSIDE IT OWN EXECTION CONTEXT AND WE CAN SEE IT HAS VARIABLE A SO
 *  IT WILL SIMPLE PRINT IT
 *
 *  SAME GOES WITH FUNCTION B() IT ALSO HAVE VARIABLE X INSIDE ITS OWN EXECUTION CONTEXT SO GREAT AGAIN IT WILL USE FROM THERE
 *
 *  NOW ALSO AT GLOBAL SPACE IT HAS SAME THING WE HAVE X IN GLOBAL SPACE SO SIMPLE EVERYTHING IS FINE
 *
 *  IN SIMPLE WORD THERE IS NOT MUCH TO UNDERSTAND IN THIS PROGRAM BECAUSE WE HAVE X IN EACH AND EVERY EXECUTION CONTEXT THING ABOUT THE SEANRIO WHERE
 *  WE DON'T HAVE X IN A() FUNCTION OR IN B() FUNCTION IN THAT CASE WHAT WILL HAPPEN HOW THINGS WORK ALL THAT WE WILL LEARN IN NEXT TOPIC
 */

/**
 *     Shortest JS Program, window & this keyword
 *
 *     The shortest JS program is empty file.
 *     Because even then, JS engine does a lot of things.
 *     As always, even in this case, it creates the GEC which has memory space and the execution context.
 *
 *    SEE EVEN YOU DON'T HAVE SINGLE LINE OF CODE TO RUN JAVASCRIPT WILL STILL DO LOT OF THINGS IN BACKGROUND AND THOSE THINGS ARE LIKE
 *    CREATEING GLOBAL EXECUTION CONTEXT AND PROVIDING USE WINDOW OBJECT
 *
 *    NOW SEE THE WINDOW OBJECT HAS LOTS OF METHODS THAT WE USE BUT IN CASE OF BROWSER YOU WILL GET WINDOW OBJECT IN CASE OF NODE THAT WINDOW
 *    OBJECT WILL BE GLOBEL AND ONE MORE INTERSTING THING IS THAT IN GLOBAL EXECTION CONTEXT WINDOW ===  THIS ===  GLOBAL
 *
 *    ALSO UNDERTAND THAT ALL BELOW THINGS WILL GIVE SAME OUTPUT
 *
 *    function raho(){
 *     console.log("bolna")
 *   }
 *
 *   raho();
 *   this.raho():
 *   window.raho();
 *
 *  // ALL THREE ARE SAME AT GLOBAL LEVEL NO DIFFERNCE BETWEEN THEM
 *
 *  IF I HAVE TO TAKE ONE LEARING POINT FROM HERE THEN IT WOULD BE LIKE UNDERSTADING OF WINDOW OBJECT AND HOW WINDOW , GLOBAL OBJECT ARE AME WHEN WE
 *  COMPARE THEM AT GLOBAL LEVEL . AND ALSO WINDOW ====  THIS === GLOBAL JUST TAKE THIS ONE POINT THATS ENOUGH
 */

/**
 *  POINTS THAT WE LEARNED
 *  HOW FUNCTION AND VARIABLE BEHAVE WHEN THEY HAVE SAME NAME VARIABLES
 *  WINDOW OBJECT
 *  CREATION OF GEC EVEN WE RUN THE EMPTY FILE
 *  THIS (WILL GO DEEPER INTO THAT)
 *  DIFFERENT ENVIROMENT CAN HAVE DIFFERENT NAMES FOR GLOBAL OBJECT
 *  LAST BUT MI : THIS ==== WINDOW ==== GLOBAL
 */

/**
 *  The Scope Chain, Scope & Lexical Environment
 *
 *  OK  FIRST LETS UNDERSTAND THAT LEXICAL EVIROMENT IS SIMPLE WORD MEANS THAT WHERE YOUR CODE IS SEATING.
 *
 *  function a() {
 *   let b = 50; ; // HERE VERIABLE B IS LEXICALY SEATING INSIDE FUNCTION A AND SCOPE OF VERIABLE B IN ENTIRE FUNCTION A
 *   console.log(b)
 *  }
 *
 *  TO BE REALLY THIS IS MOST COMMON THING HERE SCOPE MEANS WHERE BASICALLY YOU CAN USE TAHT SPECIFIC FUNCTION OR VARIABLE
 *
 *  NOW BEFORE WE MOVE INTO SCOPE CHAIN LETS UNDERSTANDED ONE EXAMPLE
 *
 *   THIS IS YOUR FAMILY =>>> YOU >>>  ELDER BROTHER >>> MOTHER >>> FATHER >>> GRAND FATHER
 *
 *   SUPPOSE YOU NEED 100 RS AND YOU WENT TO YOUR ELDER BROTHER AND ASKED FOR 100 RS BUT HE DON'T HAVE IT BUT HE REALLY LOVES YOU SO HE TRIED HIS BEST
 *   AND RATHER THEN DIRECTLY SAYING NO TO YOU HE ASKED TO MOTHER NOW MOTHER ALSO DOES NOT HAT MONEY AND MOTHER NEVER WANTS TO SAY NO TO THERE CHILDREN
 *   SO WHAT SHE DID SHE ASKED HER HUSBAND (YOUR FATHER) BUT HE ALSO DOES NOT HAS MONEY AND THEN YOU FATHER WENT TO HIS OWN FATHER AND ASKED FOR 100
 *   RUPEES AND FINALLY HE GAVE TO HIM  YOUR FATHER GAVE TO YOUR MOTHER YOU MOTHER GAVE TO YOU ELDER BROTHER AND YOUR ELDER BROTHER GAVE THAT TO YOU
 *
 *   SEE IN ABOVE EXAMPLE YOUR END GOAL WAS TO GET 100 RS AND YOU GOT IT NO MATTER FROM WHERE
 *
 *   AND THIS IS THE BEST EXAMPLE OF SCOPE CHAIN GIVEN THE EXAMPLE YOU HAVE ONE FUNCTION WHICH IS PRINTING X AND SUPPOSE IN ITS OWN EXECUTION CONTEXT IT
 *   DOES NOT HAVE ANY THAT VARIABLE THEN IT WON'T STOP THERE IT WILL ASK TO HIS PARENT FUNCTION IF IT ALSO DOES NOT HAVE THEN HIS PARENT COMPONENT WILL
 *   ASK TO HIS PARENT COMPONENT UNTIL YOU REACH TO GLOBAL EXECUTION CONTEXT BECAUSE GEC DOES NOT HAVE ANY PARENT COMPONENT
 *
 *   ABOVE BOTH EXAMPLE ARE MORE THEN ENOUGH TO UNDERSTAND SCOPE CHAIN
 *
 *   ONE MORE THING THAT WE NEED TO LEARN HERE IS THAT IN CASE OF IF YOU ASKED YOUR PARENT WHICH IS GLOBAL EXECUTION CONTEXT AND IT ALSO DOES NOT HAVE VARIABLE
 *   THAT YOU ARE LOOKING FOR THEN IT WILL SIMPLY CRASH THE APPLICATION
 *
 *
 *   NOW MAKE SURE ONE THING THAT YOU CAN ASK MONEY TO YOU ELDER BUT IF YOUR ELDER DOES NOT HAVE ANY MONEY THEN YOU CAN NOT HELP THEM ANYWAY
 *
 *   SO SUPPOSE IF YOU TRYING TO PRINT console.log(a);  AT GLOBAL LEVEL WE DON'T HAVE A THEN GEC CAN NOT ASK HELP TO ITS PARANT BECAUSE IT DOES NOT HAVE.
 *   IN THAT CASE JS PROGRAM WILL THROUGH ERROR THAT A IN NOT-DEFIEND
 *
 *   WHENEVER EXECUTION CONTEXT IS CREATED THEN WITH THAT ALSO LEXICAL ENVIROMENT IS CREATED IN THAT LEXICAL ENVIROMENT YOU WILL HAVE YOUR OWN STUFF AND
 *   STUFF OF YOUR PARENT FUNCTION ALSO
 *
 */

/***
 *
 *   let & const in JS, Temporal Dead Zone
 *
 *   LET AND CONST DECLEARION ARE HOIESTED BUT THEY ARE DIFFERENT THEN VAR.
 *   IF YOU SEE LET AND CONST ARE BLOCKED SCOPED WHERE VAR IS FUNCTION SCOPE
 *
 *    console.log(a);
 *    var a = 10;
 *
 *   // ABOVE EXAMPLE WILL WORK FINE BECAUSE OF VAR AS IN GEC THE SCOPE OF VAR IS GLOBAL
 *
 *   console.log(b);
 *   let b = 10;
 *
 *   SEE IF YOU DON'T WANT GO MUCH DEEPERT THEN ATLEAST UNDERSTAND ONE THING IS THAT LET AND CONST ARE MUCH MORE STRICT THEN VAR SEE SAME THING
 *   WE TRIED WITH VAR IT WORKED BUT IN CASE OF LET ITS NOT WORKING BECAUSE OF TEMORIAL DEAD ZONE
 *
 *   YES YOU HEARD IT RIGHT THIS ONE BUG WORD : TEMOREAL DEAD ZONE
 *
 *   THE BEST WAY TO UNDERSTAND IS WITH EXAMPLE : 
 * 
 * 
 *     console.log(a); // ReferenceError: Cannot access 'a' before initialization
       console.log(b); // prints undefined as expected
       let a = 10;
       console.log(a); // 10
       var b = 15;
       console.log(window.a); // undefined
       console.log(window.b); // 15
 *
        Both a and b are actually initialized as undefined in hoisting stage. But var b is inside the storage space of GLOBAL,
        and a is in a separate memory object called script, where it can be accessed only after assigning some value to it first ie. 
        one can access 'a' only if it is assigned. Thus, it throws error.


        IMPORTENT THING TO UNDERSTAND HERE IS SCRIPT MEMORY TAGE SEE VAR WAS GETTING STORED IN MEMORY TAB LET AND CONST WILL BE STORED 
        SCRIPT TAG


        Temporal Dead Zone : Time since when the let variable was hoisted until it is initialized some value.


        you assign some value then only use let don't try to use before assigning or initalizing it 

        console.log(a);
        let a 

        above one won't works

        let b 
        console.log(b);

        this will work fine because see you have inizalized it b first and then you have used it


          Reference Error are thrown when variables are in temporal dead zone.
  
          Syntax Error doesn't even let us run single line of code.


          // THIS WILL GIVE YOU REFERENCE ERROR
          console.log(a);
          let a = 100;


          // THIS WILL GIVE YOU SYTEX ERROR
           let a = 100;
           let b = 300;



         // THIS WILL GIVE YOU TYPE ERROR  

         const a = 100; // UNDERSTAND CONST IS MORE STRICT THE LET IN CASE OF LET IF YOU HAVE DONE THAT IT WILL WORK 100% FINE BUT IN CASE OF 
         const it won't run
         a = 100;


    IF YOU UNDERSTAND BAISC YOU UNDERSTAND EVERYTHING SEE WHY EVEN WE NEED THISE LET AND CONST ITS BECAUSE WE WANT TO MAKE JAVASCRIPT MORE STRICT 
    IN CASE OF LET YOU CAN NOT USE VARIABLE BEFORE INITALIZING IT THATS THE ONE GOOD RULE NOW SECOND ONE IS THAT CONST THAT ONCE YOU HAVE ASSIGNED
    SOME VALUE THEN DON'T ASSIGN ANY NEW VALUE TO THAT VARIABLE GOT IT ?

    SOME GOOD PRACTICES:
    Try using const wherever possible.
    If not, use let, Avoid var.
    Declare and initialize all variables with let to the top to avoid errors to shrink temporal dead zone window to zero.

 */

/***
 *  THINGS THAT WE LEARNED HERE
 *
 *  scope
 *  lexical enviroment
 *  scope chaine
 *  GEC does not have any lexical enviroment its atteched to null
 *  let var and const
 *  Script tag
 *  Temorial Dead Zone
 *  Reference Error , Syntex Error and Type error :  Let ko phele he use kr doge to Reference error aayega
 *                                                   Do let variables ka same name doge to Sytex error aayga
 *                                                   const fo value fir se assign ki to type error aayega
 */

/**
 *  Block Scope & Shadowing in JS  (MI)
 * 
 *  Block aka compound statement is used to group JS statements together into 1 group. We group them within {...}
 * 
 *   if() // this need atleast one statement 
 *   
 *   if(true) console.log('fine')
 * 
 *   this will work fine but what about if we need multiple statement in taht case we will be using block
 * 
 *   if(true) {
 *     // in simple terms when you need to group multiple statement into single group at that time we can use block

 *   }

     ANOTHER MOST IMPORTENT INTERVIEW QUESTION IS LET AND CONST ARE BLOCK SCOPED  

     UNDERSTAND ABOVE THING BY EXAMPLE ONLY
     
     {
      var a = 10;
      let b = 100;
      const c = 1000;

      console.log(a);  // THIS WILL WORK FINE 
      console.log(b);  // THIS WILL WORK FINE 
      console.log(c)  // THIS WILL WORK FINE 
     }
      console.log(a);  // THIS WILL WORK FINE BECAUSE FOR A WE ARE USING  VAR 
      console.log(b);  // THIS IS WHERE THE PROBLEM WILL COME BECAUSE LET AND CONST ARE BLOCKED SCOPED AND YOU CAN NOT ACCESS THOSE OUTSIDE OF BLOCK
      console.log(c)

      // UNDERSTAND ONE SIMPLE THING THAT LET AND CONST ARE BLOCK SCOPED AND VAR IS FUNCTION SCOPED


      // NOW HERE ONE MORE THING WE NEED TO LEARN IS SHADOING AND ILLIGAL SHADOWING 


       var a = 100;
       {
        var a = 10;
       }

       console.log(a); // here you will get output 10 because var inside block shadows the value inside var inside block make sense 

       // WHAT DO YOU MEAN BY ILLEGAL SHADOING 

       let a = 100;
       {
          var a = 10;       
       }

       // ABOVE CODE WILL GIVE ERROR DEKH YAAR A KO SCOPE YHA PE GLOBAL HE AND YOU SEE LET BE GLOBAL SCOPE ME HE TO KESE CHALEGA EK HE JESE DO VARIABLES KA NAANM
      
       I THING IF WE TRY TO UNDERSTAND ABOUT TOPIC IT MAKE SENSE BUT IF WE TRY TO REMEMBER THAT TOPIC IT DOES NOT MAKE ANY SENSE 


       ALL YOU HAVE TO UNDERSTAND HERE IS WHAT IS BLOCK SCOPED WHY DO WE EVEN NEED BLOCKS IN JS WHAT IS SHWDOING CAN YOU EXPLAIN WHAT DO YOU MEAN 
       WHY YOU SAY LET AND CONST AND BLOCK SCOPED AND VAR ARE FUNCTIONS SCOPED

      LEARING

      BLOCK
      BLOCK SCOPED LET AND CONST
      FUNCTION SCOPED
      SHADOWING 
      ILLIGAL SHADOWING 
 */

/**
 *   Next thing is about closure
 *
 *   FUNCTION ALONG WITH ITS LAXICAL ENVIROMENT IS KNOW AS CLOSURE (YEP THATS THE DEFINATION I REMEBER);
 *
 *
 *   function a() {
 *    var x = 100;
 *     return function b() {
 *       console.log(x);
 *     }
 *    }
 *
 *   const c =  a();
 *
 *   IF YOU UNDERSTAND ABOVE PROGRAM THEN YOU HAVE GREATE IDEA OF CLOUSER SEE IN JAVASCRIPT YOU CAN PASS FUNCTION INTO
 *   ANOTHER FUNCTION AS ARGUMENT YOU CAN ASSIGN FUNCTION TO VARIABLE AND ALSO YOU CAN RETURN ONE FUNCTION FROM ANOTHER
 *   ITS LIKE FIRST CLASS CITIZEN
 *
 *   NOW MAINLY CLOSURE COMES INTO PICURE WHY YOU RETURN FUNCTION FROM FUNCTION SEE HERE WE HAVE RETURNED FUNCTION
 *   b() FROM FUNCTION A() NOW WE NEED TO UNDERSTAND ONE THING IS THAT ONCE YOU RETURN THE FUNCTION THEN IT GETS
 *   POPPED OUT FROM STACK AND QUESTION IS THAT IF IT GETTES POPPED OUT FROM THE STACK THEN HOW THE HELL WE ARE
 *   ABLE TO USE x BECAUSE IT WAS THE PART OF FUNCTION A() RIGHT AND THATS ALL HAPPENED BECAUSE OF CLOSURE ONLY
 *
 *   IN JAVASCRIPT WHEN YOU RETURN THE FUNCTION THEN NOT ONLY THAT FUNCTION GET RETURN BUT ALSO LAXICAL ENVIROMENT
 *   OF THAT FUNCTION ALSO GET RETURNED
 *
 *   NOW APART FROM ABOVE KNOWLEDGE ONE MORE THING I WOULD SAY IMOPRTENT WHICH IS SETTIMOUT EXAMPLE
 *
 *   // IYKYK solution one to print 1 to 5
 *    for(let i = 1 ; i <= 5++){
 *     setTimeout(() => {
 *       console.log(i);
 *      },i * 1000)
 *    }
 *
 *    // THIS IS THE BEST EXAMPLE OF CLOUSER THANKS TO AKSHAY
 *    for(var i = 1 ; i <= 5 ; i++){
 *    
 *    function close(x){
 *     setTimeout(() => {
 *       console.log(x);
 *      },[x * 1000])
 *     } 
       close(i);
 *    }

       meoization , once , moduler pattern , data hiding and encaulation , construction function (use of this)

       WHAT IS CONSTRUCTION FUNCTION ? (MI NOT DONE YET)

       DISADVANTAGES : OVER COUSUMATION OF MEMORY BECAUSE VARIABLES ARE NOT GARBAGE COLLECTED 

       GARBAGE COLLECTOR :  FREEZE UP THE UN UNUSED FUNCTIONS AND VERIABLES IN VERY SIMPLE TERMS

       NOW SEE JS IS HIGH LEVEL PROGRAMING LANGUAGE AND HERE MEMORY HANDLES BY LANGAUAGE IT SELF
       BUT IS CASE OF PROGRAMING LANGUAGE LIKE C C++ YOU HAVE POWER TO MANAGE THAT
 */

/***
 *     FEW INTERSTING INTERVIEW QUESTIONS
 *
 *     Function statatment   ==== Function Declearion
 *     function a() {
 *       console.log("a");
 *     }
 *
 *    Function expression
 *    var a = function () {
 *     console.log("a");
 *    }
 *
 *   Major different between function statement and function expression is hoisting
 *   in one it will copy entire code of the function and in one it won't copy entire
 *   code rather it will give just value undefined
 *
 *   Anonymus function : function without a name are know as anonymus functions
 *   best example think about when you pass click event of buttons or touchable and all
 *
 *   Named function :
 *    // this is named function and why you will do this i don't know
 *    var c =  function acs(){console.log("why do we do that")}
 *
 *    c();
 *    asc(); // this will throw an error
 *
 *
 *   Different between parameters and arguments :
 *
 *   function haresh(a,b){ // at the time of declearion whatever you are passing is
 *     function parameters
 *     console.log(a,b)
 *    }
 *
 *    haresh(1,2); // At the time of invocation whatever you are passing is know as
 *    function arguments
 *
 *   First class function : THIS THING WE ALREADY DISSCUED IN JAVASCRIPT YOU CAN PASS
 *   FUNCTION AS ARGUMENT , YOU RETURN FUNCTION FROM ANOTHER FUNCTION , AND YOU CAN
 *   ASSIGN FUNCTION TO VARIABLE BECAUSE OF ALL THIS CAPABILITES FUNCTIONS ARE KNOW
 *   AS FIRST CLASS CITIZEN
 *
 *    Arrow function : just different way to define function here if you create arrow
 *    function then it will have major impect on hoisting and second it will have
 *    major impect on how it behaves with this keyword
 *
 *   Callback functions :  SUPPOSE YOU HAVE ONE FUNCTION AND YOU ARE PASSING THAT FUNCTION TO ANOTHER FUNCTION THEN THIS FUNCTION THAT YOU ARE
 *   PASSING TO ANOTHER FUNCTION IS KNOWN AS CALL BACK FUNCTION
 *
 *   Higher Order Function : THE FUNCTION IN WHICH YOU HAVE PASSED THE CALL BACK FUNCTION IS KNOW AS HIGHER ORDER FUNCTION
 *
 *   function callBack(){
 *     console.log("PLEASE DON'T PASS ME")
 *   }
 *
 *   // I AM THE KING I HAVE FULL CONTROL ON YOU MY CALLBACK
 *   function higherOrder(callBack){
 *      callBack(); // OK DO WHATEVER YOU WANT DO WITH ME
 *    }
 */

/**
 *   EVENT LOOP : ONLY HAVE GOOD UNTERSTANDING SO WATCH VIDEO ONE TIME
 *
 *   IF YOU WANTED TO EXLPAIN THIS CONCEPT INTO SIMPLE WAY THEN ONE LINE ANSWER WILL BE ONLY JOB OF EVENT LOOP IS TO CONTINUESLY LOOKING
 *   LOOKING INTO CALL STACK AND CALLBACK QUEUE
 *
 *   IN LAST INTERVIEW I FORGOT TO EXPLAIN ABOUT CALL BACK QUEUE I THING IT MATTERS  LOT SEE UNTIL AND UNLESS CALL STACK IN NOT EMPTY IT WILL
 *   JAVASCRIPT WILL ALWAYS GIVE FIRST PRIORITY TO CALL STACK AND THEN ONLY IT WILL GIVE PRIORITY TO CALL BACK QUEUE
 *
 *   MERE KAAM SIRF DEKHNA HE KI KAB CALL STACK KHALI HO TO ME BEJU CHEEZE CALLBACK QUEUE MESE CALL STACK ME
 *
 *   ALSO MAKE SURE THERE IS MORE CONCEPT OF MICRO TASK QUEUE OR IT ALSO KNOW AS PRIORITY QUEUE AND THINGS LIKE PROMISES YOU DOM RELEAATED
 *   STUFF ALWAYS GOES INTO PRIORITY QUEUE AND WITH THAT IF I HAVE TO SAY THAT WHO GET MORE PRIORITY THEN WHATEVER GOES INSIDE MICRO TASK
 *   QUEUE OR WHATEVER GOES INSIDE PRIORITY QUEUE WILL GET FIRST PRIORITY.
 *
 *
 *   THINGS YOU NEED TO LEARN FROM THIS VIDEO IS :
 *
 *     JAVASCRIPT WAITS FOR NONE
 *     CALL STACK HAS ALWAYS FIRST PRIORITY
 *     CALL BACK QUEUE
 *     EVENT LOOP : MY JOB IS 24*7 STILL NO ONE APPRICIATE ME (MAJDOR)
 *     PRIORITY QUEUE : LIKE YOUR MANAGER  (PROMISES GOES INTO PRIORITY QUEUE) MUTATION OBSERVERS AND PROMISISES
 *
 *
 *    MAKE SURE THAT CALL BACK QUEUE WILL ONLY GET OPPRTUNITY TO RUN ONCE MICRO TASK QUEUE IS EMPTY THAT'S ALL ABOUT EVENT LOOP
 *
 */

/**
 *  JS Engine Exposed, Google's V8 Architecture  (MIV)
 *
 *  SEE ONE THING I LEARNED THAT THERE IS A DIFFERNT BETWEEN JAVASCRIPT RUNTIME ENVIROMENT AND JAVASCRIPT ENGINE
 *  ALL THE WEB API AND ALL THE METHODS THAT YOU WHERE THING LIKE HOW IN CASE OF REACT NATIVE WE CAN SETTIMEOUT AND FETCH AND ALL
 *  SO BASICALLY THOSE ALL ARE THE PART OF JAVASCRIPT RUNTIME ENVIROMENT
 *
 *   JS ENGINE IS JUST THE PART OF JAVASCRIPT RUNTIME ENVRIOMENT (MI THING IF YOU UNDERSTAND THIS YOU UNDERSTANF LIFE)
 *
 *    JS ENGINE THREE PART : 1. PARSING  2. COMPILATION 3. EXECUSION
 *
 *    AST : ABSTRACT SYNTEX TREE
 *
 *    JIT : JUST IN TIME COMPLIER
 *
 *    MARK AND SWIP ALGORITHER FOR GARBAGE COLLECTION
 *
 *   SEE BASICALLY HERE BASICALLY WE NEED TO LEARN WHAT JS ENGINE DOES UDNER THE HOOD WE WILL WRITE STEPS :
 *
 *   1. TAKE HUMAN READABLE CODE THAT WE WRITE
 *   2. PARSE THAT CODE USING SYTEX PARSER AND CONVERT THAT INTO ABSTRACT SYNTEX TREE (AST)
 *   3. THIRED FACE IS DEPEND ON WHICH JS ENGINE YOU ARE USING IF YOU ARE USING OLD SPIDER MONKEY THEN ITS INTERPRETOR SO IT WILL DIRECTLY
 *      EXECUTE YOUR CODE LINE BY LINE WITHOUT COMPILYING IT
 *
 *   4. UNDERSTAND THERE ARE BASICALLY 2 TYPES OF JS ENGINE FIRST INTERPRITOR AND SECOND ONE IS COMPILER FIRST ONE DIRECTLY RUN THE CODE AND SECOND
 *      ONE TRIES TO COMPILE CODE FIRST AND THE RUN.
 *
 *   5. IF JS ENGINE IS INTERPRITOR THEN YOUR CODE RUNS FAST
 *
 *   6. IF JS ENGINE COMPLIES YOUR CODE FIRST THEN WE WILL HAVE MORE EFFECIENCY
 *
 *   7. BUT YOU KNOW TIME MOVES AND WE LEARN SO FINALLY WE HAVE SOMETHING CALLED JIT (JUST IN TIME) COMPILER AND V8 JS ENGINE USE THAT IT DOES BOTH
 *     OF ABOVE THING TOGHETHER
 *
 *   8. ONE LAST POINT IS ENTIRE JOB OF JS ENGINE IS TO CONVERT YOUR HIGH LEVEL CODE INTO LOW LEVEL LANGUAGE AND ALSO UNDERSTAND THAT JS ENGINE
 *      IS NOT SOME KIND OF HARDWARE ITS JUST PEICE OF CODE THAT CONVERT HIGH LEVEL CODE INTO LOW LEVEL CODE.
 *
 *
 */

/**
 *    map, filter & reduce  
 * 
 *   Map function  :  It is basically used to transform a array. The map() method creates a new array with the results of calling a 
 *                    function for every array element.
 * 
 *   const output = arr.map(function) // this function tells map that what transformation I want on each element of array
 * 
 *   const arr = [5, 1, 3, 2, 6];
    // Task 1: Double the array element: [10, 2, 6, 4, 12]
    function double(x) {
    return x * 2;
    }
   const doubleArr = arr.map(double); // Internally map will run double function for each element of array and create a new array and returns it.
   console.log(doubleArr); // [10, 2, 6, 4, 12]

   Filter function : Filter function is basically used to filter the value inside an array. 
   The arr.filter() method is used to create a new array from a given array consisting of only those elements 
   from the given array which satisfy a condition set by the argument method.



   Reduce function :  It is a function which take all the values of array and gives a single output of it. 
   It reduces the array to give a single output.

   // IF YOU DON'T WANT TO USE REDUCE THEN YOU CAN SIMPLY USE THIS 
    const array = [5, 1, 3, 2, 6];
   // Calculate sum of elements of array - Non functional programming way
     function findSum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
      }
      return sum;
    }
      console.log(findSum(array)); // 17

// reduce function way  (REDUCE IS ONLY THING WE NEED TO LEARN MAP AND FILTER ARE CLEAR)
const sumOfElem = arr.reduce(function (accumulator, current) {
  // current represent the value of array
  // accumulator is used the result from element of array.
  // In comparison to previous code snippet, *sum* variable is *accumulator* and *arr[i]* is *current*
  accumulator = accumulator + current;
  return accumulator;
}, 0); //In above example sum was initialized with 0, so over here accumulator also needs to be initialized, so the second argument to reduce function represent the initialization value.
console.log(sumOfElem); // 17

 MAKE SURE THAT WE CAN ALSO CHAIN THE FUNCTIONS LIKE arr.map().filter().map() // YES WE CAN DO THAT AND IT MAKE SENSE
 */

let arr = [2, 3, 4, 5];

arr.reduce(function (acc, cur) {
  acc = acc + cur;
  return acc; // DO NOT FORGET TO RETURN ACC ELSE YOUR OUTPUT WILL BE UNDEFINED
}, 0); // DEFAULT VALUE OF ACCUMULATER IS 0 WHAT IF YOU WANT TO MULTIPLE ALL

arr.reduce(function (acc, cur) {
  acc = acc * cur;
  return acc; // DO NOT FORGET TO RETURN ACC ELSE YOUR OUTPUT WILL BE UNDEFINED
}, 1);

/**
 *  Callback hell and inversion of control :
 *  PARMID OF DOOM : DON'T GROW YOU CODE HORIZONTALLY PLEASE
 *
 *  STATE OF PROMISE PENDING , FULFILLED  , REJECTED
 *
 *  AND PROMISE WILL BE CALLED ONLY ONCE AND BEST PART IS THAT PROMISE OBJECTS ARE IMMUTABLE
 *
 *  CONTAINER FOR FUTURE VALUE : PROMISES
 *
 *  PROMISE IS AN OBJEC THAT REPRESET EVENTALLY COMPLIATION OF ASYNC OPERATION
 *
 *  PARAMID OF DOM AND INVERSION OF CONTROL BOTH WILL BE SOLVED WITH PROMISES
 *
 *  CALL BACK HELL CAN BE SOLVED WITH PROMISE CHAINING .THEN().THEN().THEN() MAKE SURE YOU DON'T FORGET TO RETURN IF YOU WANT TO PASS THE DATA
 *
 */

/**
 *  PRMOISE UTILITY METHODS : 
 * 
 *  Promise. all(): This utility method of promise will take an array of promises as input and it will return us a new promise. 
 *  Here we need to understand one thing the new promise will be resolved only when all the promises from the input array get 
 *  resolved if any of them will be rejected then our output promise will also going to through an error. Let's understand it by example.
 *  
 *   (IN SIMPLE WORD I WILL WORK ONLY IF ALL PROMISES ARE RESOLVED IF ANY ONE OF THEN IS FAILED THINK AS I AM FAILED)


 */

const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Result from first promise");
  }, 200);
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Result from second promise");
  }, 400);
});

const thirdPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Result from third promise");
  }, 600);
});

Promise.all([firstPromise, secondPromise, thirdPromise])
  .then((results) => {
    // i will come here only if all promises are resolved
    console.log(results);
  })
  .catch((error) => {
    // If any promise fails i will come here.
    console.log(error);
  });

// OUTPUT WILL BE
/*
     ["Result from second promise","Result from second promise",
      "Result from third promise"]
*/

/***
 *   LETS UNDERSTAND IT IN VERY BASIC WAY :
 *   // ALL OF THEN WILL ACCEPT ARRAY OF PROMISES SEE THIS ARE UTILITY METHODS OF PROMISES
 *
 *   Promise.all() : i will return you result only if all of promises are resolved successfully
 *
 *   Promise.allSetteled() : See i care only about those who are resoved so don't worry even single one of them will be passed then i will return
 *   you that i don't care about reject one but see if all of them are reject then i can't do anything i need to give you error as result
 *
 *  Promise.race : Life is race so here i come into picture give me 100 promises i care only that one who resolved or rejected first as soon as i get one promise
 *  that is resolved or reject i will return you rest i don't care and thats why i said life is race if you are not first then you are last.
 *
 *  Promise.any() : SEE MAJOR THING I LEARENED TODAY IS IN CASE OF PROMISE.RACE() IT DOES NOT CARE ABOUT RESOVED OR REJECTED IT WILL RESET FIRST PROMISE
 *  FOR SURE IN CASE OF PROMISE.ANY() I WILL RETURN YOU FIRST RESOLVED PROMISE.
 *
 *   REMEMBER THIS PROMISE.RACE() FIRST RESOVED OR REJECTED
 *   PROMISE.ANY() FIRST RESOLVED
 *   PROMISE.ALLSETTELED() ALL RESOLVED
 *   PROMISE.ALL : IF ANY OF PROMISED FAILD THEN NO RESULT WILL BE GIVE
 */
