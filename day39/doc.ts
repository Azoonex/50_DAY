const d = document.getElementById("demo")!;

function genrateRandomId() {
    let pass = "";
    let star =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for(let i = 0;i < 8;i++){
            let char = Math.floor(Math.random() * star.length); //  create the 8 number Random 22/33/212/3/23/2
            console.log(char);
            pass += star.at(char)
        }

        return pass

}

console.log(genrateRandomId())


// let pass = ' . star value for create new Randompass 8 repete the active search