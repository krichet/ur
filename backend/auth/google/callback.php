<?php

	//var_dump(setcookie("contacts", json_encode([['name' => '12121', 'email' => 'qwqw@qw.qw']]), time()+3600, '/', 'webexp.site'));
	//exit;
	
$code = filter_input(INPUT_GET, 'code');


$client_id = '1045871054557-8ot5op822soi3dba4h0sbuuoqdrh7aph.apps.googleusercontent.com';
$client_secret = '5zGExP6x76eSBwpRWoNI4Boj';
$redirect_uri = 'https://uniquerewards.webexp.site/auth/google/callback.php';
					
if($code){
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL,"https://accounts.google.com/o/oauth2/token");
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, 
			  http_build_query(array(	  
					'client_id' => $client_id,
					'client_secret' => $client_secret,
					'redirect_uri' => $redirect_uri,
					'code' => $code,
					'grant_type' => 'authorization_code'
			)));

	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

	$server_output = curl_exec($ch);

	curl_close ($ch);

	//echo '<pre>';
	//echo htmlspecialchars(print_r($server_output, true));
	//echo '<br><br><br><br><br><br>';
	$data = json_decode($server_output, true);
	$access_token = $data["access_token"] ?? '';	
}



//echo '<pre>';
//var_dump($access_token);
//exit;


if($access_token){
	$ch = curl_init();

	curl_setopt($ch, CURLOPT_URL,"https://content-people.googleapis.com/v1/people/me/connections?personFields=emailAddresses%2Cnames&key=AIzaSyAApPHyTPGJcbtSvcY5v8raMp5EDtCQGZ8");
	curl_setopt($ch, CURLOPT_HTTPHEADER, array(
		"Authorization: Bearer " . $access_token
	));
	
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$server_output = curl_exec($ch);
	curl_close ($ch);
	$data = json_decode($server_output, true);

	$contacts = array_map(function($contact){
		//var_dump($contact['names'][0]);
		$name = $contact['names'][0]['displayName'] ?? '';
		$email = $contact['emailAddresses'][0]['value']	?? '';
		return [
			'name' => $name,
			'email' => $email
		];
	}, $data['connections']);
	
	//echo '<br><br>';
	//echo '<pre>';
	//echo htmlspecialchars(print_r($data, true));
	//echo htmlspecialchars(print_r($contacts, true));
	
	//var_dump(setcookie("contacts", json_encode($contacts), time()+3600, '/', 'webexp.site'));
	//exit;
	
	setcookie("contacts", json_encode($contacts), time()+3600, '/', 'webexp.site');
	
	header('Location: https://uniquerewards.webexp.site/referals');
}








