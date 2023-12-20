let opens = document.querySelector('#open')!
let closes = document.querySelector('#close')!
let container = document.querySelector('.container')!




opens.addEventListener('click', () => container.classList.add('show-nav'))
closes.addEventListener('click', () => container.classList.remove('show-nav'))


