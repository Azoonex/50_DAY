function Component(constructor: Function) {
  console.log("Component Decorator called");
  constructor.prototype.uniqId = 2;
  constructor.prototype.insertInDom = () => {
    console.log("inserting the component in the dom");
  };
}

function Pipe(constructor: Function) {
  console.log("Pipe decorator Called");
  constructor.prototype.pipe = true;
}

@Component
@Pipe
class Person {}

function Log(target: any, methodName: string, descriptor: PropertyDecorator) {
  let original = descriptor.value
  escriptor.value = function () {
    console.log("New Implementation");
  };
}

class PersonItems {
  @Log
  say(message: string) {
    console.log("Person says" + message);
  }
}
