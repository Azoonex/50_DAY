var acc = document.getElementsByClassName(
    "accordion"
) as HTMLCollectionOf<HTMLButtonElement>;


for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        console.log("sdf");
        this.classList.toggle("active");

        // var panel = this.nextElementSibling as HTMLElement;
        var panel = this.nextElementSibling as HTMLAreaElement;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

