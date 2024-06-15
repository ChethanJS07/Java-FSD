for (let number = 1; number <= 50; number++ ) {
  if (number % 3 === 0 && number % 5 === 0) {
      console.log('FizzBuzz')
  } else if (number % 5 === 0) {
      console.log('Buzz')
  } else if (number % 3 === 0) {
      console.log('Fizz')
  } else {
      console.log(number)
  }
}
// check for the number if its an integer
