

localStorage.setItem('name', 'Matt West');
console.log(localStorage.getItem('name'))


// save input values to local storage
const negativeInputContainers = document.querySelectorAll(".negative-input-container") // input container container
const negativeInputs = document.querySelectorAll(".negative-input");
negativeInputs.forEach(negativeInput =>{
	localStorage.setItem("negativeInput", negativeInput.innerHTML)
	console.log("negativeInput")
})

negativeInputContainers.addEventListener("click", function(e){
    if(e.target.className === ".negative-input"){
        notes = document.querySelectorAll(".negative-input");
        notes.forEach(nt => {
            nt.onkeyup = function(){ // each time a key is pressed, the storage is updated
                updateStorage();
            }
        })
    }
});


function showInput(){
	negativeInputContainers.innerHTML = localStorage.getItem("negativeInput");
}
showInput()


// show row
let page = document.querySelector(".page") // row-container container
let rowContainers = document.querySelectorAll(".row-container");
rowContainers.forEach(rowContainer => {
	localStorage.setItem('rowContainer', rowContainer.innerHTML)
	//console.log(localStorage.getItem("rowContainer"))
})

function show(){
    page.innerHTML = localStorage.getItem("rowContainer"); //set container element innerHTML to 
}
show();































// create new row on button click
const createExpenseBtn = document.querySelector(".create-expense-btn"); // "Create Note button in html"
const insert = document.querySelector(".insert");
createExpenseBtn.addEventListener("click", () =>{  // create the note

	let rowContainer = document.createElement("div");
	rowContainer.className="row-container";
	
	
	let radioContainer = document.createElement("div");
	radioContainer.className="radio-container";
	
	let rowRadio = document.createElement("div");
	rowRadio.className="row-inner-inner row-radio";
	
	let rowCheckbox = document.createElement("input");
	rowCheckbox.type="checkbox";
	rowCheckbox.className="row-checkbox input"
	
	//radioContainer.appendChild(rowRadio.appendChild(rowCheckbox))
	
	
	
	let titleContainer = document.createElement("div");
	titleContainer.className="row-inner title-container";
	
	let rowTitle = document.createElement("input");
	rowTitle.className="row-inner-inner row-title";
	rowTitle.type = "text";
	//rowTitle.onkeyup(updateStorage)
	
	//titleContainer.appendChild(rowTitle)
	
	
	
	let depositContainer = document.createElement("div");
	depositContainer.className="row-inner deposit-container"
	
	
	
	let expenseContainer = document.createElement("div");
	expenseContainer.className = "row-inner expense-container"
	
	let prefixContainer = document.createElement("div");
	prefixContainer.className="row-inner-inner prefix-container";
	
	let prefixContainerInner = document.createElement("div");
	prefixContainerInner.className = "prefix-container-inner";
	
	let prefixContainerInnerMinus = document.createElement("div");
	prefixContainerInnerMinus.className="prefix-container-inner-minus"
	prefixContainerInnerMinus.innerHTML = "-";
	
	let prefixContainerInnerDollar = document.createElement("div");
	prefixContainerInnerDollar.className="prefix-container-inner-dollar"
	prefixContainerInnerDollar.innerHTML = "$";
	
	let negativeInputContainer = document.createElement("div");
	negativeInputContainer.className="negative-input-container"
	
	let negativeInput = document.createElement("p");
	//negativeInput.type = "number";
	negativeInput.className = "input negative-input";
	negativeInput.setAttribute("contenteditable", "true")
	
	//expenseContainer.appendChild(prefixContainer.appendChild(prefixContainerInner.appendChild(prefixContainerInnerMinus, prefixContainerInnerDollar), negativeInputContainer.appendChild(negativeInput)));
	
	

	let dateContainer = document.createElement("div");
	dateContainer.className = "row-inner date-container";
	
	let dateContainerInner = document.createElement("div");
	dateContainerInner.className = "row-inner-inner date-container-inner";
	
	let dateInputContainer = document.createElement("div");
	dateInputContainer.className = "date-input-container";
	
	let dateInput = document.createElement("input");
	dateInput.type="date";
	dateInput.className="input date-input"
	
	//dateContainer.appendChild(dateContainerInner.appendChild(dateInputContainer.appendChild(dateInput)))
	
	// THE ORDER MATTERS! DON'T CHANGE IT!
	rowRadio.appendChild(rowCheckbox)
	radioContainer.appendChild(rowRadio)
	rowContainer.appendChild(radioContainer)
	
	titleContainer.appendChild(rowTitle)
	rowContainer.appendChild(titleContainer)
	
	rowContainer.appendChild(depositContainer)
	
	prefixContainerInner.appendChild(prefixContainerInnerMinus)
	prefixContainerInner.appendChild(prefixContainerInnerDollar)
	prefixContainer.appendChild(prefixContainerInner)
	negativeInputContainer.appendChild(negativeInput)
	prefixContainer.appendChild(negativeInputContainer)
	expenseContainer.appendChild(prefixContainer)
	rowContainer.appendChild(expenseContainer)
	
	dateInputContainer.appendChild(dateInput)
	dateContainerInner.appendChild(dateInputContainer)
	dateContainer.appendChild(dateContainerInner)
	rowContainer.appendChild(dateContainer)
	
	insert.appendChild(rowContainer);
	
});
