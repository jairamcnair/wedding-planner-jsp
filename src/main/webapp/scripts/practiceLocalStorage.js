// use .key localStorage function when doing "add expense" code

localStorage.setItem('name', 'Matt West');
console.log(localStorage.getItem('name'))

//this works
const expense = document.querySelector(".expense");
expense.addEventListener("keyup", function(){
	let value = document.querySelector(".expense").innerHTML;
	console.log(value);
	localStorage.setItem("expense", value)
})
const title = document.querySelector(".title");
title.addEventListener("keyup", function(){
	let value = document.querySelector(".title").innerHTML;
	console.log(value);
	localStorage.setItem("title", value)
})
const date = document.querySelector(".date");
date.addEventListener("change", function(){
	let value = document.querySelector(".date").value;
	console.log(value);
	localStorage.setItem("date", value); // has to be string to be in localStorage
	//localStorage.setItem("date", JSON.stringify(value) - makes localStorage.getItem not happen
})
const checkbox = document.querySelector(".checkbox");
checkbox.addEventListener("click", function(){
	let checkedState = checkbox.checked; //returns true if checked, false if not checked
	localStorage.setItem("checkbox", checkedState);
    //console.log(localStorage.getItem("checkbox"));
})




function getData(){
	let expenseData = localStorage.getItem("expense");
	expense.innerHTML = expenseData;
	
	let titleData = localStorage.getItem("title");
	title.innerHTML = titleData;
	
	let dateData = localStorage.getItem("date");
	console.log(dateData);
	date.value = dateData;
	console.log(date.value);
	
	let checkbox = document.querySelector(".checkbox");
	let checkboxData = localStorage.getItem("checkbox");
	if(checkboxData === "true"){
		checkbox.checked = true;
	}
	if(checkboxData === "false"){
		checkbox.checked = false;
	}
}

getData();

/*  this doesn't work well...
const notesContainer = document.querySelector(".form");
const createBtn = document.querySelector(".btn"); // "Create Note button in html"
let notes = document.querySelectorAll(".expense"); // selects all input boxes

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}


notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "INPUT"){
        notes = document.querySelectorAll(".expense");
        notes.forEach(nt => {
            nt.onkeyup = function(){ // each time a key is pressed, the storage is updated
                updateStorage();
            }
        })
    }
});

showNotes();

*/