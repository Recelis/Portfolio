let s = "12:05:45AM";

function timeConversion(s) {
    // get hour
    let hour = s.slice(0,2);
    // get PM OR AM
    let AP = s[8];
    // modify if need be
    if (AP === "P"){
        hour = parseInt(hour);
        if (hour !== 12) hour += 12; // edge case 12:00AM
        hour = hour.toString();
    } 
    if (AP === "A"){
        if (hour === "12") hour = "00"; // edge case 12:00AM
    }
    
    return hour +":"+ s.slice(3,8);
    
}

console.log(timeConversion(s));