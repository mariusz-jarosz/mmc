const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('.btn2');
const square = document.querySelector('.color');
const r_color = document.querySelector('.remove-color');

function redColor() {
	square.classList.remove('blue');
	square.classList.add('red');
}

function blueColor() {
	square.classList.remove('red');
	square.classList.add('blue');
}

function removeColor() {
	square.classList.remove('red');
	square.classList.remove('blue');
}

btn1.addEventListener('click', redColor);
btn2.addEventListener('click', blueColor);
r_color.addEventListener('click', removeColor);
