const demo = document.querySelector(".demo")!;
const btn = document.querySelector(".btn")!;

btn.addEventListener("click", generateJoke);

async function generateJoke() {
    let config = {
        headers: {
            Accepet: "application/json",
        },
    };
    const res = await fetch("https://icanhazdadjoke.com", config);
    let data = await res.json()
    demo.innerHTML = data.joke
}



