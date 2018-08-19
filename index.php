<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<html lang="pt" dir="ltr">

  <head>
    <title>Profit Calculator</title>

    <meta HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=ISO-8859-1">
    <meta http-equiv="Content-Style-Type" content="text/css">

	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Latest compiled and minified CSS -->
	<!--link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"-->
	<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
	<link rel="stylesheet" href="asset/css/custom.css">
  </head>

  <body>

    <div class="header-section">
		<h1>PROFIT MARGIN RATE CALCULATOR</h1>
    </div>

	<div class="row-grid">
		<div class="col-md-12">
			<!-- Search Filter Section -->
			<div class="search-section">
				
				<!-- GRAPH SECTION -->
				<div class="col-sm-12">					
					<div class="cal-panel">						
						<form id="factor-input" action="">
							<table>
								<tr id="heading-inputs">
									<th>Product Name</th>
									<th id="heading-size">Size</th>
									<th id="heading-watt">Wattage</th>
								</tr>
								<tr id="search-inputs">
									<td>
										<select id="search-box-gr">
											<option selected="selected">--</option>
											<option>Cornbulb</option>
											<option>Down Light</option>
											<option>Flat Panel</option>
											<option>Flood Light</option>
											<option>Grow Light</option>
											<option>High Bay</option>
											<option>High Bay HV</option
											<option>Linear High Bay</option>
											<option>Shoebox</option>
											<option>Street Light</option>
											<option>Tube</option>
											<option>Wall Pack</option>											
										</select>
									
									<!--input type="text" name="searchName" id="search-box-gr" placeholder="Product Name" /-->
									</td>
									<td><input type="text" name="size" id="size-igt"  placeholder="Size"></td>
									<td><input type="text" name="wattage" id="watt-igt"  placeholder="Watt"></td>							
								</tr>
								<tr>
									<td><input type="submit" value="Submit" name="submit" id="submit"></td>
								</tr>
							</table>						
						</form>						
						
						<div id="cal-error-return"></div>
						
						<div id="profitCal-panel">
							<h5>IGT COST PRICE ($)</h5>	
							<div id="cost_price"></div>
							<div id="result_profit_margin_rate">
								
									<table>
										<tr id="rt_cal_heading">											
											<th>Customer Price</th>
											<th>Cost Price</th>
										</tr>
										<tr id="rt_cal_input">											
											<td><input type="text" name="customer_price" id="customer_price" placeholder="Customer Price" /></td>
											<td><input type="text" name="cost" id="cost-price-igt" placeholder="Cost Price"></td>
										</tr>
										<tr>
											<td><button id="profit-cal">Calculator</button></td>
											<td><button id="clr-cal">Clear</button></td>
										</tr>
									</table>
								
							</div>
						</div>
					</div>
				</div>				
			</div>			
		</div>

		<div class="profit-margin-result-section">
			<h1>Projected Profit-Margin-Rate(PMR)</h1>
			<div id="profit-margin-result">
				<table>
					<caption id="cost_price_igt">Cost Price:</caption>
					<tr>
						<th></th>
						<th>Customer Request</th>
						<th>Best Price (25)</th>
						<th>Best Price (30)</th>
					</tr>
					<tr>
						<td>PMR(%)</td>
						<td id="c_r_pmr"></td>
						<td id="b_25_pmr">25</td>
						<td id="b_30_pmr">30</td>
					</tr>
					<tr>
						<td>Price($)</td>
						<td id="c_r_price"></td>
						<td id="b_25_price"></td>
						<td id="b_30_price"></td>
					</tr>
				</table>
			</div>
			<!--div id="best_price_25"></div>
			<div id="best_price_30"></div-->
			<div class="adjust-customer-price">
				<fieldset>
					<legend>Calculate Target PMR</legend>
					<table>
						<tr id="adjust_cal_heading">
							<th>Slider Customer Price</th>
							<th>Target PMR</th>
							<th>Cost Price</th>
						</tr>
						<tr id="adjust_cal_input">
							<td><input type="range"id="prmVal" min="0" max="100" value="50" step="0.5"></td>
							<td><input type="text" name="customer_price" id="target_pmr" placeholder="Target PMR" /></td>
							<td><input type="text" name="cost" id="adjust-cost-price-igt" placeholder="Cost Price"></td>
						</tr>
						<tr>
							<td></td>
							<td><button id="adjust-profit-cal">Calculator</button></td>
							<td><button id="adjust-clr-cal">Clear</button></td>
						</tr>
					</table>
					<div id="result-customer-price"></div>
				</fieldset>				
			</div>
		</div>		
	</div>

	<!-- JQUERY FROM GOOGLE API -->    
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<!--script type="text/javascript" src="asset/js/moment.min.js"></script-->
	<!--script type="text/javascript" src="asset/js/Chart.min.js"></script-->	
	<!--script type="text/javascript" src="asset/js/showGraph.js"></script-->
	<script src="https://canvasjs.com/assets/script/jquery.canvasjs.min.js"></script>
	<script type="text/javascript" src="asset/js/custom.js"></script>
  </body>
</html>