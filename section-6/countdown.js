function countdown(time) {
    setInterval(function() {
        time--;
        if(time === 0) {
            console.log("Ring Ring ring!!!");
            clearInterval(this);
        } else {
            console.log("Timer: " + time);
        }
    }, 1000);
}

countdown(5);