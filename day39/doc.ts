const d = document.getElementById("container")! as HTMLDivElement;

function RadomColorHex() {
    let n = (Math.random() * 0xffff * 100000).toString(16);
    return "#" + n.slice(0, 6);
}

d.style.background = RadomColorHex()
