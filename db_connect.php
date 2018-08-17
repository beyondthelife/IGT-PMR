<?php

	define("HOST", "localhost");

	// Database user
	define("DBUSER", "root");

	// Database password
	define("PASS", "");//emfvnf0514

	// Database name
	define("DB", "smi_db");//ajaxsearch

	// Database Error - User Message
	define("DB_MSG_ERROR", 'Could not connect!<br />Please contact the site\'s administrator.');
	
	$conn = mysqli_connect(HOST, DBUSER, PASS, DB);

?>