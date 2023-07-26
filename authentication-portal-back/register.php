<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = file_get_contents('php://input');
    $requestData = json_decode($data, true);

    if (!$requestData) {
        echo json_encode(["error" => "Invalid request data"]);
        exit();
    }

    $email = $requestData["email"];
    $password = $requestData["password"];

    // Validate Email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["error" => "Invalid email format"]);
        exit();
    }

    // Validate Password
    if (strlen($password) < 8) {
        echo json_encode(["error" => "Password must be at least 8 characters long"]);
        exit();
    }
    if (!preg_match("/[A-Z]/", $password)) {
        echo json_encode(["error" => "Password must contain at least one uppercase letter"]);
        exit();
    }
    if (!preg_match("/[a-z]/", $password)) {
        echo json_encode(["error" => "Password must contain at least one lowercase letter"]);
        exit();
    }
    if (!preg_match("/[0-9]/", $password)) {
        echo json_encode(["error" => "Password must contain at least one digit"]);
        exit();
    }
    if (!preg_match("/[!@#$%^&*()\-_=+{};:,<.>]/", $password)) {
        echo json_encode(["error" => "Password must contain at least one special character"]);
        exit();
    }

    $logData = date("Y-m-d H:i:s") . " - POST  ". PHP_EOL;
    file_put_contents("log.txt", $logData, FILE_APPEND);

    $userData = file_get_contents("users.txt");
    $userData = json_decode($userData, true);
    foreach ($userData as $user) {
        if ($user["email"] === $email) {
            echo json_encode(["message" => "User already exists"]);
            exit();
        }
    }

    $newUser = [
        "email" => $email,
        "password" => password_hash($password, PASSWORD_DEFAULT),
    ];
    $userData[] = $newUser;
    file_put_contents("users.txt", json_encode($userData));

    echo json_encode(["message" => "User registered successfully"]);
} else {
    echo json_encode(["error" => "Invalid request method"]);
}
?>