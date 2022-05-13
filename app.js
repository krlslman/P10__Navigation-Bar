
const li = document.querySelectorAll('.li');

function activeLink(){
	li.forEach((item) =>
	item.classList.remove('active'));
	this.classList.add('active');
}
li.forEach((item) =>
item.addEventListener('click',activeLink));

function goToPage5() {
	document.getElementById('PageText').innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ea magni sed debitis dignissimos, aperiam nemo minus soluta repudiandae porro alias perspiciatis asperiores, commodi dicta doloremque molestiae eos quas rerum.";

	document.getElementById("PageImage").src = "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
}


document.getElementsByClassName("iiiii").onclick=getElementsByClassName("content").innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ea magni sed debitis dignissimos, aperiam nemo minus soluta repudiandae porro alias perspiciatis asperiores, commodi dicta doloremque molestiae eos quas rerum.";
// 'changeImage("1772031_29_b.jpg");