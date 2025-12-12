const boxes = document.querySelectorAll<Element>('.item')!

console.log(boxes);


window.addEventListener('scroll', myFunctionCheckItem)

myFunctionCheckItem()

function myFunctionCheckItem() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach((box)=>{
       const boxTop = box.getBoundingClientRect().top

       if(boxTop < triggerBottom){
        box.classList.add('show')
       }else {
        box.classList.remove('show')
       }
        
    })
}

