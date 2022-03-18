const bigBlock_white = document.querySelector('.bigBlock_white');
const smallBlock_red = document.querySelector('.smallBlock_red');
const smallBlock_blue = document.querySelector('.smallBlock_blue');
const smallBlock_green = document.querySelector('.smallBlock_green');


/*======================================redFunc==============================================*/

const redFunc = () => {
	bigBlock_white.classList.remove('smallBlock_green');
	bigBlock_white.classList.remove('smallBlock_blue');
	bigBlock_white.classList.add('smallBlock_red');
	bigBlock_white.innerHTML = "Красный";
};

smallBlock_red.addEventListener('mouseenter', redFunc);




/*======================================blueFunc==============================================*/

const blueFunc = () => {
	bigBlock_white.classList.remove('smallBlock_green');
	bigBlock_white.classList.remove('smallBlock_red');
	bigBlock_white.classList.add('smallBlock_blue');
	bigBlock_white.innerHTML = "Синий";
};

smallBlock_blue.addEventListener('mouseenter', blueFunc);



/*======================================greenFunc==============================================*/

const greenFunc = () => {
	bigBlock_white.classList.remove('smallBlock_blue');
	bigBlock_white.classList.remove('smallBlock_red');
	bigBlock_white.classList.add('smallBlock_green');
	bigBlock_white.innerHTML = "Зеленый";
};

smallBlock_green.addEventListener('mouseenter', greenFunc);


