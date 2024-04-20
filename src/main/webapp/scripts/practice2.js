// use .key localStorage function when doing "add expense" code

localStorage.setItem('name', 'Matt West');
console.log(localStorage.getItem('name'))

const form = document.querySelector(".form");
const rows = document.querySelectorAll(".row");

function updateStorage(){
	localStorage.setItem("rows", form.innerHTML);
}

form.addEventListener("click", function(e){
	if(e.target.tagName === "P"){
		titles = document.querySelectorAll(".title");
        titles.forEach(nt => {
            nt.onkeyup = function(){ // each time a key is pressed, the storage is updated
                updateStorage();
            }
        })
        expenses = document.querySelectorAll(".expense");
        expenses.forEach(ex => {
			ex.onkeyup = function() {
				updateStorage();
			}
		})
	}
	else if(e.target.tagName === "INPUT"){ // not working
		dates = document.querySelectorAll(".date");
		dates.forEach(dt => {
			dt.onchange = function() {
				alert("hey");
				let value = dt.value;
				console.log(value);
				updateStorage();
			}
		})
	}
	else if(e.target.tagName === "INPUT"){ // not working
		console.log(input.checked);
		/*checkboxes = document.querySelectorAll(".checkbox");
		checkboxes.forEach(ck => {
			ck.click = function() {
				alert("hey");
			}
		})*/
	}
	else if(e.target.tagName === "DIV" && e.target.className === "remove"){
		e.target.parentElement.remove();
		updateStorage();
	}
})

// Add a click event listener to each one
/*buttons.addEventListener("click", function(){
	alert("hey");
})*/

/*
const titles = document.querySelectorAll(".title");
titles.forEach(element => {
  element.addEventListener('click', () =>{
	  alert("hey");
  });
});*/
/*
for(i = 0; i < titles.length; i++){
	titles[i].addEventListener("click", function(e){
		//let value = titles[i].innerHTML;
		//console.log(value);
		alert("hey");
	})
}

*/
function getData(){
	form.innerHTML = localStorage.getItem("rows");
}

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
	const remove = document.createElement("div");
	remove.className="remove";
	remove.innerHTML = "X";
	
	prefixContainer.appendChild(minusSign);
	prefixContainer.appendChild(dollarSign)
	row.appendChild(checkbox);
	row.appendChild(title);
	row.appendChild(emptyDiv);
	row.appendChild(prefixContainer);
	row.appendChild(expense);
	row.appendChild(date);
	row.appendChild(remove);
	form.appendChild(row);
	
	console.log(form);
	
	updateStorage();
})
	




getData();



	
	
	