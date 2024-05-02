<!DOCTYPE html>
<html>
<!-- Practice3.jsp + practice3.js files work -->
<!--  THIS CODE IS CORRECT AND IS USED IN THE Ledger.jsp FILE -->
<head>
<meta charset="UTF-8">
<title>Wedding Planner Ledger</title>
<link rel="stylesheet" href="./styles/ledger.css"/>
</head>

<body>
	<jsp:include page="Navigation.jsp" flush="true"/>

<div class="ledger-page">

	<form class="fixed-form">
		<div class="fixed-row">
			<input class="fixed-checkbox" type="checkbox" id="checkbox0"/>
			<p class="fixed-title" contenteditable="false">Ceremony Venue</p>
			<div class="empty-div"> </div>
			<div class="prefix-container">
				<div>-</div> <div>$</div>
			</div>
			<p class="fixed-expense" contenteditable="true" id="expense0"></p>
			<input class="fixed-date" type="date" id="date0"/>
			<div class="remove">X</div>
		</div>
		<div class="fixed-row">
			<input class="fixed-checkbox" type="checkbox" id="checkbox1"/>
			<p class="fixed-title" contenteditable="false">Cocktail Hour Venue</p>
			<div class="empty-div"> </div>
			<div class="prefix-container">
				<div>-</div> <div>$</div>
			</div>
			<p class="fixed-expense" contenteditable="true" id="expense1"></p>
			<input class="fixed-date" type="date" id="date1"/>
			<div class="remove">X</div>
		</div>
		<div class="fixed-row">
			<input class="fixed-checkbox" type="checkbox" id="checkbox2"/>
			<p class="fixed-title" contenteditable="false">Reception Venue</p>
			<div class="empty-div"> </div>
			<div class="prefix-container">
				<div>-</div> <div>$</div>
			</div>
			<p class="fixed-expense" contenteditable="true" id="expense2"></p>
			<input class="fixed-date" type="date" id="date2"/>
			<div class="remove">X</div>
		</div>
		<div class="fixed-row">
			<input class="fixed-checkbox" type="checkbox" id="checkbox3"/>
			<p class="fixed-title" contenteditable="false">Event Insurance</p>
			<div class="empty-div"> </div>
			<div class="prefix-container">
				<div>-</div> <div>$</div>
			</div>
			<p class="fixed-expense" contenteditable="true" id="expense3"></p>
			<input class="fixed-date" type="date" id="date3"/>
			<div class="remove">X</div>
		</div>
		<div class="fixed-row">
			<input class="fixed-checkbox" type="checkbox" id="checkbox4"/>
			<p class="fixed-title" contenteditable="false"><a href="#">Decor</a></p>
			<div class="empty-div"> </div>
			<div class="prefix-container">
				<div>-</div> <div>$</div>
			</div>
			<p class="fixed-expense" contenteditable="true" id="expense4"></p>
			<input class="fixed-date" type="date" id="date4"/>
			<div class="remove">X</div>
		</div>
	</form>

	<form class="form">
	
		<div class="row">
		
		<!--  
			<input class="checkbox" type="checkbox" />
			<p class="title" contenteditable="true"></p>
			<div class="empty-div"> </div>
			<div class="prefix-container">
				<div>-</div> <div>$</div>
			</div>
			<p class="expense" contenteditable="true"></p>
			<input class="date" type="date"/>
			<div class="remove">X</div>
		-->
		</div>
		
		
	</form>

	
	<button class="create-expense-btn"> Add Expense </button>
	
	
</div>
	
	<%
	%>
	<script src="./scripts/practice3.js"></script>
</body>
</html>