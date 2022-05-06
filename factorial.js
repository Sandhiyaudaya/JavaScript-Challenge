//Find the Factorial of a number

function FirstFactorial(num) { 
    var fact = 1;
    for(i=1; i<= num; i++){
      fact *=i;
    }
    
    return fact; 
  
  }     
 
  console.log(FirstFactorial(readline()));