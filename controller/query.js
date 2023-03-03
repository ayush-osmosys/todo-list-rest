const createIfNotExist =
  "CREATE TABLE IF NOT EXISTS tasks_table(id SERIAL PRIMARY KEY,name VARCHAR NOT NULL,status DEFAULT 'in-progress')";
