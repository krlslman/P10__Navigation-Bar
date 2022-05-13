
const li = document.querySelectorAll('.li');

function activeLink(){
	li.forEach((item) =>
	item.classList.remove('active'));
	this.classList.add('active');
}
li.forEach((item) =>
item.addEventListener('click',activeLink));

function goToPage5() {
	document.getElementById('PageHeader').innerHTML="Account";

	document.getElementById('PageText').innerHTML=`Dignissimos, aperiam nemo minus soluta repudiandae porro alias perspiciatis asperiores. Sit amet consectetur adipisicing elit. Voluptatibus eda magni sed debitis. Lorem aperiam nemo minus soluta repudiandae porro dolor sit amet consectetur adipisicing elit. Voluptatibus eda magni sed debitis.`;

	document.getElementById("PageImage").src = "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
	
	document.body.style.backgroundColor = "#052d6d";
}
function goToPage4() {
	document.getElementById('PageHeader').innerHTML="Settings";

	document.getElementById('PageText').innerHTML=`Consectetur adipisicing elit. Voluptatibus ea magni sed debitis dignissimos, aperiam nemo minus soluta repudiandae porro alias perspiciatis asperiores. Magni sed debitis dignissimos, aperiam nemo minus soluta repudiandae porro alias perspiciatis asperiores.`;

	document.getElementById("PageImage").src = "https://images.unsplash.com/photo-1652424510119-e44636e745b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1130&q=80";
	
	document.body.style.backgroundColor = "#121316";
}
function goToPage3() {
	document.getElementById('PageHeader').innerHTML="Share";

	document.getElementById('PageText').innerHTML=`Dolar sit amet consectetur adipisicing elit. Voluptatibus ea magni sed debitis dignissimos, aperiam nemo minus soluta repudiandae porro alias perspiciatis asperiores?`;

	document.getElementById("PageImage").src = "https://images.unsplash.com/photo-1638913970961-1946e5ee65c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80";

	document.body.style.backgroundColor = "#000c40";
}
function goToPage2() {
	document.getElementById('PageHeader').innerHTML="Search"
	document.getElementById('PageText').innerHTML=`Ipsum dolor, sit amet consectetur adipisicing elit. Quod expedita excepturi ea exercitationem saepe modi quas quam dolorum necessitatibus quo quae inventore iste eius officiis maxime, illum delectus possimus. Exercitationem saepe modi quas quam dolorum necessitatibus quo quae inventore iste eius officiis maxime, illum delectus possimus.` 
	;

	document.getElementById("PageImage").src = "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

	document.body.style.backgroundColor = "#162e9a";
}
function goToPage1() {
	document.getElementById('PageHeader').innerHTML="Home";

	document.getElementById('PageText').innerHTML=`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod expedita excepturi ea exercitationem saepe modi quas quam dolorum necessitatibus quo quae inventore iste eius officiis maxime, illum delectus possimus. Beatae?` 
	;

	document.getElementById("PageImage").src = "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

	document.body.style.backgroundColor = "#04005E";
}