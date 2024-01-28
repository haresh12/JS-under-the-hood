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

/**
 *  GLOBAL STATE MANAGMENT : WHY WHEN WHAT YOU WILL SELECT
 *
 *  SEE WE MOSTLY SAY THAT WE USE REDUX OR ANY GLOBAL STATE MANGEMENT SYSTEM TO SOLVE THE PROPS DRILING PROBLEM
 *  BUT MAN THING ABOUT THE CASE WHEN WE DON'T HAVE ANY RELEASE BETWEEN THEN THEN HOW YOU WILL TRANSFER DATA BETWEEN
 *  THEM DOES IT MAKE SENSE FOR YOU ?
 *
 */

/**
 *   OK HARESH CAN I CREATE MY OWN REDUX THEN ?
 *
 *  For communication between two components that don’t have a parent-child relationship, you can set up your own global
 *  event system.
 *
 *  Subscribe to events in componentDidMount(), unsubscribe in componentWillUnmount(), and call setState() when you receive an event
 *
 *   SO SIMPLY WITH JS LISTNER YOU CAN SUBSCRIBE AND UNSUBSCRIB EVENT BASED ON DIFFERENT SITUATION AND
 *   THEN YOU CAN SET THE STATE ACCORDING TO YOUR NEED
 *
 *  SEE ONE MORE INTERSTING THING IN REDUX NO MATTER HOW MAY SLICES OR REDUCER YOU CREATE IT BEHAVES AS SINGLE OBJECT
 *  AND THAT SINGLE OBJECT LISTEN TO THE CHANGES AND USE SETSTATE IN BACKGROUND OVERALL ITS JUST GAME OF SINGLE STORE
 *  THAT LISTENING THE EVENT CHANGES.
 *
 *  THIS IS ALSO I WAS NOT ABLE TO ANSWER IN INTERVIEW : MAN NOTHING HARD IN IT THINK LIKE ONE BIG OBJECT LISTENING YOUR
 *  CHANGES AND THEN USING SETSTATE IN BACKGROUND TO MAKE SURE THE ENITER APP IS UPDATED
 */

/**
 *  FEW IMPORTENT THING ABOUT REDUX :
 *
 *  (predictable) state container for our application (WHY PREDICTABLE STATE CONTAINER)
 *
 *  BECAUSE SEE IN REDUX YOU CAN NOT DIRECTLY MODIFY THE DATA YOU HAVE TO DISCPATCH THE ACTION FROM THAT
 *
 *  ALSO FOR ENTIRE APP WE HAVE ONLY ONE BIG IMMUTABLE OBJECT (IMMER DON'T FORGOT TO EXPLAIN THIS IF THE ASK)
 */

/**
 *  SO SEE ABOVE ARE THE FEW IMPORTENT POINT ABOUT REDUX NOW ABOUT REDUX TOOLKIT WE ALREADY HAVE GOOD IDEA
 *
 *  IMPORTENT WORDS THAT NEED TO BE REMEMBER :
 *
 *  createSlice
 *  initalData
 *  extraReducer
 *  thunk inbuild
 *  configureStore
 *  useSelector
 *  useDispatch
 */

/**
 *   State the core principles of Redux :
 *   Single source of truth:
 *   The state is read-only:
 *   Changes are made with pure functions:
 */

/**
 *  SEE REDUX IS ONE THING BUT ANOTHER QUESTION CAN BE COME LIKE ABOUT MIDDLEWARE
 *  SAGA AND THUNK
 *
 *  MAKE SURE THAT IN configure store as second parameter you have to pass applyMiddleWare(thunk/saga)
 */

