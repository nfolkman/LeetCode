let count = 0

function countRecurse(){
  count++

  if(count <=50){
    if(count % 5 === 0 && count % 3 === 0) console.log(count,'FizzBuzz')
    else if(count % 3 === 0) console.log(count, 'Fizz')
    else if(count % 5 === 0) console.log(count,'Buzz')
    else console.log(count)
  }

  return countRecurse()
}

console.log(countRecurse())
