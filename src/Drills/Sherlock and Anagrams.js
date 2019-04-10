let s = "abba";

function sherlockAndAnagrams(s) {
      for (let ii =0; ii < s.length; ii++){ // loop through ignore string that is whole length
        // create local copy of s
        let string = s.splice(ii);
        let anagram = s.slice(0, ii+1);
        console.log(string);
        // loop through until no more anagrams
        let index = s.indexOf(string);
        console.log(index);
      }  
}

sherlockAndAnagrams(s);