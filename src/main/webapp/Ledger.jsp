<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<title>Wedding Planner Ledger</title>
<link rel="stylesheet" href="./styles/ledger.css"/>
</head>

<body>
	<jsp:include page="Navigation.jsp" flush="true"/>

<div class="page">
	<div class="row-container">
		
		<div class="radio-container">
        	<div class="row-inner-inner row-radio"> 
             	<input
             		class="row-checkbox"
             		type="checkbox"
             	/>
            </div>
        </div>
                
            <div class="row-inner title-container">
               <div class="row-inner-inner row-title"> Ceremony Venue </div>
            </div>
            
            <div class="row-inner deposit-container">
                    
            </div>
                
            <div class="row-inner expense-container">
                <div class="row-inner-inner prefix-container">
                    <div class="prefix-container-inner">
                        <div class="prefix-container-inner-minus"> - </div>
                        <div class="prefix-container-inner-dollar"> $ </div>
                    </div>
                    <div class="negative-input-container">
                        <input 
                            class="input negative-input"
                            type="number"
                        />
                    </div>
                </div>
            </div>
            
            <div class="row-inner date-container">
                <div class="row-inner-inner date-container-inner">
                    <div class="date-input-container">
                         <input 
                         	class="input date-input"
                            type="date"
                         />
                    </div>
                </div>
            </div>
	</div>
	
	<div class="insert"> </div>
	
	<button class="create-expense-btn"> Add Expense </button>
	
</div>
	
	<%
	%>
	<script src="./scripts/ledger.js"></script>
</body>
</html>