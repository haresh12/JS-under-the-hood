/**
 *  REACT NATIVE ARCHITECTURE  (OLD):
 *
 *   SEE IN LAST INTERVIEW I MAD ONE MISTAKE WE WRITE CODE IN JS THEN ACCORING TO SPECIFIC OS REACT NATIVE COMPILE THAT CODE
 *   AND CREATE EITHER .IPA OR .APK BUT I NEVER TALKED ABOUT JAVASCRIPTCORE WHICH IS JSENGINE USED TO COMPILE CODE INTO
 *   LOW LEVEL LANGUAGE. (JAVASCRIPT ENGINE WRITEN IN C++)
 *
 *   3 DIFFERNT PARALLER THREAD RUNS
 *
 *   JAVASCRIPT THREAD AND NATIVE UI THREAD OR WE CAN SAY MAIN THREAD
 *
 *           (JS BUNDLE)
 *   REACT        =>       JS BUNDLE     => NATIVE UI AND NATIVE MODULE  =>> YOGA (POSITION OF LAYOUT)
 *
 *   NATIVE UI AND NATIVE MODULE  => RESPOSIBLE FOR SHOWING UI INTO THE SCREEN AND FOR ALL INTERATION
 *
 *  SO BASICALLY THREE THING REACT THEN FROM THAT CONVERT INTO JS THEN FROM THAT CONVERT INTO MACHIN LEVEL CODE USING
 *  JAVASCRIPT CODE THEN USE NATIVE THREAD TO RENDERING UI INTO DEVICES AND ALSO ALL THE INTERACTION THEN THERE IS SOMETHING CALLED
 *  YOGA ENGINE WITH CALCULATE THE UI RENDERING POSITION
 *
 *  IN LAST INTERVIEW THEY ALSO ASKED ME DO YOU HAVE IDEA ABOUT BRIDGE AND SEE THIS IS WHERE BRIDGH COMES INTO PICTURE
 *  SEE ALL THE COMMUNICATION HAPPENING BETWEEN JS THREAD AND MAIN THREAD ITS HAPPEING USING BRIDGH ONLY.
 *
 *  THIS IS TO SIMPLE IF YOU REALLY TRY TO UNDERSTAND THIS
 *
 *  JS THREAD I HAVE SOMETHING TO SAY =====> BRIDGE FIRST LET ME I WILL LET MAIN THREAD =>  HEY BRIDGE  DO YOU HAVE ANY MESSAGE FOR ME
 *
 *  OK I UNDERSTOOD NOW WHY OLD ARCITECTURE IS THE PROBLEM SEE FIRST ENTIRE COMMUNICATION IS HAPPENING THROUGH BRIDGE AND
 *  THAT COMMUNICATION IS ALSO ASYC AND ALSO FIRST BRIDGE SERIALIZE DATA AND THEN DESERIALIZE DATA ALL THAT HAPPEN AND BECAUSE
 *  OF THAT IT MIGHT BE SLOW
 *
 *  UNDERSTAND THIS BECAUSE THIS IS THE CORE IF WE DON'T UNDERSTAND THIS LIKE WHAT ELSE YOU EXPECT
 *
 *  KEY WORDS HERE : REACT => METRO => JS CODE => COMPLIED CODE (USING JAVASCRIPT CORE) => BRIDGE => NATIVE THREAD => YOGA ENGINE
 *
 *   (WORST THING HERE IS COMMINCATION WHICH IS ASYCRONIZE)
 */

/**
 *  SO WHATS NEW ARCHITECTURE : BRIDGE IS THE ISSUE
 *
 *  HERE WE ARE REPLACING BRIDGE WITH JSI (JAVASCRIPT SYNCRONIZED INTERNFACE) BASICALLY FOR NOW IF YOU DON'T WANTED TO GO
 *  DEEP AND JUST WANTED TO UNDERSTAND THAT WHAT BENIFIT IT GIVES THEN ONE WORD ANSWER WILL BE BECAUSE OF JSI (JAVASCRIPT
 *  SYCROZINGE INTERFACE) NOW COMMUNICATION BETWEEN JS THREAD AND NATIVE THREAD IS POSSIBLE
 *
 *  FABRIC IS NEW RENDERING SYETEM GO MORE WITH C++ ENTIRE JSI IS BUILD WITH C++
 *
 *  IT BASICALLY DEVIDE ITS PROCESS IN THREE PHASES
 *
 *    RENDER PHASE
 *    COMMITE PHASE
 *    MOUNT PHASE
 *
 *   ENITER POINT HERE IS REMOVE BRIDGE AND USE JSI AS MUCH AS POSSIBLE
 */