/*Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! */

function pigIt(str) {
    let splitStr = str.split(" ");
    let newString = '';

    for (i = 0; i < splitStr.length; i++) {
        for (j = 1; j < splitStr[i].length; j++) {
            newString += splitStr[i][j]
        }
        newString += splitStr[i][0] + ' ';
    }

    let final = newString.split(' ').map(i => i.replace(/[^A-Za-z0-9\s]/g, "").replace(/\s{2,}/g, " ") ? i + 'ay' : i).join(' ').trim()
    return final;
}

//Sample

function pigIt(str){
    return str.split(" ").map( (item) => `${item.substr(1)}${item[0]}ay` ).join(" ")
  }