var opens = document.querySelector('#open');
var closes = document.querySelector('#close');
var container = document.querySelector('.container');
opens.addEventListener('click', function () { return container.classList.add('show-nav'); });
closes.addEventListener('click', function () { return container.classList.remove('show-nav'); });
