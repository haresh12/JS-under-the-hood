// https://www.youtube.com/watch?v=yLrNwo4wXOs
//https://www.youtube.com/watch?v=0EOm8qv3z9s
/// POLIFIL

/// WITH BABEL YOU CAN EVEN USE STAGE 1 PROPOSEL 


// Transform syntax
// Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js)
// Source code transformations (codemods)


// Babel can convert JSX syntax! Check out our React preset to get started. 


// module.exports = {
//     presets: [
//       'module:metro-react-native-babel-preset'
//     ],
//     plugins: [
//       ['@babel/plugin-proposal-decorators', { legacy: true }]
//     ]
//   };
  
// Optimizations: The preset includes various Babel plugins and settings for optimizing your code. 
//This can include dead code elimination, minification, and other performance improvements that help 
//reduce the size of your bundled JavaScript files, making your app faster and more efficient.



/**
 *  Babel is a JavaScript compiler. (WHY DO WE NEED IT IF WE ALREADY HAVE COMPLIER)
 *  first at most imortent job of babel is to convert you es6 code into older version of code like es5 (ES6 300 + features)
 *  second it also helps with React part where it converts your JSX into React object mainly we know it as React.createElements()
 *  third it will help us with types also such as preset flow and typescript
 *  Fourth and good one that you can use different javascript features that are not even official and features that are on stage1
 *  or stage2
 */






/**
 * In most cases, React Native will use Hermes, an open-source JavaScript engine optimized for React Native. If Hermes is disabled, 
 * React Native will use JavaScriptCore, the JavaScript engine that powers Safari
 */

/**
 * Compatibility 
 * Latest syntax:
 * Debugging (Don't know how it does)
 * Customization (This one is best one there are many pluggins available that we can use and then we can have unreleased feature of javascript)
 * Type annotations 
 * Spec Compliant
 */


//  https://babeljs.io/docs/babel-plugin-proposal-decorators // because of babel only we are able to use stage 1 js features

//  https://github.com/tc39/proposal-decorators // THIS IS IN STAGE 3



/// https://caniuse.com/?search=Decorators (BEST WHY TO CHECK IF SPECIFIC FEATURE IS SUPPORTED OR NOT)


//  Example
// if(!Number.isNaN){
//     Number.isNaN = (x) =>{
//       return x !== x
//     }
// }