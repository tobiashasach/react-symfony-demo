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

## Setup (unix - apt pgk manager)

Execute all commands in the root directory in order.

1. `docker compose up -d`
2. `cd frontend; npm i; npm run dev;`
3. `cd backend; composer install; symfony server:start;`

**Important:** This repository is for demonstration purposes only.
