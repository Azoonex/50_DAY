const inputArea = document.querySelector("#area");
const tagDiv = document.querySelector(".tag");
const headTag = document.getElementsByTagName("h3")[0];
const container = document.getElementsByClassName("container")[0];
const listMyFun = document.getElementById("list");
const listTwo = document.getElementById("listTwo");

listMyFun.firstElementChild.remove();

const node = listMyFun.firstChild.cloneNode(true);
listTwo.append(node);
console.log("sf", node);
listTwo.appendChild(node);

console.log(container);

console.log("client height", tagDiv.clientWidth);
const spanTag = document.createElement("span");
spanTag.textContent = "Hello bro";
headTag.append(spanTag);
headTag.blur("Mytext");
tagDiv.after = "make";

const nodeList = document.body.childNodes;
let text = "";
for (let x = 0; x < nodeList.length; x++) {
  text += nodeList[x].nodeName + "<br />";
}

headTag.innerHTML = text;

console.log(nodeList);

console.log(container.childNodes.length);

console.log(container.childElementCount);
console.log(container.children.length);

console.log(document.body.children);

const template = document.querySelector("#card-template");


const clone = template.content.cloneNode(true);
clone.querySelector("h3").textContent = "Ali";
clone.querySelector("p").textContent = "Developer";

document.body.appendChild(clone);