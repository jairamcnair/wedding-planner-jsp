// use .key localStorage function when doing "add expense" code

localStorage.setItem('name', 'Matt West');
console.log(localStorage.getItem('name'))

const form = document.querySelector(".form");
const rows = document.querySelectorAll(".row");
const dates = document.querySelectorAll(".date");

function updateStorage(e){
	localStorage.setItem("rows", form.innerHTML);
	//localStorage.setItem("dates", rows.sixthChild.value);
}
const checkboxArray = [];
form.addEventListener("click", function(e){
	if(e.target.tagName === "P"){
		titles = document.querySelectorAll(".title");
        titles.forEach(t => {
            t.onkeyup = function(){ // each time a key is pressed, the storage is updated
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
		if(e.target.type === "date"){
			//dates = document.querySelectorAll(".date");
			dates.forEach(dt => {
				dt.onchange = function() {
					alert("hey");
					let value = dt.value;
					console.log(value);
					updateStorage();
				}
			})
		}
		else if(e.target.type === "checkbox"){
			checkboxes = document.querySelectorAll(".checkbox");
			for(i = 0; i < checkboxes.length; i++){
				let checkedState = checkboxes[i].checked; //returns true if checked, false if not checked
				console.log(checkedState);
				localStorage.setItem("checkbox"+i, checkboxes[i].checked)
				//console.log(localStorage.getItem("checkbox"+i));
			}
		}
		
	}
	else if(e.target.tagName === "INPUT"){ // not working
		alert("hey");
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
	
	checkboxes = document.querySelectorAll(".checkbox");
	for(i = 0; i < checkboxes.length; i++){
		let checkboxData = localStorage.getItem("checkbox"+i);
		if(checkboxData === "true"){
			checkboxes[i].checked = true;
		}
		if(checkboxData === "false"){
			checkboxes[i].checked = false;
		}
	}
	
}


const createExpenseBtn = document.querySelector(".create-expense-btn");
createExpenseBtn.addEventListener("click", function(){
	
	/*let count = Number(localStorage.getItem("count"));
	localStorage.setItem("count", count+1);
	console.log("count: - "+localStorage.getItem("count"));
	localStorage.setItem("checkbox"+count, "null");*/
	
	const form = document.querySelector(".form");
	const row = document.createElement("div");
	row.className = "row";
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.className = "checkbox";
	checkboxArray.push(checkbox);
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
	/*const dateContainer = document.createElement("div")
	dateContainer.className="date-container";
	const dateDiv1 = document.createElement("div");
	dateDiv1.className="date-container-div";
	dateDiv1.setAttribute("contenteditable", "true");
	const dateDiv2 = document.createElement("div");
	dateDiv2.className="date-container-div";
	dateDiv2.setAttribute("contenteditable", "true");
	const dateDiv3 = document.createElement("div");
	dateDiv3.className="date-container-div";
	dateDiv3.setAttribute("contenteditable", "true");
	dateContainer.appendChild(dateDiv1);
	dateContainer.appendChild(dateDiv2);
	dateContainer.appendChild(dateDiv3);*/
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



	
	
	