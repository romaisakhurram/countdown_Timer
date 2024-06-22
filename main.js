#! /usr/bin/env node
import { differenceInSeconds } from "date-fns";
function* countdownTimer(second) {
    while (second > 0) {
        yield second;
        second--;
    }
}
let timerIterator = countdownTimer(20);
function displayCountdown() {
    let result = timerIterator.next();
    if (!result.done) {
        const now = new Date();
        const countdownTime = new Date(now.getTime() + (result.value * 1000));
        const remaingSecond = differenceInSeconds(countdownTime, now);
        console.log(`Releasing Seconds : ${remaingSecond}`);
        setTimeout(displayCountdown, 1000); //1second is equalto 1000ms 
    }
    else {
        console.log("Count Down Complete");
    }
}
//import
displayCountdown();
