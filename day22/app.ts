const smallCups= document.querySelectorAll('.cup-small');
const listers = document.getElementById("liters");
const percentTage = document.getElementById("percentage");
const remaind = document.getElementById("remained");

updateBigCup()

smallCups.forEach((cup,idx)=>{
    cup.addEventListener("click", () => highlightCups(idx));
})

function highlightCups(idx) {
    if(smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling?.classList.contains("full")){
        idx--
    }

    smallCups.forEach((cup,idx2) => {
        if(idx2 <= idx){
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup () {
    const fullCup = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCup === 0 ){
        percentTage.style.visibility = 'hidden'
        percentTage?.style.height = 0
    } else{
        percentTage?.style.visibility = 'visible';
        percentTage?.style.height = `${fullCup / toolbar * 330}px`;
        percentTage?.innerText = `${fullCup / totalCups * 100}%`
    }

    if(fullCup === totalCups){
        remaind?.style.visibility = 'hidden';
        remaind?.style.height = 0
    } else {
        remaind?.style.visibility = 'visible';
        listers?.innerText = `${2 - (250 * fullCup / 1000)L}`
    }



}


