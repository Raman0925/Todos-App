CREATE DATABASE todoapp;
CREATE TABLE todos(
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(30),
    progress INT,
    date VARCHAR(300)
);

CREATE TABLE users(
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);



-- Insert dummy data
INSERT INTO todos (id, user_email, title, progress, date)
VALUES
    ('1', 'user1@example.com', 'Task 1', 50, '2023-01-01'),
    ('2', 'user2@example.com', 'Task 2', 75, '2023-01-02'),
    ('3', 'user1@example.com', 'Task 3', 25, '2023-01-03'),
    ('4', 'user3@example.com', 'Task 4', 100, '2023-01-04'),
    ('5', 'user2@example.com', 'Task 5', 0, '2023-01-05');
