

$(function(){
	$("#size-igt").prop("disabled", true);	
	$("#watt-igt").prop("disabled", true);
	$("#search-box-gr").on("change", function() {
		
		var product_name = $("#search-box-gr :selected").val().toLowerCase();
		var arr_size = ["down light","flat panel", "tube"];
		var arr_watt = ["cornbulb", "flood light", "grow light", "high bay","high bay hv", "linear high bay", "street light", "shoebox", "wall pack"];
		//var one_price = ["",""];
			
		
		if ( $.inArray( product_name, arr_size ) != -1 ) {	
			//$("#heading-inputs").append('<th id="heading-size">Size</th>');
			//$("#search-inputs").append('<td><input type="text" name="size" id="size-igt"></td>');					
			$("#size-igt").prop("disabled", false);
			$("#watt-igt").val('');
			$("#watt-igt").prop("disabled", true);	
		} else if ( $.inArray( product_name, arr_watt ) != -1 ) {		
			//$("#heading-inputs").append('<th id="heading-watt">Wattage</th>');
			//$("#search-inputs").append('<td><input type="text" name="wattage" id="watt-igt"></td>');				
			$("#watt-igt").prop("disabled", false);
			$("#size-igt").val('');
			$("#size-igt").prop("disabled", true);
		}
			
	});

	/*
	$("#search-box-gr").on("focusout", function() {
		var product_name = $("#search-box-gr").val().toLowerCase();
		var arr_size = ["down light","flat panel", "tube"];
		var arr_watt = ["flood light","high bay","linear high bay","wall pack","grow light","street light","shoebox","cornbulb"];
		//var one_price = ["",""];
		
		if ( $.inArray( product_name, arr_size ) != -1 ) {	
			$("#heading-inputs").append("<th>Size</th>");
			$("#search-inputs").append('<td><input type="text" name="size" id="size-igt"></td>');
		} else if ( $.inArray( product_name, arr_watt ) != -1 ) {		
			$("#heading-inputs").append("<th>Wattage</th>");
			$("#search-inputs").append('<td><input type="text" name="wattage" id="watt-igt"></td>');
		}
			
	});
	*/
});


$(function() {

	$("#cost-price-igt").val('');
	/*$("#cost-price-igt").prop("disabled", true);
	$('#customer_price').focusout( function() {
		$("#cost-price-igt").val('');
		$("#cost-price-igt").prop("disabled", false);
	});
	*/

	$("#factor-input").bind('submit',function() {		

		//var nameVal = $('#search-box-gr').val();
		
		
		var nameVal = $('#search-box-gr :selected').val().toLowerCase();	
		
		if ( $('#size-igt').val() != '' ) { //document.getElementById("size-igt")
			var sizeVal = $('#size-igt').val();
			//console.log(sizeVal);
			//console.log(nameVal);

			$.post('cost_query.php',{name:nameVal, size:sizeVal}, function(data){
			
				var return_value = JSON.stringify(data); 
				//console.log(return_value);
				var flag = return_value.length;
				//console.log(flag);			

				if (flag < 25) {
					$("#cal-error-return").html(data);
				} else {
					$("#cost_price").html(data);
					if ( $("#cost_price").html() != '' ) {
						//var cost_price = $("#cost_price").html();
						$('#cost-price-igt').val($('#rt_cost').html());
					}
					
					//$("#cost-price-igt").prop("disabled", false);
					//$("#rt_cal_heading").append("<th>Cost Price</th>");
					//$("#rt_cal_input").append('<td><input type="text" name="cost" id="cost-price-igt" placeholder="Cost Price"></td>');
				}
			});
			
		} else if ( $('#watt-igt').val() != '' ) { // document.getElementById("watt-igt")
			var wattVal = $('#watt-igt').val();
			
			$.post('cost_query.php',{name:nameVal, watt:wattVal}, function(data){
			
				var return_value = JSON.stringify(data); 
				//console.log(return_value);
				var flag = return_value.length;
				//console.log(flag);			

				if (flag < 25) {
					$("#cal-error-return").html(data);
				} else {
					$("#cost_price").html(data);
					if ( $("#cost_price").html() != '' ) {
						//var cost_price = $("#cost_price").html();
						$('#cost-price-igt').val($('#rt_cost').html());
						$('#adjust-cost-price-igt').val($('#rt_cost').html());
					}
					//$("#cost-price-igt").prop("disabled", false);
					//$("#rt_cal_heading").append("<th>Cost Price</th>");
					//$("#rt_cal_input").append('<td><input type="text" name="cost" id="cost-price-igt" placeholder="Cost Price"></td>');
				}
			});
		}
		
		

		//clearAll();
		return false;

	});
});