/**
 *  https://daveceddia.com/what-is-a-thunk/ (READ ONE MORE TIME)
 *
 *  BUT TO BE REALLY I THING THUNK IS FOLLOWING BASICALLY CLOSURE STRUCTURE LIKE YOU HAVE MAIN FUNCTION AND INSIDE
 *  THAT YOU HAVE ANOTHER FUNCTION THAT RETURN THE API CALL AND
 *
 *  MI THING THAT WHY WE ARE DOING EVERYTING AT REDUCER LEVEL CAN'T WE DO IT AT COMPONTENT LEVEL WHILE WE DISPATCH THE
 *  ACTION AND WE DON'T DO THAT BECAUSE CHANGES ARE MADE WITH PURE FUNCTIONS
 */

/**
 * Well, this is exactly what redux-thunk does: it is a middleware that looks at
 * every action that passes through the system, and if it’s a function, it calls that function.
 * That’s all it does.
 */

/**
 * The only thing I left out of that little code snippet is that Redux will pass two arguments
 * to thunk functions: dispatch, so that they can dispatch new actions if they need to;
 * and getState, so they can access the current state. So you can do things like this:
 */

/***
 *  ALSO MOST IMPORTENT THING WE HAVE BELOW FAMOUS OPTION FOR GLOBAL STATE MANAGEMENT
 *
 *  REDUX
 *  MOBX
 *  FLUX
 *  RTK QUEAY
 *  REACT QUERY
 *  CONTEXT API
 *  GRAPH QL : (YEP THAT ALSO MANAGE GLOBAL STATE MANGEMENT useQuery and useMutation)
 *  useReducer : (THIS IS NEW HOOK WE NEED TO LEARN MORE WHEN WE TALK ABOUT HOOKS)
 */

/**
 *  HOW DO YOU MAKE RESPONSIVE UI AND SOME UI LIBRARY
 *
 *   1. HERE FIRST QUESTION I WILL ASK MY SELF IS WHAT IS PX AND WHAT ARE THE DIFFERNT THINGS THAT WE CAN USE APART FROM
 *
 *   NOW AFTER 5 YEARS I CAME TO KNOW THAT IN REACT NATIVE BY DEFAULT ITS DP NOT PX
 *
 *  DP : All dimensions in React Native are unitless, and represent density-independent pixels. (VVVMI) (DP IS SIMPLE
 *  ONE TYPE OF UNIT)
 *
 *  The Dimensions api returns the width and height of the device in dp.
 *
 *  In React Native, it's a common practice to use a number without specifying a unit for properties like
 *  fontSize. However, if you specifically want to specify the unit, you can use the fontSize property with
 *  the desired unit. For example, you can use "rem" (root em) or "em" units as well. Here's an example:
 *
 *  In React Native, using "px" (pixels) as a unit for styles is generally not recommended.  (VVMI)
 *
 *  ALL TILL NOW I UNDERSTOOD IS DON'T BE SMART JUST USE DEFAULT ONE DP AND THAT ALSO YOU DON'T NEED TO SPECIFY THE
 *  UNIT
 * 
 * 
     In React Native, using "px" (pixels) as a unit for styles is generally not recommended. React Native abstracts away 
     the differences in screen densities by using density-independent pixels (dp or points). When you use a numeric value 
     without a unit, React Native interprets it as dp or points and adjusts the size according to the screen 
     density of the device.

     If you explicitly use "px" as a unit, it may not scale appropriately across devices with different pixel densities. 
     Therefore, it's a good practice to stick with numeric values without specifying a unit, letting React Native handle
     the scaling for you.
 *
 */

/**  BEST POSSIBLE EXAMPLE 
 * 
 * DP (Density-independent Pixels): Think of DP as a special pen that helps you draw lines on the paper in a way that 
 * looks good no matter if the paper is smooth or a bit rough. So, when you use this pen, your drawings will be a good 
 * size and won't look too big or too small on different types of paper.

  PX (Pixels): Now, imagine you have a regular pen. If you use this pen to draw, the size of your drawing might 
  look different on smooth paper compared to rough paper. Pixels are like the dots on the paper, and using them might 
  make your drawing too big or too small on different types of paper.

   In React Native, we often use DP because it's like that special pen that helps our app look nice and the right
   size on all kinds of devices, just like your drawings look good on different types of paper!
 */

