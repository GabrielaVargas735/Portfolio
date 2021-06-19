const slider = document.querySelector(".slider");
const btns = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".img");
const options = document.querySelectorAll(".option");

let index = 1;
let op_index = 0;
let size = slides[index].clientWidth;

update();

function update(){
	slider.style.transform = "translateX("+ (-size * index) +"px)";

	options.forEach(option => option.classList.remove("colored"));
	options[op_index].classList.add("colored");
}

function slide(){
	slider.style.transition = "transform .5s ease-in-out";
    update();
}

function btnCheck(){
	if(this.id === "prev"){
		index--;
		if(op_index === 0){
			op_index = 4;
		}
		else{
			op_index--;
		}
	}
	else{
		index++;
		if(op_index === 4){
			op_index = 0;
		}
		else{
			op_index++;
		}
	}

	slide();
}

function optionFunc(){
	let i = Number(this.getAttribute("op-index"));
	op_index = i;
	index = i + 1;

	slide();
}
btns.forEach(btn => btn.addEventListener("click", btnCheck));
options.forEach(option => option.addEventListener("click", optionFunc));