<?php
// Redirect to index.html for React SPA
// This ensures the React app loads properly on shared hosting

// Check if index.html exists
if (file_exists('index.html')) {
    // Read and output the index.html content
    readfile('index.html');
} else {
    // Fallback error message
    echo '<!DOCTYPE html>
<html>
<head>
    <title>CD Industries</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>CD Industries</h1>
    <p>Application files not found. Please ensure all files are uploaded correctly.</p>
</body>
</html>';
}
?>