

const btn1 = document.querySelector('.arrow')
const arrow = document.querySelector('.fas')
const picture = document.querySelector('.item1')

function toggleShowClass() {
	picture.classList.toggle('show')
	if (picture.classList.contains('show')){
		console.log('OK')
		arrow.style.transform = 'rotate(180deg)'
	}
	else{
		console.log("NoOK")
		arrow.style.transform = 'rotate(0deg)'
	}
}

btn1.addEventListener('click', toggleShowClass)
// const r_color = document.querySelector('.remove-color');

// function redColor() {
// 	square.classList.remove('blue');
// 	square.classList.add('red');
// }

// function blueColor() {
// 	square.classList.remove('red');
// 	square.classList.add('blue');
// }

// function removeColor() {
// 	square.classList.remove('red');
// 	square.classList.remove('blue');
// }

// btn1.addEventListener('click', redColor);
// btn2.addEventListener('click', blueColor);
// r_color.addEventListener('click', removeColor);
