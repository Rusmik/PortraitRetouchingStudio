<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

//From
$mail->setFrom('ruslanmikhnev27@gmail.com', 'Creator');
//To
$mail->addAddress('graniteportraitart@gmail.com');
//Subject
$mail->Subject = 'Mail Subject';

//Letter body
$body = '<h1>You have a new message</h1>';

// Check and append fields if they are not empty
if(trim(!empty($_POST['name']))){
	$body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))){
	$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['phone']))){
	$body.='<p><strong>Phone:</strong> '.$_POST['phone'].'</p>';
}
if(trim(!empty($_POST['message']))){
	$body.='<p><strong>Message:</strong> '.$_POST['message'].'</p>';
}

//Attachments
if (!empty($_FILES['image']['tmp_name'])) {
	//file downloading path
	$filePath = __DIR__ . "/files/" . $_FILES['image']['name'];
	//file download
	if (copy($_FILES['image']['tmp_name'], $filePath)) {
		$fileAttach = $filePath;
		$body.='<p><strong>Picture in attachment</strong></p>';
		$mail->addAttachment($fileAttach);
	}
}

$mail->Body = $body;

//Sending
if (!$mail->send()) {
	$message = 'Error';
} else {
	$message = 'Your message is sent';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>
