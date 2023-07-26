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

    $userData = file_get_contents("users.txt");
    $userData = json_decode($userData, true);
    
    $userFound = false;
    foreach ($userData as $user) {
        if ($user["email"] === $email && password_verify($password, $user["password"])) {
            $userFound = true;
            $userName = $user["email"];
            echo json_encode(["message" => "Login successful","userName" => $userName,"userFound" =>$userFound]);
            break;
        }
    }

    if (!$userFound) {

        echo json_encode(["error" => "Invalid email or password"]);
    }

} else {
    echo json_encode(["error" => "Invalid request method"]);
}
?>
