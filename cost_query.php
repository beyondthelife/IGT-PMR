<?php
//session_start();
if( isset($_POST) && isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest' ) {
	
	include_once 'includes/db_connect.php';
	//require_once("includes/functions.php");

	############## Make the mysql connection ###########

	if (!$conn) {
		die('Could not connect: ' . mysql_error());
	} /*else {
		echo "good";
	}*/	
	$query = '';
		
	// check if we have which search keywords were filled in using $_SESSION
	if( !empty($_POST['name']) ) {
		if ( !empty($_POST['size']) ) {
			$query = "SELECT cost_price FROM costs where product_name LIKE '%" . $_POST['name'] . "%' and product_size = '" . $_POST['size'] . "'";
			$queryRowCnt ="SELECT COUNT(*) FROM costs where product_name LIKE '%" . $_POST['name'] . "%' and product_size = '" . $_POST['size'] . "'";
		} elseif ( !empty($_POST['watt']) ) {
			$query = "SELECT cost_price FROM costs where product_name LIKE '%" . $_POST['name'] . "%'  and product_watt = '" . $_POST['watt'] . "'";
			$queryRowCnt = "SELECT COUNT(*) FROM costs where product_name LIKE '%" . $_POST['name'] . "%'  and product_watt = '" . $_POST['watt'] . "'";
		}
	} else {
		echo "Fill in words to search";
		return;
	}	

	$result = mysqli_query($conn, $query);	

	$total_result = $conn->query($queryRowCnt);//"SELECT COUNT(*) FROM sales where product_name = '" . $nameVal . "'"
	$get_total_rows = $total_result->fetch_row(); //hold total records in variable

	if ( $get_total_rows[0] > 0 ) {
		while( $data = mysqli_fetch_assoc( $result ) ) {		
			foreach ( $data as $key => $value ) {
				echo '<h1 id="rt_cost">' . number_format($value, 2) . '</h1>';
			}
		}
	} else {
		echo 'NO COST PRICE for "'. $_POST['name'] . '"';
	}


	mysqli_free_result( $result );	
	mysqli_close( $conn );
}
?>