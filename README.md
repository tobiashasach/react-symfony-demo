# Symfony React Demo

---

## Requirements

| Name            | Version |
| --------------- | ------- |
| nodejs          | 23.11.1 |
| npm             | 10.9.2  |
| php             | 8.4.8   |
| php - pdo_mysql |         |
| composer        | 2.8.9   |
| symfony cli     | 5.11.0  |
| docker          | 28.1.1  |
| docker-compose  | 2.35.1  |

---

## Setup (unix)

At first start the required docker containers with

- `docker compose up -d`

Switch to the frontend directory, install the dependencies and run vite dev server with

- `cd frontend; npm i; npm run dev`

Open a new terminal and switch to the backend directory

- `cd backend`

Install the dependencies

- `composer install`

Create the database

- `symfony console doctrine:database:create`

Migrate the schema

- `symfony console doctrine:migrations:migrate`

Start the symfony dev server

- `symfony server:start`

---

**Important:** This repository is for demonstration purposes only.
