var Greetings = /** @class */ (function () {
    function Greetings() {
    }
    Greetings.prototype.greet = function () {
        console.log("Hello World!!!");
    };
    return Greetings;
}());
var obj = new Greetings();
obj.greet();
