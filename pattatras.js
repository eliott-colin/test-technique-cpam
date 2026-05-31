function pattatras(n) {
    let res = "";
    for (let i = 1; i < n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            res += i + ": Pattatras<br>";
        } else if (i % 3 === 0) {
            res += i + ": Patte<br>";
        } else if (i % 5 === 0) {
            res += i + ": Tatras<br>";
        }else {
            res += i + "<br>";
        }
    }
    return res;
}

const startButton = document.getElementById("startButton");
const resultDiv = document.getElementById("result");

startButton.addEventListener("click", () => {
    let result = "";
    result += pattatras(6457);
    resultDiv.innerHTML = result;
});