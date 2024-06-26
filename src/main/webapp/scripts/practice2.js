
// need to make sure checkbox localstorage deltes on remove button execution

const form = document.querySelector(".form");
const rows = document.querySelectorAll(".row");

function updateStorage(){
	localStorage.setItem("rows", form.innerHTML);
}

const checkboxArray = [];
const removeArray = [];
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
			const checkboxes = document.querySelectorAll(".checkbox");
			for(i = 0; i < checkboxes.length; i++){
				let checkedState = checkboxes[i].checked; //returns true if checked, false if not checked
				//let checkedState = checkboxArray[i].checked;
				console.log(checkedState);
				//console.log()
				localStorage.setItem("checkbox"+i, checkboxes[i].checked)
				//localStorage.setItem("checkbox"+i, checkboxArray[i].checked)
			}
		}
		
	}
	else if(e.target.tagName === "INPUT"){ // not working
		alert("hey");
	}
	else if(e.target.tagName === "DIV" && e.target.className === "remove"){
		
		e.target.parentElement.remove();
		localStorage.removeItem("checkboxAtSameIndex");
		console.log(localStorage.getItem('checkbox1'));
		
		updateStorage();
	}
})


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
	/*for(i = 0; i < checkboxArray.length; i++){
		let checkboxData = localStorage.getItem("checkbox"+i);
		if(checkboxData === "true"){
			checkboxArray[i].checked = true;
		}
		if(checkboxData === "false"){
			checkboxArray[i].checked = false;
		}
	}*/
	dates = document.querySelectorAll(".date");
	for(i = 0; i < dates.length; i++){
		let dateData = localStorage.getItem("date"+i);
		//console.log(dateData);
		dates[i].value = dateData;
	}
	
}


const createExpenseBtn = document.querySelector(".create-expense-btn");
createExpenseBtn.addEventListener("click", function(){
	
	const form = document.querySelector(".form");
	const row = document.createElement("div");
	row.className = "row";
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.className = "checkbox";
	//checkboxArray.push(checkbox);
	//console.log(checkboxArray);
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
	//removeArray.push(remove);
	//console.log(removeArray);
	
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
	console.log(checkboxArray)
	
	updateStorage();
})
	




getData();



	
	
	