/**
 *  BEST THING KNOW I UNDERSTOOD WHY WE SHOULD NOT USE PX ATLEAST FOR MOBILE
 *
 *   If you use PX directly, it's like saying, "Make this exactly this many dots on the screen." The problem is,
 *   different devices have different numbers of dots (pixel densities), so your app might look too big on one
 *   device and too small on another.
 */

/***
 *  TILL KNOW I UNDERSTOOD THAT WHAT IS DIFFERNT BETWEEN PX AND DP AND WHY DP IS GREATE CHOISE FOR MOBILE
 *
 *  NOW NEXT QUESTION TELL ME HOW DO YOU MAKE YOUR APP COMPATIBLE WITH MOST OF DEVICE :
 *
 *  https://medium.com/simform-engineering/create-responsive-design-in-react-native-f84522a44365  (BEST)
 * 
 * 1. Dimensions
   2. Flexbox
   3. Percentage
   4. Aspect Ratio
   5. Platform
 *
 *
 */

// POINT 1 : USE DIMANTION :  THIS IS MI POINT TO UNDERSTAND HOW DIMANTION CAN HELP US
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 375; // YOUR FIGMA DESIGN HEIGHT
const guidelineBaseHeight = 812; // YOUR FIGMA DESIGN WIDTH

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export { horizontalScale, verticalScale, moderateScale };

/**
 * POINT 2 :  Flexbox ( It will automatically calculate the size of the device and adjust the component accordingly) (VVMI)
 *
 *  It is the default layout type in React Native. It will automatically calculate the size of the device
 *  and adjust the component accordingly. It works in the same way as in CSS on the web, but here the default flex-direction is 'column'. Some of the major properties that’ll do your work most of the time are flex, flex-direction, justify-content, align-items, and align-self.
 */

/**
 *  POINT 3 : Percentage : I THINK THIS IS ONE OF THE MOST UNDERRATED BUT AT SAME TIME MOST IMPORTENT POINT
 *
 *  RATHER THEN GIVING HARDCORE HEIGHT AND WIDTH TRY TO USE PERCENTAGE MOST OF THE TIME ONE QUESTION I HAVE DOES IT GOING
 *  TO IMPECT ON PERFORMANCE BECAUSE NOW BEFORE COMPONENT RENDER REACT NEED TO CALCULATE THE HEIGHT AND WIDTH OF THE COMPONENT
 */

/**
 *  POINT 4 : ASPECT RATIO : GREAT THING TO LEARN (MAKE SURE ITS ONLY FOR IMAGES)
 *
 *  An aspect ratio is — a proportional relationship between an image’s width and height.
 *
 * Setting the aspect ratio of the component to something (say 1/2) is basically telling the component
 * that it can grow or shrink as much as it wants according to the space available, but its width to height
 * ratio should always be 1/2. In other words, the height should always be twice the width.
 *
 *  1/2 => BHAI TU KITNE BI AGE BAD JA BUT MAKE SURE THAT MERI HEIGHT TERE SE DOUBLE HONI CHAIYE
 */

/**
 *  POINT 5 : Platform specific UI => YES DON'T IGORE THIS MAKE SURE TO DO STYLES BASE OF PLATFORM AND MAKE SURE TO
 *  CREATE DIFFERNT STYLES BASED ON PLATFORM IF NEEDED
 */

/**
 *  Dimention , Flexbox , percentage , aspect ratio for images mainly and one last and most importent one is use
 *  platform api have different style for different company
 *
 */

/***
 *  TOP 5 COMPONENT LIBRARY FOR REACT NATIVE
 *
 *  TWO THAT I USED IS
 *
 *  REACT-NATIVE ELEMENT
 *  NATIVE BASE
 */

/**
 *  ONE TOME WATCH ON NATIVE BASE COMPONENT   :  THESE THRE ARE LIKE BASE
 *
 *   Box:  In UI frameworks, a "Box" generally refers to a container or view that can hold other UI elements. It's a fundamental building block for organizing and structuring
 *   the layout of a user interface.
 *
 *  HStack : If you wants things in horizontal view
 *
 *  VStack : If you wants things in vertical view
 *
 */

