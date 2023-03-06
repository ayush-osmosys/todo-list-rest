# TODO LIST REST

## Backend for basic CRUD app using REST API

### Set up  

create a file for your environment setup named **.env**  
CREATE THE FOLLOWING VARIABLES AND SPECIFY THEIR VALUES AS OR AS YOUVE CONFIGURED LOCALLY  
>PORT=5000  
>PGPORT=5423  
>PGUSER=postgres  
>PGPASSWORD=""  
>PGHOST=localhost  
>PGDATABASE=*todo_database*  

The app queries data from PostgreSQL database *todo_database* that has a table *task_table* that stores the task  
the *task* resource has the following fields:  

- task_id SERIAL PRIMARY KEY
- task_name VARCHAR
- description VARCHAR
- status VARCHAR default in_progress

make sure that your PostgreSQL database is up and running and it has the table named *task_table* as specified

```bash
git clone https://github.com/ayush-osmosys/todo-list-rest
npm i
npm run dev
```

The express server will start on *PORT* 5000 or as specified by you in .env

Based on *task* resource, the following endpoint exist in RESTful implementation of the API:

- GET /task
  - request:
  - response: list of all *tasks*s

- GET /task/:task_id
  - request:
    - param : task_id
  - response:
    - task_id
    - name
    - description
    - status

- POST /task
  - request:
    - body:
      - name (required)
      - description
      - status (default: *inprogress*)
  - response:
    - task_id
    - name
    - description
    - status

- PATCH /task/:task_id
  - request:
    - param : task_id
  - response:
    - task_id
    - name
    - description
    - status

- DELETE /task/:task_id
  - request:
    - param : task_id
  - response:
    - task_id
    - name
    - description
    - status
