

 parseInt("42",10) === parseFloat("42"); //

 const h = typeof whoAmI || 100
 console.log(parseInt(h,10));














































// SYMBOL IS PRIMITIVE TYPE WE CAN NOT USE NEW KEYWORD WITH IT 

// const sym1 = Symbol('HARESH');
// const sym2 = Symbol('HARESH');

// console.log(sym1 === sym2)


// let obj = {};

// const k1 = Symbol('identifier');
// const k2 = Symbol('identifier');

// obj[k1] = 'Haresh';
// obj[k2] = 'Hitesh';
// obj['name'] = 'Ravish';

// console.log(obj[k1])
// console.log(obj[k2])

// // obj.k1 you can not do this as it will tries to find key with k1 identifier
// // obj.k2 you can not do this as it will tries to find key with k1 identifier


// console.log()
// // THIS IS WEIRD PART THAT IN FOR IN LOOP SYMBOL GETTING IGNORED
// for(key in obj){
//     console.log("KEY HERE",key)
// }

// // AGAIN IN JSON.STRINGIFY ITS GETTING IGONORED Object to json conversation
// console.log(JSON.stringify(obj))


