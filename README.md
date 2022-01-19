# The Shop v2

<small>By Leandro A. Roberto</small>

This version 2 of the original The shop uses ReactJS as frontend and PHP with Laravel 8 as backend. The original Auth part was totally rewriten in order to use JWT instead. The Controllers also have been converted to JSON endpoints and all the views are now handled by React.
The Models and Controllers names as the table names were kept in the original Brazilian Portuguese.
For the frontend, both Brazilian Portuguese and English is available.

This MVP contains the models below:

-   Product categories
-   Products
-   Cart
-   Client registration
-   Address Registration
-   Orders

## Server requirements

-   apache 2.4.x
-   mysql community server 5.7.x
-   php >= 7.4
-   php7.4-mbstring
-   php7.4-json
-   php7.4-zip
-   p7.4-xml
-   php7.4-curl
-   php7.4-mysql
-   php7.4-sqlite3
-   composer
-   node >= 16.13.x
-   npm >= 8.1
-   sqlite (for testing purposes)
-   git

## Install

git clone https://github.com/leandroqa/theshopv2

cd theshop

composer update

composer install

cp .env.example .env

**Set MySQL credentials into the .env file**

php artisan key:generate

**Create the database and run migations and seeds**

php artisan migrate

php artisan db:seed

## Install the frontend

Run npm install from **frontend** folder

npm install

## Testing

# Backend (PHP)

migrate the testing_database:

php artisan migrate --env=testing

Run tests:

php artisan test

# Frontend (React)

cd frontend and then run tests:

npm test

## Running the application

**Backend**

php artisan serve

**Frontend**

From **frontend** folder run the command:

npm start

## Database structure

The Shop V2 uses the same structure as first version.

<p align="center">
<img src="https://github.com/leandroqa/theshop/blob/master/docs/EstruturaBancoDados.png" alt="Banco de dados">
</p>

## Screenshots

<img src="https://github.com/leandroqa/theshopv2/blob/main/docs/screenShots/indexPagePTBR.png" alt="Index page PTBR">
