<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
	<title>Rental Form Validation</title>
</head>
<body>
<?php # Script 2.5 - handle_form.php (4th version after Scripts 2.2, 2.3, & 2.4)
//Validate the Return Location Information
	if (!empty($_REQUEST['PICKUP_LOCATION_CODE'])) {
	$locationCode = stripslashes($_REQUEST['PICKUP_LOCATION_CODE']);
	$messageForReturnLocation = "valid";
} else {
	$streetAddress = stripslashes($_REQUEST['PICKUP_STREET_ADDRESS']);
	$cityName = stripslashes($_REQUEST['PICKUP_CITY_NAME']);
	if ($streetAddress && $cityName && ($_REQUEST['PICKUP_STATE'] != '0'))
	{
		
	$messageForReturnLocation = "valid";
 
} 	else
	{
		$messageForReturnLocation = NULL;
		echo '<p><font color="red">Either enter Address code or the Street/City/State Details!</font></p>';
	}
}
	
// Validate the name and combat Magic Quotes, if necessary.
if (!empty($_REQUEST['FIRST_NAME'])) {
	if (!preg_match("/^[a-zA-Z ]*$/",($_REQUEST['FIRST_NAME']))) {
		$name = NULL;
      echo '<p><font color="red">Only letters and white space allowed in First Name</font></p>'; 
    }
    else
    {
    		$name = stripslashes($_REQUEST['FIRST_NAME']);
    }
} else {
	$name = NULL;
	echo '<p><font color="red">You forgot to enter your first name!</font></p>';
}

// Validate the email and combat Magic Quotes, if necessary.
if (!empty($_REQUEST['EMAIL_ADDRESS'])) {
	 // check if e-mail address is well-formed
    if (!filter_var(($_REQUEST['EMAIL_ADDRESS']), FILTER_VALIDATE_EMAIL)) {
    	$email = NULL;
    	echo '<p><font color="red">Invalid email format!!</font></p>';
    }
    else
    {
	$email = $_REQUEST['EMAIL_ADDRESS'];
}
} else {
	$email = NULL;
	echo '<p><font color="red">You forgot to enter your email address!</font></p>';
}

// Validate the last name and combat Magic Quotes, if necessary.
if (!empty($_REQUEST['LAST_NAME'])) {
	if (!preg_match("/^[a-zA-Z ]*$/",($_REQUEST['LAST_NAME']))) {
		$lastname = NULL;
      echo '<p><font color="red">Only letters and white space allowed in Last Name</font></p>'; 
    }
    else
    {
    		$lastname = stripslashes($_REQUEST['LAST_NAME']);
    }
} else {
	$lastname = NULL;
	echo '<p><font color="red">You forgot to enter your last name!</font></p>';
}

// Validate Car selection radio button.
if (isset($_REQUEST['CAR_GROUP_CODE'])) {

	$carselection = $_REQUEST['CAR_GROUP_CODE'];
	if (!empty($_REQUEST['CAR_GROUP_CODE'])) {
	$carselection =($_REQUEST['CAR_GROUP_CODE']);
	} 
	else { // Unacceptable value.
		$message = NULL;
		echo '<p><font color="red">Gender should be either "M" or "F"!</font></p>';
	}
	
} else { // $_REQUEST['carselection'] is not set.
	$carselection = NULL;
	echo '<p><font color="red">You forgot to select the car selection!</font></p>';
}
// If everything is okay, print the message.
if ($name && $email && $carselection && $lastname && $messageForReturnLocation) {

	echo "<p>Thank you, <b>$name $lastname</b> for reserving the rental car with us!!!<br />
	<tt><p>The car you selected was <b><i>$carselection</i></b>.</p></tt></p>
	<p>We will reply to you at <i>$email</i>.</p>\n";
	
} else { // One form element was not filled out properly.
	echo '<p><font color="red">Please go back and fill out the form again.</font></p>';
}

?>
</body>
</html>