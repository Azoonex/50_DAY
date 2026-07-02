const inputArea = document.querySelector("#area");
const tagDiv = document.querySelector(".tag");
const headTag = document.getElementsByTagName("h3")[0];
const container = document.getElementsByClassName("container")[0];

console.log(container)

const spanTag = document.createElement("span");
spanTag.textContent = "Hello bro"
headTag.append(spanTag)
headTag.blur("Mytext")
tagDiv.after = "make";


const nodeList = document.body.childNodes;
let text =""
for(let x =0 ;x < nodeList.length;x++){
    text += nodeList[x].nodeName + "<br />"
}

headTag.innerHTML = text

console.log(nodeList);


console.log(container.childNodes.length)


console.log(container.childElementCount)
console.log(container.children.length)

container.classList.toggle("bg_color")



