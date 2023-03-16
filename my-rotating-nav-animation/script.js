const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const move = document.querySelector('.move')
open.addEventListener('click', () => container.classList.add('show-nav'));
close.addEventListener('click', () => container.classList.remove('show-nav'));
move.addEventListener('click', () => move.classList.add('moved'));
