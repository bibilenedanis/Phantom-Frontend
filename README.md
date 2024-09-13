# Phantom Frontend

## Description
This project is a web application that integrates with PocketBase for backend services.

## Technologies Used
- [Jigsaw (Static Site Generator)](https://jigsaw.tighten.com/)
- PHP
- JavaScript (Pure)
- CSS (Tailwind CSS)
- NPM for javascript package management
- Composer for PHP package management
- Swiper.js for sliders
- Nosleep.js for keeping the screen on
- laravel-mix for asset compilation

## Installation

1. Clone the repository:
```sh
git clone https://github.com/bibilenedanis/Phantom-Frontend.git
cd Phantom-Frontend
```

2. Install dependencies:
```sh
npm install
composer install
```

## Usage

1. Start the development server:
```sh
./start.sh
```

2. Open your browser and navigate to `http://localhost:8000`.

## File Structure

- `source/index.php`: Entry point for the application.
- in source/_assets:
  - `source/_assets/css`: Contains stylesheets.
  - `source/_assets/js`: Contains JavaScript files.
- Every page has its own js file in `source/_assets/js/pages` folder.
- JS routes are defined in `source/_assets/js/routes.js`.
- Storage for user data is in `source/_assets/js/storage.js`. Which uses localStorage.