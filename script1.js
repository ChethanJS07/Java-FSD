// console.log("Hello world");
// // //Single line comment
// // /* Multi line 
// // comment */
// console.log("Comments are not executed");

// //Variable can be defined in 3 ways : let, const, *var(old way of declaring);
// let myvar = 32;
// let x = 45;
// y = "hello";
// console.log(x+myvar);
// p = true;
// q = false;
// arr = [1,2,3];
// myObj = {'key1':1,'key2':2,'key3':3};
// console.log(q,p);
// console.log(4-'3');
// console.log(Boolean({}));

// // Logical Operators
// //AND - &&, OR - ||, NOT - !
// const boolVal = []&&"hello"&&{}; // Returns the first false value, else it returns the last value;
// console.log(boolVal); 
// const boolVal2 = undefined || 1 || null;
// console.log(boolVal2);
// console.log(typeof (3*'3'));

// function functionName(p1,p2)
// {
//   console.log(p1+p2); //Logic of the function
//   return;
// }

// functionName(3,4); //Calling the function

// function add(a,b)
// {
//   return a+b;
// }

// console.log(add(2,3));

// function areaOfCircle(r=1)
// {
//   return Math.round(Math.PI*r*r);
// }

// console.log(areaOfCircle()); //Calling the function

//Call Back Function
// function fetchData(callback)
// {
//   setTimeout(()=>{
//     callback("Data Fetched")
//   },2000);
// }

// function displayData(data)
// {
//   console.log(data);
// }

// fetchData(displayData);


// //Arrow function
// const add = (a,b)=>a+b;
// console.log(add(1,2));

// const fetchDataArrow = (callback)=>{
//   callback("Data fetched with arrow function");
// }

// const displayData = (data)=>{
//   console.log(data);
// }

// fetchDataArrow(displayData);

//Variable Scopes
//Global, local, block

// var globalVar = "I'm Global";

// function localScope()
// {
//   var localVar = "I'm Local";
//   console.log(localVar);
//   console.log(globalVar);
// }

// localScope();
// console.log(globalVar);
// // console.log(localVar);
// if(true)
// {
//   //Block Scope
//   let blockVar = "I'm Block-Scoped";
//   console.log(blockVar);
// }

// // console.log(blockVar);

// //Hoisting
// console.log(name);
// var name = "Chethan";

// var a; //Declaration
// a = "Hi"; //Initialization

// //String functions
// let str = "  Hello, JavaScript!  ";
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.includes("Java"));
// console.log(str.startsWith("  Hello"));
// console.log(str.endsWith("!  "));
// console.log(str.indexOf("l"));
// console.log(str.lastIndexOf("l"));
// console.log(str.slice(2,7));
// console.log(str.substring(3));
// console.log(str.split(" "));
// console.log(str.replace("JavaScript","Python"));
// console.log(str.trim());
// console.log(str.trimEnd());
// console.log(str.trimStart());

// //Objects
// let obj = {name: "John", age: 30, city: "New York"};

// //Copying Object directly
// let copyObj = obj;
// console.log(copyObj);

// //Copying Object with assign
// let assignObj = Object.assign({},obj);
// console.log(assignObj);

// //Copying Object with spread Operator
// let spreadObj = {...obj};
// console.log(spreadObj);

// //Modifying direct Objects
// copyObj.name = "Chethan";
// console.log(copyObj);
// console.log(obj);

// //Modifying Assign Objects
// assignObj.age = 19;
// console.log(assignObj);
// console.log(obj);

// //Modifying Spread Objects
// spreadObj.city = "Vellore";
// console.log(spreadObj);
// console.log(obj);

// //Object Functions
// let obj = {name: "John", age: 30, city: "New York"};
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.city);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// let newObj = Object.assign({country: "USA"},obj);
// console.log(newObj);
// console.log(obj.hasOwnProperty("age"));
// console.log(obj.hasOwnProperty("gender"));

// //Arrays
// let arr = [1,2,3,4,5];

// //Copying Arrays Directly
// let copyArr = arr;
// console.log("copyArr :",copyArr);

// //Copying Array with slice
// let sliceArr = arr.slice();
// console.log("sliceArr :",sliceArr);

// //Copying Array with spread operator
// let spreadArr = [...arr];
// console.log("spreadArr :",spreadArr);


// //Modifying Arrays
// copyArr[0] = 6;
// console.log("copyArr :",copyArr);
// console.log("arr :",arr);

// sliceArr[1]=7;
// console.log("sliceArr :",sliceArr);
// console.log("arr :",arr);

// spreadArr[2]=8;
// console.log("spreadArr :",spreadArr);
// console.log("arr :",arr);

// //Array Fucntions
// let arr = [1,2,3,4,5];
// console.log(arr.length);
// arr.push(6); // Adds value to the end of the array
// console.log(arr);
// arr.pop(); // Removes the last value of the array
// console.log(arr);
// arr.shift(); //Removes the first value of the array
// console.log(arr);
// arr.unshift(1); //Adds the value to the start of the array
// console.log(arr);
// console.log(arr.indexOf(3)); // Returns the index of the required value
// let newArr = arr.slice(1,3); // Creates a new sliced array
// console.log(newArr);
// arr.splice(2,1); //Removes the specified number of elements from the specified index
// console.log(arr); 
// let mappedArr = arr.map(x => x*2); // Returns a new array with the modified values
// console.log(mappedArr); 
// let filterArr = arr.filter(x=>x>2); // Returns a new array with the filtered values
// console.log(filterArr); 
// let reducedArr = arr.reduce((acc,curr) => acc+curr,0); // Returns the sum of all the elements in the array
// console.log(reducedArr);  
// arr.forEach(x => console.log(x)); // Prints the array in a single line
// arr.reverse(); // Reverses the array
// console.log(arr);
// arr.sort(); // Sorts the array in ascending order
// console.log(arr);