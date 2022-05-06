// Sum the smallest number from the array

function sumTwoSmallestNumbers(numbers) {

    numbers.sort(function (a, b) { return (a - b) });

    return numbers[0] + numbers[1];

}

sumTwoSmallestNumbers([1,7,40,9,2,100,255]);

//Output: 3(1+2)

//Single line code

var sumTwoSmallestNumbers = (numbers) => numbers.sort((a,b)=> a-b).slice(0, 2).reduce((a,b)=> a+b);