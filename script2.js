// //settimeout and setinterval
// console.log('Start');
// setTimeout(()=>{
//   console.log('This is a Timeout');
// },5000); //Time in ms. 1s = 1000 ms.
// // This is asynchronous, means it goes to a different thread
// console.log('End');

setInterval(()=>{
  try
  {
    console.log('Server is up and running');
  }
  catch(error)
  {
    throw new Error('Server is down');
  }
}, 2000);