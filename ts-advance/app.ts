function Component(constructor: Function) {
  constructor.prototype.uniqId = Date.now();
  constructor.prototype.insertInDom = function () {
    console.log("inserting in Component in the Dom");
  };
}
@Component
class ProfileComponent {}
