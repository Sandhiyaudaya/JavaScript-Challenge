function LongestWord(sen) {

    var sp = sen.replace(/[^\w ]/g, "");

    var longWord = sp.split(' ').reduce(function (longest, currentword) {
        return currentword.length > longest.length ? currentword : longest
    }, "");

    return longWord;

}


console.log(LongestWord(readline()));