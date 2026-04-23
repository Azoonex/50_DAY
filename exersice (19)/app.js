const inputEarea = document.querySelector('#area');
const tagDiv = document.querySelector('.tag');

inputEarea.focus()

inputEarea.addEventListener('keyup',(event)=>{
    if(event.keyCode === 13){
       let newData = event.target.value
       addHnadler(newData)
       event.target.value = ""
    }
    
})

function addHnadler (value) {
    let div = document.createElement('div')
    let divNew = div.innerHTML = value
    tagDiv.append(divNew) 
}