$(function(){
	$('#profit-cal').on('click', function(){
		var customer_price = $("#customer_price").val();
		var cost_price = $("#cost-price-igt").val();
		var price_diff = ( customer_price - cost_price );
		var profit_margin_rate = ( price_diff / customer_price )  * 100;
		var best_price_25 = cost_price / (0.75);
		var best_price_30 =	cost_price / (0.7);	

		/*
		$("#profit-margin-result").html("<h3>Customer Price for <span>" + profit_margin_rate.toFixed(2) + "%</span> of PMR: <span>$" + customer_price + "</span></h3>");
		$("#best_price_25").html("<h3>Best Price for <span>25%</span> of PMR: <span>$" + best_price_25.toFixed(2) + "</span></h3>");
		$("#best_price_30").html("<h3>Best Price for <span>30%</span> of PMR: <span>$" + best_price_30.toFixed(2) + "</span></h3>");
		*/
		$('#cost_price_igt').html("Cost Price: <span>$" + cost_price +"</span>");
		$("#c_r_pmr").html("<span>" + profit_margin_rate.toFixed(2) + "</span>");
		$("#c_r_price").html("<span>" + customer_price + "</span>");
		
		$("#b_25_price").html("<span>" + best_price_25.toFixed(2) + "</span>");
		$("#b_30_price").html("<span>" + best_price_30.toFixed(2) + "</span>");
	});

	$('#clr-cal').on('click', function(){
		location.reload();
	});

});


$(function(){
	$('#adjust-profit-cal').on('click', function(){
		var target_pmr = $("#target_pmr").val();
		var adjust_cost_price = $("#adjust-cost-price-igt").val();

		var cal_denominator = 1 - ( target_pmr / 100 );
		//var cal_numerator = adjust_cost_price / cal_denominator;
		var cal_adjust_customer_price = adjust_cost_price / cal_denominator;		

		/*
		$("#profit-margin-result").html("<h3>Customer Price for <span>" + profit_margin_rate.toFixed(2) + "%</span> of PMR: <span>$" + customer_price + "</span></h3>");
		$("#best_price_25").html("<h3>Best Price for <span>25%</span> of PMR: <span>$" + best_price_25.toFixed(2) + "</span></h3>");
		$("#best_price_30").html("<h3>Best Price for <span>30%</span> of PMR: <span>$" + best_price_30.toFixed(2) + "</span></h3>");
		*/
		$('#result-customer-price').html("<h2>Adjusted Customer Price: <span>$" + cal_adjust_customer_price.toFixed(2) +"</span></h2>");		
	});

	$('#adjust-clr-cal').on('click', function(){
		location.reload();
	});

});
//////////////////////////////////////////////////////////////////////////////////// 



$(function() {	
	
	$("#filter_results").load("filter_query.php");//, {name:1, age:1}

	$("#filter_results").on ("click", ".pagination a", function (e){
		e.preventDefault();
		$(".loading-div").show();
		var page = $(this).attr("data-page");
		$("#filter_results").load("filter_query.php", {page:page}, function() {
			$(".loading-div").hide();
		});
	});

	/*$("#sort-tbl").on ("click", ".sort-tbl-tr a", function (e){
		e.preventDefault();
		var sort_date = $(this).val();
		var asc_desc = $(this).attr("data-date");
		alert(sort_date + " - " + asc_desc);
		$("#filter_results").load("filter_query.php", {sort_date:sort_date, asc_desc:asc_desc}, function() {
			if(asc_desc == 'ASC')
				$(this).attr("data-date", "DESC");
			else
				$(this).attr("data-date", "ASC");
		});
	});
	*/
	
});

/* line graph part */

$( function() {
	$( "#datepickerFrom-gr" ).datepicker({dateFormat: "yy-mm-dd"});	
});

$( function() {	
	$( "#datepickerTo-gr" ).datepicker({dateFormat: "yy-mm-dd"});
});

