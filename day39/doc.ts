const container = document.getElementById("container")!;
const btnPlural = document.getElementById("plural")!;
const btnMinus = document.getElementById("minus")!;
const btnMultiplaction = document.getElementById("multiplaction")!;
const division = document.getElementById("divistion")!;
const spanDemo = document.getElementsByTagName("span")[0]!;

let valueSeconde: string | null = null;
let valueFrist: string | null = null;
let morVlaue: string | null = null;

function handleControlerClick(nameButton: HTMLElement, MathSituation: string) {
    nameButton.onclick = () => {
        if (!valueFrist || !valueSeconde) {
            valueFrist = prompt("first value ?");
            valueSeconde = prompt("second value ?");
            if (valueFrist || valueSeconde) {
                spanDemo.innerHTML = String(
                    `${Number(valueFrist)}  ${MathSituation}  ${Number(
                        valueSeconde
                    )}  ${MathSituation}  ${Number(morVlaue)}`
                );
            }
            return;
        } else if (valueFrist || valueSeconde) {
            morVlaue = prompt("more Amount ? ");
            spanDemo.innerHTML = String(
                `${Number(valueFrist)}  ${MathSituation}  ${Number(
                    valueSeconde
                )}  ${MathSituation}  ${Number(morVlaue)}`
            );
        }
    };
}

handleControlerClick(btnPlural, "+");
handleControlerClick(btnMinus, "-");
handleControlerClick(btnMultiplaction, "*");
handleControlerClick(division, "/");
