// use .key localStorage function when doing "add expense" code

localStorage.setItem('name', 'Matt West');
console.log(localStorage.getItem('name'))

const createExpenseBtn = document.querySelector(".create-expense-btn");
createExpenseBtn.addEventListener("click", function(){
	
	const form = document.querySelector(".form");
	const row = document.createElement("div");
	row.className = "row";
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.className = "checkbox";
	const title = document.createElement("p");
	title.className = "title";
	title.setAttribute("contenteditable", "true");
	const emptyDiv = document.createElement("div");
	emptyDiv.className = "empty-div";
	const prefixContainer = document.createElement("div");
	prefixContainer.className = "prefix-container";
	const minusSign = document.createElement("div");
	minusSign.innerHTML = "-";
	const dollarSign = document.createElement("div");
	dollarSign.innerHTML = "$";
	const expense = document.createElement("p");
	expense.className = "expense";
	expense.setAttribute("contenteditable", "true");
	const date = document.createElement("input");
	date.type = "date";
	date.className = "date";
	
	prefixContainer.appendChild(minusSign);
	prefixContainer.appendChild(dollarSign)
	row.appendChild(checkbox);
	row.appendChild(title);
	row.appendChild(emptyDiv);
	row.appendChild(prefixContainer);
	row.appendChild(expense);
	row.appendChild(date);
	form.appendChild(row);
	
	console.log(form);
	
	updateStorage();
})
	
	
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
	//console.log(dateData);
	date.value = dateData;
	//console.log(date.value);
	
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

function updateStorage(){
	let form = document.querySelector
}

	
	
	
	
	
	