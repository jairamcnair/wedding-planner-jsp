

const guestlistForm = document.querySelector(".guestlist-form");
const guestlistRows = document.querySelectorAll(".guestlist-row");

function updateStorage(){
	localStorage.setItem("guestlistRows", guestlistForm.innerHTML);
}


const checkboxArray = [];
const removeArray = [];


guestlistForm.addEventListener("click", function(e){
	console.log("yoyo")
	if(e.target.tagName === "P"){
		console.log("paragraph")
		names = document.querySelectorAll(".name-input");
        names.forEach(n => {
            n.onkeyup = function(){ // each time a key is pressed, the storage is updated
                updateStorage();
            }
        })
        emails = document.querySelectorAll(".email-input");
        emails.forEach(em => {
			em.onkeyup = function() {
				updateStorage();
			}
		})
		addresses = document.querySelectorAll(".address-input");
        addresses.forEach(ad => {
			ad.onkeyup = function() {
				updateStorage();
			}
		})
		estpeople = document.querySelectorAll(".estppl-input");
        estpeople.forEach(ep => {
			ep.onkeyup = function() {
				updateStorage();
			}
		})
		finalpeople = document.querySelectorAll(".finalppl-input");
        finalpeople.forEach(fp => {
			fp.onkeyup = function() {
				updateStorage();
			}
		})
		queens = document.querySelectorAll(".queens-input");
        queens.forEach(qu => {
			qu.onkeyup = function() {
				updateStorage();
			}
		})
	}
	else if(e.target.tagName === "INPUT"){ // not working
	
		if(e.target.type === "checkbox"){
			
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
		updateStorage();
	}
})








function getData(){
	//calculateSum()
	guestlistForm.innerHTML = localStorage.getItem("guestlistRows");
	//fixedForm.innerHTML = localStorage.getItem("fixedRows");
	// make count local storage not reset on page reload
	
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
	} 
	
}

const addGuestBtn = document.querySelector(".add-guest-btn");
addGuestBtn.addEventListener("click", function(){
	
	let count = localStorage.getItem("count");
	let countNumber = Number(count);
	localStorage.setItem("count", countNumber+1);
	console.log(count);
	
	const form = document.querySelector(".guestlist-form");
	const row = document.createElement("div");
	row.className = "guestlist-row";
	
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


















