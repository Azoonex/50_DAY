let container = document.querySelectorAll(".panel")!

container.forEach((item) => {
    item.addEventListener('click',tiem => {
        removeHandler()
        item.classList.add('active')
    })
});


const removeHandler = ()=>{
    container.forEach(item=>{
        item.classList.remove('active')
    })
}
