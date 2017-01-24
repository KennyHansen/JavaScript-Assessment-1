//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;

function sum() {
  var total = 0
  for (var i = 0; i < arguments.length; i++) {
    var num = Number(arguments[i])
    if (num) total+= num;
  }
  console.log(total)
}

sum(num10, string8, one);

//2. write a loop that will log only numbers divisible by 3 between 20 - 100
function fizzBuzz() {
  console.log('FizzBuzz!!')
  for (var i = 20; i < 100; i++) {
    var num = i
    if (num % 3 == 0) {
      console.log(num)
    }
  }
}

fizzBuzz()


//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 


function findAverage(scoreList) {
  var average = 0
  for (var i = 0; i < scoreList.length; i++) {
    average+= scoreList[i]
  }
  average = average / scoreList.length
  console.log(average)
}

findAverage(scores);