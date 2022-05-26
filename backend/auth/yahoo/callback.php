<?php
//echo '<pre>';
//var_dump($_REQUEST);
//exit;

$code = filter_input(INPUT_GET, 'code');

if($code){
	
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL,"https://api.login.yahoo.com/oauth2/get_token");
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, 
			  http_build_query(array(	  
					'client_id' => 'dj0yJmk9a1ZxN281TWRuMlRvJmQ9WVdrOVZHTk5SRU5STTFBbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTNl',
					'client_secret' => '2daafa447d943b655d75b86d5c8071b1c8caa564',
					'redirect_uri' => 'https://uniquerewards.webexp.site/auth/yahoo/callback.php',
					'code' => $code,
					'grant_type' => 'authorization_code'
			)));
				
	curl_setopt($ch, CURLOPT_HTTPHEADER, array(
		'Content-Type: application/x-www-form-urlencoded',
		'Authorization:Basic ZGoweUptazlhMVp4TjI4MVRXUnVNbFJ2Sm1ROVdWZHJPVlpIVGs1U1JVNVNUVEZCYldOSGJ6bE5RVDA5Sm5NOVkyOXVjM1Z0WlhKelpXTnlaWFFtYzNZOU1DWjRQVE5sOjJkYWFmYTQ0N2Q5NDNiNjU1ZDc1Yjg2ZDVjODA3MWIxYzhjYWE1NjQ='
	));


	// Receive server response ...
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	//curl_setopt($ch, CURLOPT_HEADER, 1);

	$server_output = curl_exec($ch);

	curl_close ($ch);

	//file_put_contents('data.json',$server_output);

	//echo '<pre>';
	//echo htmlspecialchars(print_r($server_output, true));
	//echo '<br><br><br><br><br><br>';
	$data = json_decode($server_output, true);
	$access_token = $data["access_token"] ?? '';
	
}


if($access_token){
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL,"https://social.yahooapis.com/v1/user/me/contacts?access_token=" . $access_token . '&format=json');
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$server_output = curl_exec($ch);
	curl_close ($ch);
	$data = json_decode($server_output, true);
	//echo '<pre>';
	$contacts = array_map(function($contact){		
		$name = '';
		$email = '';
		foreach($contact['fields'] as $field){
			if($field['type'] === 'name'){
				$name = $field['value']['givenName'];
			}
			if($field['type'] === 'email'){
				$email = $field['value'];
			}		
		};
		return [
			'name' => $name,
			'email' => $email
		];			
	}, $data['contacts']['contact']);
	
	//echo htmlspecialchars(print_r($contacts, true));
	//exit;

	setcookie("contacts", json_encode($contacts), time()+3600, '/', 'webexp.site');

	header('Location: https://uniquerewards.webexp.site/referals');
}








