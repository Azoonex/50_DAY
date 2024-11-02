var d = document.getElementById("container");
function RadomColorHex() {
    var n = (Math.random() * 0xffff * 100000).toString(16);
    return "#" + n.slice(0, 6);
}
d.style.background = RadomColorHex();
