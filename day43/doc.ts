let myPromise = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    myResolve("I love You !!");
  }, 3000);
});

setTimeout(function () {
  myFunction("I love You !!!");
}, 3000);

async function myFunction() {
  return "Hello";
}

function myFunction(value) {
  console.log(value);
}

myPromise.then((value) => {
  console.log(value);
});

async function myDisplay() {
  let myPromise = new Promise(function (resolve, reject) {
    resolve("I love You !!");
  });
  console.log(await myPromise);
}

myDisplay();
