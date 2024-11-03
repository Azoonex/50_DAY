var container = document.getElementById("container");
var btnPlural = document.getElementById("plural");
var btnMinus = document.getElementById("minus");
var btnMultiplaction = document.getElementById("multiplaction");
var division = document.getElementById("divistion");
var spanDemo = document.getElementsByTagName("span")[0];
var valueSeconde = null;
var valueFrist = null;
var morVlaue = null;
function handleControlerClick(nameButton, MathSituation) {
    nameButton.onclick = function () {
        if (!valueFrist || !valueSeconde) {
            valueFrist = prompt("first value ?");
            valueSeconde = prompt("second value ?");
            if (valueFrist || valueSeconde) {
                spanDemo.innerHTML = String("".concat(Number(valueFrist), "  ").concat(MathSituation, "  ").concat(Number(valueSeconde), "  ").concat(MathSituation, "  ").concat(Number(morVlaue)));
            }
            return;
        }
        else if (valueFrist || valueSeconde) {
            morVlaue = prompt("more Amount ? ");
            spanDemo.innerHTML = String("".concat(Number(valueFrist), "  ").concat(MathSituation, "  ").concat(Number(valueSeconde), "  ").concat(MathSituation, "  ").concat(Number(morVlaue)));
        }
    };
}
handleControlerClick(btnPlural, "+");
handleControlerClick(btnMinus, "-");
handleControlerClick(btnMultiplaction, "*");
handleControlerClick(division, "/");
