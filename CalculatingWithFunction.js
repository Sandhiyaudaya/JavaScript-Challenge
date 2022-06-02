/*This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three())); */

/*Explanation*/

/*The program is executed, the interpreter will first try to find the value of one(). Since the default 
value of f is set to None, if block will be interpreted in the one(f) function's block, and 1 will be the 
returning value.
Now, the interpreter will have to determine the value of plus(1). So, in the scope of plus(y) function, y=1.The function will return another function f(x) such that f(x) = x+y = x+1. Hence, f is no more None. Till now, everything is stored in the memory.

Presently, the interpreter has to determine the value of two(f(x)). Since f is now no more set to None, within the function two(f), else block will be executed, so the returning value is f(2), thus x=2 in this function's scope.
So, the final returning value is f(2) = 2+1 = 3. */

function expression(number, operator) {
    if (!operator) {
        return number;
    }
    return operator(number)
}

function zero(operator) { return (expression(0, operator)) }
function one(operator) { return (expression(1, operator)) }
function two(operator) { return (expression(2, operator)) }
function three(operator) { return (expression(3, operator)) }
function four(operator) { return (expression(4, operator)) }
function five(operator) { return (expression(5, operator)) }
function six(operator) { return (expression(6, operator)) }
function seven(operator) { return (expression(7, operator)) }
function eight(operator) { return (expression(8, operator)) }
function nine(operator) { return (expression(9, operator)) }

function plus(x) {
    return function (y) {
        return y + x;
    }
}
function minus(x) {
    return function (y) {
        return y - x;
    }
}
function times(x) {
    return function (y) {
        return y * x;
    }
}
function dividedBy(x) {
    return function (y) {
        return Math.floor(y / x);
    }
}