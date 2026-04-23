var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var AuthService = /** @class */ (function () {
    function AuthService(token, name) {
        this.token = token;
        this.name = name;
    }
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.logout = function () {
        this.token = "";
    };
    AuthService.prototype.changeName = function () {
        this.name = "dfjk";
    };
    return AuthService;
}());
var token = new AuthService("randomToken", "name");
console.log(token.logout());
// Public
// Private
// readonly
// protected
// method
// setters and getters
var FormFiled = /** @class */ (function () {
    function FormFiled(_value) {
        this._value = "";
        this._value = _value;
    }
    Object.defineProperty(FormFiled.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            if (val.length > 10) {
                throw new Error("Too long");
            }
            this._value = val;
        },
        enumerable: false,
        configurable: true
    });
    return FormFiled;
}());
var filed = new FormFiled("amirabas");
console.log((filed.value = "34"));
//  Create the value of NOR of two given booleans
function logicNor(x, y) {
    // method 1
    // const norX = Number(x);
    // const norY = Number(y);
    // return Boolean(norX * norY);
    // method two
    return !x && !y;
}
console.log(logicNor(true, true));
