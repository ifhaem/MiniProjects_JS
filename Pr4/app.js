const board = document.querySelector('#board')
const colors = ['red', 'blue', 'green', 'yellow']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', () => setImage(square))
	square.addEventListener('mouseleave', () => removeImage(square))

	board.append(square)
}

function setImage(element) {
	const image = getRandomColor()
	element.style.backgroundSize = 'cover'
	element.style.backgroundColor = image;
}

function removeImage(element) {
	element.style.backgroundColor = '#1d1d1d'
	element.style.backgroundImage = 'url(https://youpiter.su/wp-content/uploads/2019/05/U-999-Чёрный-1.jpg)'
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}