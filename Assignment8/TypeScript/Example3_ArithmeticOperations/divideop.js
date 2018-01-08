function divide() {
    var dividend, divisor, remainder, quotient;
    dividend = parseInt(document.getElementById('firstNumber').value);
    divisor = parseInt(document.getElementById('secondNumber').value);
    remainder = dividend % divisor;
    quotient = Math.floor(dividend / divisor);
    (document.getElementById("result").innerHTML) = quotient.toString();
    document.getElementById("remainder").innerHTML = remainder.toString();
}
