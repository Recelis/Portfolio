let magazine = ["two", "times", "three", "is", "not", "four"];
let note = ["two", "times", "two", "is", "four"];



function checkMagazine(magazine, note) {
    for (let ii = 0; ii < note.length; ii++) {
        let word = note[ii];
        // check note exists in magaine
        if (!magazine.includes(word)) {
            console.log("No");
            return;
        }
        else {
            // splice word from magazine
            magazine.splice(magazine.indexOf(word), 1);
        }
    }
    console.log("Yes");
}
console.log(checkMagazine(magazine,note));
//9:09