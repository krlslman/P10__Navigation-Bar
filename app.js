
const li = document.querySelectorAll('.li');

function activeLink(){
	li.forEach((item) =>
	item.classList.remove('active'));
	this.classList.add('active');
}
li.forEach((item) =>
item.addEventListener('click',activeLink));

