
for (let i = 1; i < 6457; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Pattatras");
    } else if (i % 3 === 0) {
        console.log("Patte");
    } else if (i % 5 === 0) {
        console.log("Tatras");
    }else {
        console.log(i);
    }
}