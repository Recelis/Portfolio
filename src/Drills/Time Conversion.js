let s = "07:05:45PM";

function timeConversion(s) {
    // get hour
    let hour = s.slice(0,2);
    // get PM OR AM
    let AP = s[8];
    // modify if need be
    if (AP === "P"){
        hour = parseInt(hour);
        hour += 12;
        hour = hour.toString();
    } 
    return hour +":"+ s.slice(3,8);
    
}

console.log(timeConversion(s));