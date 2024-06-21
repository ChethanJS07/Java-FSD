try
{
  
  const arr = [1,2,3,4,'Five',6];
  arr.forEach
  ((item)=>
    {
      if(!Number.isInteger(item))
      {
        throw new Error('Array has non Integer Items');
      }
      console.log(item);
    }
  )
console.log('Array is valid');
}
catch(error) //error is an object
{
  if(error.name === 'TypeError')
  {
    throw new Error('There is a Type Error.');
  }
  else if(error.name==='ReferenceError')
  {
    throw new Error('Error: There are some undefined variables');
  }
  else
  {
    throw new Error('Error: ','Potentially harmful error');
  }
}