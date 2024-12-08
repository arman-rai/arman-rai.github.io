// doesn't work due to github hosting being a static site
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $recipient = "ultrauser0001@gmail.com";
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $sender_email = $_POST['email'];

    // Validate email
    if (!filter_var($sender_email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Compose email headers
    $headers = "From: $sender_email\r\n";
    $headers .= "Reply-To: $sender_email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

    // Send email
    if (mail($recipient, $subject, $message, $headers)) {
        echo "Email sent successfully";
    } else {
        echo "Failed to send email";
    }
} else {
    echo "Invalid request";
}
?>
