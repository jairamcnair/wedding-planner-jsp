<!DOCTYPE html>
<html>
<!-- Practice3.jsp + practice3.js files work -->
<head>
<meta charset="UTF-8">
<title>Wedding Planner Ledger</title>
<link rel="stylesheet" href="./styles/practice.css"/>
</head>

<body>
	<jsp:include page="Navigation.jsp" flush="true"/>

<div class="page">

	<form class="form">
	
		<div class="row">
			<input class="checkbox" type="checkbox" />
			<p class="title" contenteditable="true"></p>
			<div class="empty-div"> </div>
			<div class="prefix-container">
				<div>-</div> <div>$</div>
			</div>
			<p class="expense" contenteditable="true"></p>
			<input class="date" type="date"/>
			<div class="remove">X</div>
		</div>
		
		
	</form>

	
	<button class="create-expense-btn"> Add Expense </button>
	
	
</div>
	
	<%
	%>
	<script src="./scripts/ledger.js"></script>
</body>
</html>