$(function() {
	$("#graph-chart").bind('submit',function() {
		$("#grh-error-return").empty();		

		var nameVal = $('#search-box-gr').val();	
		var dateFrom = $('#datepickerFrom-gr').val();
		var dateTo = $('#datepickerTo-gr').val();

		if( nameVal == '' && dateFrom == '' ) {
			$("#grh-error-return").html("ERROR-1 > Fill in name and start-date for search");
		} else if ( dateFrom == '' ) {
			$("#grh-error-return").html("ERROR-2 > Fill in start-date for search");
		} else {

			$.post('graph_query.php',{name:nameVal, dateFrom:dateFrom, dateTo:dateTo}, function(data){
			
				//var date_id = new Array();
				//var unit_price = new Array();
				var dataPoints = [];
				var unit_price;
				var max_unit_price;
				var min_unit_price;

				for(var i in data) {
					//date_id.push(data[i].date);
					//unit_price.push(data[i].unit_price);
					var date = Date.parse( data[i].date ) + 25200000; // added 7 hours subtracted due to summer time
					//console.log("date: " + date);
					var date_val = new Date( date ); 
					unit_price = parseFloat( data[i].unit_price );
					if(i == 0) {
						max_unit_price = min_unit_price = unit_price;
					} else {
						if(unit_price < min_unit_price) {
							min_unit_price = unit_price;
						} else if ( unit_price > max_unit_price ) {
							max_unit_price = unit_price;
						}
					}

					dataPoints.push({x: date_val, y: parseFloat( unit_price )});
				}

				/*for (var i in dataPoints){
					if( dataPoints[i].y == min_unit_price ) {
						dataPoints[i].y = min_unit_price;
					} else if ( dataPoints[i].y == max_unit_price ) {
						dataPoints[i].y = max_unit_price;
					}
					console.log(dataPoints[i]);
				}*/

				//console.log(min_unit_price);
				//console.log(max_unit_price);

				//data[i].unit_price
				
				//dataPoints.push({x: value[0], y: parseInt(value[1])});

				var chart = new CanvasJS.Chart("chartContainer", {
					theme: "light2",
					title: {
						text: "Sales Price Trend"
					},
					axisX:{
						valueFormatString: "MMM/YYYY",
						crosshair: {
							enabled: true,
							snapToDataPoint: true
						}
					},
					axisY: {
						title: "Prices ($)",
						crosshair: {
							enabled: true
						}
					},
					data: [{
						type: "line",
						dataPoints: dataPoints
					}]
				});

				chart.render();
				
				$('#max_price').html("<h1>Max_Price: $" + max_unit_price.toFixed(2) + "</h1>");
				$('#min_price').html("<h1>Min_Price: $" + min_unit_price.toFixed(2) + "</h1>");
				
				/*
				var ctx = $("#mycanvas");

				var chartdata = {
					labels: date_id,
					datasets: [
					  {
						label: "unit_price $",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(59, 89, 152, 0.75)",
						borderColor: "rgba(59, 89, 152, 1)",
						pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
						pointHoverBorderColor: "rgba(59, 89, 152, 1)",
						data: unit_price
					  }
					]
				};

				var LineGraph = new Chart(ctx, {
					type: 'line',
					data: chartdata,
					options: {
						scales: {
							xAxes: [{
								type: 'time',
								time: {
									displayFormats: {
										day: 'MM/DD/YY'
									}
								}
							}]
						},
						legend: {
							labels: {
								// This more specific font property overrides the global property
								fontColor: 'black'
							}
						}
					}
				});

				*/					

			});			
		}

		//clearAll();		
		return false;

	});
});

// reload the page where a graph is drawn for next graph
$(function(){
	$('#clrBtn').on('click', function(){
		location.reload();		
	});
});

/* end of line graph part */

/* Insert a new entry */
$(function() {
	$("#lets_insert").bind('submit',function() {		
	  
		var insertNameVal = $('#insertNameVal').val();
		var insertAgeVal = $('#insertAgeVal').val();

		$.post('insert_query.php',{iName:insertNameVal, iAge:insertAgeVal}, function(data){
						
			var return_value = JSON.stringify(data); 
			//console.log(return_value);
			var flag = return_value.length;
			//console.log(flag);			

			if (flag < 30) {
				$("#ins-error-return").html(data);
			} else 
				$("#insert_results").html(data);			
		});

		clearAll();
		return false;
	   
	});
});

/* Delete an entry */
$(function() {
	$("#lets_delete").bind('submit',function() {

		var yesFlag = confirm("Are you sure to delete?");

		if ( yesFlag == true ) {
			var deleteIdVal = $('#deleteIdVal').val();
			var deleteNameVal = $('#deleteNameVal').val();

			$.post('delete_query.php',{iId:deleteIdVal, iName:deleteNameVal}, function(data){
						
				var return_value = JSON.stringify(data); 			
				var flag = return_value.length;
				
				if (flag < 30) {
					$("#del-error-return").html(data);
				} else 
					$("#delete_results").html(data);			
			});			
		} else {
			alert("You've cancelled deletion!");
		}

		clearAll();
		return false;
		
	});
});


/* Update an entry */
$(function() {
	$("#lets_update").bind('submit',function() {

		var yesFlag = confirm("Are you sure to update?");

		if ( yesFlag == true ) {
			var updateIdVal = $('#updateIdVal').val();
			var updateNameVal = $('#updateNameVal').val();
			var updateAgeVal = $('#updateAgeVal').val();

			$.post('update_query.php',{iId:updateIdVal, iName:updateNameVal, iAge:updateAgeVal}, function(data){
						
				var return_value = JSON.stringify(data); 			
				var flag = return_value.length;
				
				if (flag < 31) {
					$("#upd-error-return").html(data);
				} else 
					$("#update_results").html(data);			
			});			
		} else {
			alert("You've cancelled update!");
		}

		clearAll();
		return false;	
		
	});
});

function clearAll() {
	// clean search input
	$('input[name=searchName]').val('');
	$('input[name=dateFrom]').val('');
	$('input[name=dateTo]').val('');
	// clean insert inputs
	$('input[name=insertName]').val('');
	$('input[name=insertAge]').val('');
	// clean delete inputs
	$('input[name=deleteId]').val('');
	$('input[name=deleteName]').val('');
	// clean update inputs
	$('input[name=updateId]').val('');
	$('input[name=updateName]').val('');
	$('input[name=updateAge]').val('');
	
	$("#ins-error-return").empty();
	$("#del-error-return").empty();
	$("#upd-error-return").empty();
	$("#search_results").empty();
	$("#insert_results").empty();
	$("#delete_results").empty();
	$("#update_results").empty();
}



function selectName(val) {
	$("#search-box").val(val);
	$("#suggestion-box").hide();
}