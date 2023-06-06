<?php
$receiver = "Recceiver email adress here";
$subject = "Email Test via PHP using Localhost";
$body = "Hi there. This is a test email from Localhost.";
$sender = "From:sender email adress here";

if(mail($receiver, $subject, $body, $sender)) //De mail functie
{
    echo "Email sent successfully  to $receiver";
}

else
{
    echo "Sorry, failed while sending mail!";
}

?>