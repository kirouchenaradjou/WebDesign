function divide()
{

var dividend:number,divisor:number,remainder:number,quotient:number;
 dividend= parseInt((<HTMLInputElement>document.getElementById('firstNumber')).value);
 divisor = parseInt((<HTMLInputElement>document.getElementById('secondNumber')).value);
 remainder = dividend%divisor;
 quotient = Math.floor(dividend/divisor);
(document.getElementById("result").innerHTML) = quotient.toString();
document.getElementById("remainder").innerHTML = remainder.toString();
}