/**
    TOP 10 USED COMPONENT OF  NATIVE BASE 
    
    Button:
    Card:
    Header:
    Footer:
    Form:
    List:
    Badge:
    Icon:
    Spinner:
    Thumbnail:

Allows you to display images in a circular or square thumbnail format, commonly used for user avatars or image previews.
 */

/**
 *  SEE ONE THING TO REMEMBER THAT FOR LOCAL STORAGE WE USE ASYNTORAGE
 *  IF YOU NEED TO STORE DATA ENCRYPDATED THEN USE react-native-mmkv
 */

/**
 *  LETS REMEMBER FEW THING ABOUT MMKV 
 * 
 * import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV({
  id: `user-${userId}-storage`,   // IF YOU WANTED TO HAVE MULTIPLE INSTANCE THATS WHY IT NEED ID
  path: `${USER_DIRECTORY}/storage`, // BY DEFAULT IT STORES IN 'document/mmkv'
  encryptionKey: 'hunter2'
})
 */

/**
 *  Set
storage.set('user.name', 'Marc')
storage.set('user.age', 21)
storage.set('is-mmkv-fast-asf', true)
Get
const username = storage.getString('user.name') // 'Marc'
const age = storage.getNumber('user.age') // 21
const isMmkvFastAsf = storage.getBoolean('is-mmkv-fast-asf') // true
Keys
// checking if a specific key exists
const hasUsername = storage.contains('user.name')

// getting all keys
const keys = storage.getAllKeys() // ['user.name', 'user.age', 'is-mmkv-fast-asf']

// delete a specific key + value
storage.delete('user.name')

// delete all keys
storage.clearAll()
 */

/**
 *  ALL METHODS ARE SAME ITS JUST DATA STORED IN ENCREPTED WAY THATS IT ALSO ONE MORE BENIFIT OF MMKV STORAGE THAT WE CAN
 *  CREATE MULTIPLE INSTANCE IF WE NEED
 */

/**
 *  SEE REAGARDING LOCAL STORAGE ASYNSTORAGE IS MORE THEN ENOUGH BUT STILL THERE ARE DIFFERNT
 *  OPTION LIKE
 *
 *   REALM
 *   WATERMELONDB : WE WILL LEARN ONLY 30 MIN ABOUT IT https://www.youtube.com/watch?v=abq6zxurflI
 *   SQLITE
 *
 */


/***
 *  OBSERVABEL
 *  10000 RECORD WITHIN SECONDS
 *  WORK WITH REACT AND REACT NATIVE
 *  SqlAdapater 
 *  schema
 *  Database 
 *  migration
 *  200 ms 
 *  Realy in native
 *  Depend on Native
 *  Adapter
 *  .observe() // ITS OBSERVABLE
 *  OFFLINE FIRST APP
 */

https://www.youtube.com/watch?v=bcTF9bVVqKg // MUST WATCH THIS 


/**
 *  SIMPLE EXAMPLE FOR WATERMALET DB 
 */

class Post extends Model {
  @field('name') name
  @field('body') body
  @children('comments') comments
}

class Comment extends Model {
  @field('body') body
  @field('author') author
}

/**
 *  FIRST PART IS SCHEM MIGRATION SQLIADAPTER AND ALL
 *  BUT IMPORTENT PART IS THAT SUPPOSE YOU WANT TO SAVE SOME DATA THEN MUST CREATE MODELS FOR THAT MUST MEANS MUST
 */

/**
 *   YOU HAVE TO USE withObservable thing to make it reactive make sure by default its not  reactive
 */
// This is how you make your app reactive! ✨
const enhance = withObservables(['comment'], ({ comment }) => ({
  comment,
}))
const EnhancedComment = enhance(Comment)

