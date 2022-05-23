/*Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing second 
character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'] */

function solution(str) {
    let arr = [];
    let n = 2
    for (i = 0; i < str.length; i += n) {
        arr.push(str.slice(i, i + n))
    }

    arr = arr.map(item => item.length < 2 ? item + '_' : item)

    return arr
}