<?php

// Set the path for your SQLite database file
$databasePath = 'myDB.db'; // The database file will be created in the same directory

// Create a new PDO instance for SQLite
try {
    $db = new PDO('sqlite:' . $databasePath);
    // Set error mode to exception
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Database connection established successfully!";
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Example: Creating a table
try {
    $db->exec("CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT,
        email TEXT
    )");
    echo "Table created successfully!";
      // Insert a sample user
      $db->exec("INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com')");
      echo "Sample user inserted successfully!<br>";
  
      // Retrieve and display users
      $result = $db->query("SELECT * FROM users");
      foreach ($result as $row) {
          echo "ID: " . $row['id'] . " - Name: " . $row['name'] . " - Email: " . $row['email'] . "<br>";
      }
} catch (PDOException $e) {
    die("Table creation failed: " . $e->getMessage());
}

// You can now perform other database operations with $db

?>
