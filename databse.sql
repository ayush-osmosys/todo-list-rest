CREATE database todo_database;

CREATE table task_table (task_id SERIAL PRIMARY KEY,task_name VARCHAR NOT NULL, status VARCHAR default "in_progress",description VARCHAR);