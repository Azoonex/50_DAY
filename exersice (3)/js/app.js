let container = document.querySelector('.container').children

for (let item of container) {
    item.addEventListener('click',e =>{
        removePanel()
        e.target.classList.add('active')
    })
}

const removePanel = ()=>{
    for (let item of container) {
        item.classList.remove('active')
    } 
}