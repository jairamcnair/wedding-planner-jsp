// need to make sure checkbox localstorage deletes on remove button execution
/*
Idea: when we add a row, we also add to the checkbox array and 
remove array so we can keep track of the indexes - we will add the array
key + values to local storage and delete them when the button is clicked
*/

// THIS CODE IS CORRECT AND IS THE CODE USED IN THE LEDGER.JS FILE
const form = document.querySelector(".form");
const rows = document.querySelectorAll(".row");

const fixedForm = document.querySelector(".fixed-form");
const fixedRows = document.querySelectorAll(".fixed-row");

function updateStorage(){
	localStorage.setItem("rows", form.innerHTML);
	localStorage.setItem("fixedRows", fixedForm.innerHTML);
}

const checkboxArray = [];
const removeArray = [];
//localStorage.setItem("count", 5) // this needs to happen only the first time the page loads, not after
/*localStorage.setItem("checkbox0", "null");
localStorage.setItem("checkbox1", "null");
localStorage.setItem("checkbox2", "null");
localStorage.setItem("checkbox3","null");
localStorage.setItem("checkbox4", "null");

localStorage.setItem("date0", "null");
localStorage.setItem("date1", "null");
localStorage.setItem("date2", "null");
localStorage.setItem("date3","null");
localStorage.setItem("date4", "null");*/

/*localStorage.setItem("expense0", "null");
localStorage.setItem("expense1", "null");
localStorage.setItem("expense2", "null");
localStorage.setItem("expense3","null");
localStorage.setItem("expense4", "null");*/

fixedForm.addEventListener("click", function(e){
	if(e.target.tagName === "P"){
        expenses = document.querySelectorAll(".fixed-expense");
        expenses.forEach(ex => {
			ex.onkeyup = function() {
				console.log("Hey");
				updateStorage();
			}
		})
	}
	if(e.target.tagName === "INPUT"){ // not working
		if(e.target.type === "date"){
			dates = document.querySelectorAll(".fixed-date");
			dates.forEach(dt => {
				//addEventListener("change", dateClick);
				addEventListener("change", dateClick);
			})
			function dateClick() {
				console.log("fixed")
				const date = document.getElementById(e.target.id);
				localStorage.setItem(e.target.id, date.value);
				//use code below if above code doesn't work during testing
				/*for(i = 0; i < dates.length; i++){
					console.log(dates[i].value)
					localStorage.setItem("date"+i, dates[i].value)
					console.log(localStorage.getItem("date"+i));
				}*/
			}
		}
		else if(e.target.type === "checkbox"){
			
			const checkbox = document.getElementById(e.target.id);
			let checkedState = checkbox.checked; // if checked, returns true
			localStorage.setItem(e.target.id, checkedState);
			if(checkedState === "true"){
				localStorage.setItem(e.target.id, "false");
				checkbox.checked = false;
			}
			if(checkedState === "false"){
				localStorage.setItem(e.target.id, "true");
				checkbox.checked = true;
			}
			//console.log(localStorage.getItem(checkbox));
			/*const checkboxes = document.querySelectorAll(".checkbox");
			for(i = 0; i < checkboxes.length; i++){
				let checkedState = checkboxes[i].checked; 
				console.log(checkedState);
				localStorage.setItem("checkbox"+i, checkboxes[i].checked)
			}*/
			
		}
	}
})


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
				const date = document.getElementById(e.target.id);
				localStorage.setItem(e.target.id, date.value);
				//use code below if above code doesn't work during testing
				/*for(i = 0; i < dates.length; i++){
					console.log(dates[i].value)
					localStorage.setItem("date"+i, dates[i].value)
					console.log(localStorage.getItem("date"+i));
				}*/
			}
		}
		else if(e.target.type === "checkbox"){
			
			const checkbox = document.getElementById(e.target.id);
			let checkedState = checkbox.checked; // if checked, returns true
			localStorage.setItem(e.target.id, checkedState);
			if(checkedState === "true"){
				localStorage.setItem(e.target.id, "false");
				checkbox.checked = false;
			}
			if(checkedState === "false"){
				localStorage.setItem(e.target.id, "true");
				checkbox.checked = true;
			}
			//console.log(localStorage.getItem(checkbox));
			/*const checkboxes = document.querySelectorAll(".checkbox");
			for(i = 0; i < checkboxes.length; i++){
				let checkedState = checkboxes[i].checked; 
				console.log(checkedState);
				localStorage.setItem("checkbox"+i, checkboxes[i].checked)
			}*/
			
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
		localStorage.removeItem("date"+lastCharRemove);
		
		//find last character of checkbox id
		let count = localStorage.getItem("count");
		let countNumber = Number(count);
		//localStorage.setItem("count", countNumber-1);
		//console.log(count);
		
		/*let index = localStorage.getItem("count");
		localStorage.removeItem("checkbox"+index);*/
		updateStorage();
	}
})








function getData(){
	form.innerHTML = localStorage.getItem("rows");
	fixedForm.innerHTML = localStorage.getItem("fixedRows");
	// make count local storage not reset on page reload
	
	fixedCheckboxes = document.querySelectorAll(".fixed-checkbox");
	for(i = 0; i < fixedCheckboxes.length; i++){
		const id = fixedCheckboxes[i].id;
		//console.log(fixedCheckboxes[i]);
		let checkboxChecked = localStorage.getItem(id);
		if(checkboxChecked === "true"){
			fixedCheckboxes[i].checked = true;
			//console.log("true");
		}
		if(checkboxChecked === "false"){
			fixedCheckboxes[i].checked = false;
		}
	} 
	fixedDates = document.querySelectorAll(".fixed-date");
	for(i = 0; i < fixedDates.length; i++){
		const id = fixedDates[i].id;
		//console.log(id);
		let date = localStorage.getItem(id); 
		//console.log(date);
		fixedDates[i].value = date;
		/*let dateData = localStorage.getItem("date"+i);
		//console.log(dateData);
		dates[i].value = dateData;*/
	}
	checkboxes = document.querySelectorAll(".checkbox");
	for(i = 0; i < checkboxes.length; i++){
		const id = checkboxes[i].id;
		//console.log(id);
		let checkboxChecked = localStorage.getItem(id);
		if(checkboxChecked === "true"){
			checkboxes[i].checked = true;
			//console.log("true");
		}
		if(checkboxChecked === "false"){
			checkboxes[i].checked = false;
			//console.log("false");
		}
		/*let checkboxData = localStorage.getItem("checkbox"+i);
		if(checkboxData === "true"){
			checkboxes[i].checked = true;
		}
		if(checkboxData === "false"){
			checkboxes[i].checked = false;
		}*/
	} 
	
	dates = document.querySelectorAll(".date");
	for(i = 0; i < dates.length; i++){
		const id = dates[i].id;
		//console.log(id);
		let date = localStorage.getItem(id); 
		//console.log(date);
		dates[i].value = date;
		/*let dateData = localStorage.getItem("date"+i);
		//console.log(dateData);
		dates[i].value = dateData;*/
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
	date.id = "date"+count;
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
	
	//console.log(form);
	//console.log(checkboxArray)
	
	updateStorage();
})
	




getData();