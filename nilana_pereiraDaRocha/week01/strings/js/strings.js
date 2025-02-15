function DrEvil(amount) {
    if (1000000 === amount) {
        return amount + "dollars (pinky)";
    } else {
        return amount + "dollars ";

    }
}
// Create a function called mixUp. It should take in two strings, and return the concatenation of 
//the two strings (separated by a space) slicing out and swapping the first 2 characters of each. 
//You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', pod'): 'pox mid'
// mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

// take first two alphabets of the second word and join to the last alphabet of the first word
// then first two alphabets of the first word and join to the last alphabet of the second word

//.substrings or .slice

const mixUp = function (first, second) {
    if (first.length > 2 && second.length > 2) {
        const result = second.slice(0, 2) + first.slice(2) + " " + first.slice(0, 2) + second.slice(2);
        console.log(result);
    } else {
        console.log(`${first} ${second}`);
    }
};
mixUp('mix', 'pad');
// Create a function called fixStart. It should take a single argument, a string, 
// and return a version where all occurences of its first character have been replaced with '*', 
// except for the first character itself. You can assume that the string is at least one character long. 
// For example:

// fixStart('babble'): 'ba**le'


const fixStart = function (word) {
    let editedWord = word[0];
    for (let i = 1; i < word.length; i++) {
        if (word[i] === word[0]) {
            editedWord += '*';
        } else {
            editedWord += word[i];
        }
    }
    console.log(editedWord)
};
//console.log('word ', );

fixStart('babble');


// Create a function called verbing. It should take a single argument, a string. If its length is at 
// least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should 
// add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

//   verbing('swim'): 'swimming'okay
//   verbing('swimming'): 'swimmingly'okay 
//   verbing('go'): 'go' okay

function verbing(play) {
    if (play.length < 3) {
        return play;
    }
    if (play.slice(- 3) == 'ing') {
        return play + 'ly';
    } else {
        return play + 'ing';

    }
}

// Not Bad
// Create a function called notBad that takes a single argument, a string.
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...
// 'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:

//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'


function notBad(feel) {
    let first = feel.replace('not that bad', 'good');
    return first.replace('not so bad', 'good');
}