/**
 *  WaterMalen DB
 *  Models
 *  Schema 
 *  Migration
 *  Cratle modles 
 *  To Make it reactive make sure you use the withObservable
 *  Now once the database is created then make sure that you use get , add ,update , delete , create  , markAsDeleted ,
 *  destroyParanatly 
 */


/**
 *  HOW TO APPLY FONTS : https://www.youtube.com/watch?v=IY5OBeL9LNE 
 * 
 *  asstes/fonts all ttf files goes here ROBOTO
 * 
 *  IN REACT-NATIVE.CONIG
 *  
 *  export.modules = {
 *   project : {
 *     android : {},
 *     ios : {}
 *    },
 *    assets : ['./assets/font']
 *  }
 * 
 *   ONLY THREE SIMPLE STEPS 
 *   PUT ALL FONTS NO ASSETS/FONT FOLDER
 *   CREATE REACT NATIVE CONFIG FILE AND EXPORT ASSETS FONT MODULES THERE
 *   MI STEPS IS RUN npx react-native assets COMMOND TO RUN THE LINK THE ASSET FOLDER
 *   USE FONFAMILY FO APPLY FONT 
 */

/**
 *  HOW CAN I MAKE FLATLIST FAST : 
 * 
 *  IF YOUR LIST ITEM HEIGHT IS FIX THEN MUST USE  getItemLayout 
 *  getItemLayout={(data, index) => (
    {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  )}
    
  maxToRenderPerBatch and windowSize : 
maxToRenderPerBatch limits the number of items rendered per batch, reducing the load. 
windowSize defines the number of "pages" of items rendered in either direction from the visible content.
   

initialNumToRender : how many items you want to load initially

 Avoid Inline Functions and Variables in Render

 Passing inline functions or variables to a FlatList or its items can cause unnecessary re-renders 
 because every render creates a new function or object, causing the props to change.
 */


 /***
  *  getItemLayout BEST
  *  maxRenderPerBetch
  *  Avoid using inline function 
  *  window size
  *  initailNumberOfRender
  */


 /**
  *  getItemLayout 
  *  maxRenderPerBetch
  *  windowSize
  *  initalNumberOfRender
  *  Avoid inline function
  */

 /**
  *  THIS IS THE MOST IMPORTENT THING THAT WE NEED TO REMEMBER FOR 
  *  FLATLIST PAGGINANTION
  * 
  *  onEndReached and onEndReachedThresholed
  */



 /**
  *  dimantion
  *  aspect ratio
  *  Platform specific api
  *  flexbox
  *  percentage , percentage percentage 
  *  
  */

 /**
  *  getItemLayout
  *  maxRenderPerBetch
  *  windowSize
  *  initalRenderNumber
  *  AVOID UNNESSERY INLINE RENDERING
  */


 /**
  *   AVOID REACT COMPONENT RENDERING 
  * 
  *   1. Memoization using useMemo() and UseCallback() Hooks
  *   1. Replacing useState() with useRef() hook.
  *   Avoid passing unnecessary props: Be mindful of the props you pass to child components. 
  *   If a child component does not rely on a prop, avoid passing it to prevent unnecessary re-renders in the child component.
  * 
  */

 /**
  *  useRef rather then useState 
  *  useCallBack and useMemo
  *  Avoid unnessasery props
  */



 /**
  *  getItemLayout
  *  maxRenderPerBetch
  *  initalRender
  *  WindowSize
  *  Avoid inline rendering 
  */

 /**
  *  onEndReached
  *  onEndReachedThreshold
  */

 /**
  *  useMemo and useCallback
  *  Be mindful with props 
  *  useRef insted of useState whenver possible (Learn more about it)
  */

 /**
  *  Assets/fonts
  *  react native config export modules 
  *  npx react-native assets (command to like)
  *  fontfamily
  */

 /**
  *  watemaled DB
  *  
  *  migration , scheam , SQLiteAdapter from that you create instance of Database
  *  
  *  Create modles for every tables and simple use Create , Update delete
  *  and all this methods
  */