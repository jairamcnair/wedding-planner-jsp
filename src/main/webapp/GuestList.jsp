<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<title>Wedding Planner Ledger</title>
<link rel="icon" type="image/x-icon" href="/images/favicon.ico">
<link rel="stylesheet" href="./styles/guestlist.css"/>
</head>

<body>
<jsp:include page="Navigation.jsp" flush="true"/>
<div class="guestlist-page">

	<div class="page-top">
		<div>
			<h1> Kings Needed </h1>
			<p class="kings-sum-div"></p>
		</div>
		<div>
			<h1> Queens Needed </h1>
			<p class="queens-sum-div"></p>
		</div>
		
		<div>
			<h1> Estimated Guest Count </h1>
			<p class="guest-count"></p>
		</div>
		
		<div>
			<h1> Final Guest Count </h1>
			<p class="final-guest-count"></p>
		</div>
	
	</div>
	
	<form class="guestlist-form">
	<!--  
		<div class="guestlist-row">
		
			<div class="row-inner">
			
				<div class="upper-row">
					<div class="name-div"> <p class="label">Name/Household</p> <p class="name-input input" contenteditable="true"></p> </div>
					<div class="email-div"> <p class="label email">Email</p> <p class="email-input input" contenteditable="true"></p> </div>
				</div>
				<div class="lower-row">
					<div class="address-div"> <p class="label">Address</p> <p class="address-input input" contenteditable="true"></p> </div>
				</div>
				
				
				<div class="lower-row2">
					<div class="hotel-div">
						<div class="display-column">
							Need Hotel
							<input class="checkbox" type="checkbox" id="glcb0"/>
						</div>
						
				
						<div class="display-column"> 
							Kings:
							<p class="kings-input input" contenteditable="true"></p>
						</div>
						
				
						<div class="display-column"> 
							Double Queens: 
							<p class="queens-input input" contenteditable="true"></p>
						</div>
					</div>
				</div>
				
			</div>
			
			
			<div class="row-inner2">
				<div class="checkbox-div">
					<div># of PPL Invited</div>
					<p class="estppl-input" contenteditable="true"></p>
				</div>
				<div class="checkbox-div">
					<div>Invite Sent</div>
					<input class="checkbox" type="checkbox" id="glcb1"/>
				</div>
			
				<div class="checkbox-div">
					<div>RSVP Received</div>
					<input class="checkbox" type="checkbox" id="glcb2"/>
				</div>
			
				<div class="checkbox-div">
					<div># of PPL Coming</div>
					<p class="finalppl-input input" contenteditable="true"></p>
				</div>
			</div>
			
			<div class="row-inner3"> X </div>
			
		</div>
	-->
	</form>

	
	<button class="add-guest-btn"> Add Guest </button>
	
	
</div>
	
	<%
	%>
	<script src="./scripts/guestlist.js"></script>
</body>
</html>