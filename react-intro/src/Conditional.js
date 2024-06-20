import App from './App';


export function Conditional(props)
{
  const myNumber = props.newNumber;
  // if(myNumber>10)
  // {
  //   return(
  //     <>
  //       Number {myNumber} is greater than 10
  //     </>
  //   )
  // }
  // else
  // {
  //   return(
  //     <>
  //       Number {myNumber} is less than or equal to 10
  //     </>
  //   )
  // }

  const appData = {
    firstNumber : 50,
    secondNumber : 70
  }

  return(
    <>
      {
        myNumber>10?
        <h1>
          Number {myNumber} is greater than 10
        </h1>
        :
        <h1>
          Number {myNumber} is less than or equal to 10
        </h1>
      }
      <App 
        numberData ={appData}
      />
    </>
  ) //Ternaray Operator : (condition)?(statement if true):(statement if false)
}