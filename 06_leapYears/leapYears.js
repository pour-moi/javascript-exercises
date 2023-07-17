const leapYears = function(year) {
     if(year % 4 === 0){
        if(year % 100 !== 0 || year % 400 === 0){
            console.log("It is a leap year");
        }
     } 
};

// Do not edit below this line
module.exports = leapYears;
