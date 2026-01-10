console.log("make item");


function Component(constructor:Function){
    console.log("constructor");
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertToDom = function (){
        console.log("Insert to Dom in the Dom");
    }
}

// to way smilier

// class Component {
//
// }
// extends Component

// Decorator factor
function Component2(value:number){
    return function(constructor:Function){
        console.log("Constructor");
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.options = value
    }
}

function Pipe(constructor:Function){
    console.log("Pipe");
    constructor.prototype.pip = true
}

@Component2(1)
@Pipe
class Proformance {

}