

const form = document.querySelector(".form");
const rows = document.querySelectorAll(".row");

function updateStorage(){
	localStorage.setItem("rows", form.innerHTML);
}

const checkboxArray = [];
const removeArray = [];
//localStorage.setItem("count", 0) // this needs to happen only the first time the page loads, not after

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
			dates = document.querySelectorAll(".date");
			dates.forEach(dt => {
				addEventListener("change", dateClick);
			})
			function dateClick() {
				for(i = 0; i < dates.length; i++){
					console.log(dates[i].value)
					localStorage.setItem("date"+i, dates[i].value)
					console.log(localStorage.getItem("date"+i));
				}
			}
		}
		else if(e.target.type === "checkbox"){
			
			const checkbox = document.getElementById(e.target.id);
			let checkedState = checkbox.checked; // if checked, returns true
			localStorage.setItem(e.target.id, checkedState);
			if(checkedState === "true"){
				localStorage.setItem(e.target.id, "false");
				checkbox.checked = true;
			}
			if(checkedState === "false"){
				localStorage.setItem(e.target.id, "true");
				checkbox.checked = false;
			}
		}
	}
	else if(e.target.tagName === "INPUT"){ // not working
		alert("hey");
	}
	else if(e.target.tagName === "DIV" && e.target.className === "remove"){
		
		e.target.parentElement.remove();
		
		//find last character of target id
		let lastCharRemove = e.target.id.slice(-1);
		console.log(lastCharRemove);
		
		//remove from local storage where target + checkbox last char match
		localStorage.removeItem("checkbox"+lastCharRemove);
		console.log(localStorage.getItem("checkbox"+lastCharRemove));
		localStorage.removeItem("remove"+lastCharRemove);
		
		//find last character of checkbox id
		let count = localStorage.getItem("count");
		let countNumber = Number(count);
		localStorage.setItem("count", countNumber-1);
		updateStorage();
	}
})


function getData(){
	form.innerHTML = localStorage.getItem("rows");
	dates = document.querySelectorAll(".date");
	for(i = 0; i < dates.length; i++){
		let dateData = localStorage.getItem("date"+i);
		dates[i].value = dateData;
	}
}


const createExpenseBtn = document.querySelector(".create-expense-btn");
createExpenseBtn.addEventListener("click", function(){
	
	let count = localStorage.getItem("count");
	let countNumber = Number(count);
	localStorage.setItem("count", countNumber+1);
	console.log(count);
	
	const form = document.querySelector(".form");
	const row = document.createElement("div");
	row.className = "row";
	
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.className = "checkbox";
	checkbox.id = "checkbox"+count;
	//console.log(checkbox.id);
	//checkboxArray.push(checkbox);
	//localStorage.setItem("checkbox"+checkboxArray.indexOf(checkbox), "null");
	localStorage.setItem(checkbox.id, "false");
	
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
	remove.id = "remove"+count;
	//localStorage.setItem(remove.id, "null");
	//removeArray.push(remove);
	//console.log(removeArray);
	//localStorage.setItem("remove"+removeArray.indexOf(remove), "null");
	
	
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
	
	console.log(checkboxArray)
	
	updateStorage();
})
	




getData();





























