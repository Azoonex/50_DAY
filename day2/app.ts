let child = document.querySelector<HTMLElement>('.child')!
let progres = document.querySelectorAll<HTMLElement>('.progres')!
let next = document.querySelector<HTMLElement>('#next')!
let prive = document.querySelector<HTMLElement>('#prive')!
let active = document.querySelector('.active')!


let crentActive = 1

next.addEventListener('click',()=>{
    crentActive++

    if(crentActive > progres.length){
        crentActive = progres.length;
    }
    update()
})

prive.addEventListener('click',()=>{
    crentActive--
    if(crentActive < 1){
        crentActive = 1
    }
    update()
    
})

const update = ()=>{
    progres.forEach((item,idx)=>{
         if(idx < crentActive){
            item.classList.add('active')
         }else{
            item.classList.remove('active')
         }
    })
    child.style.width = (crentActive - 1) / (progres.length - 1) * 100 + '%'

    if(crentActive === 1){
        prive.classList.add('disabled')
    }else if (crentActive === progres.length){
        next.classList.add('disabled')
    }else {
        prive.classList.remove('disabled')
        next.classList.remove('disabled')
    }
}

