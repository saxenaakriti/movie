# 🎬 Movie Night - Movie Discovery Web App

A clean, responsive, and beginner-friendly Movie Discovery web application built using fundamental **HTML5**, **CSS3**, and vanilla **JavaScript**. 

Users can browse a curated collection of Hollywood and Bollywood movies, search movies dynamically by title in real-time, and filter titles by genre.

---

## 🌟 Features

- **Movie Cards Showcase**: Displays movie posters, titles, IMDb ratings, genre badges, and brief plot synopses.
- **Real-Time Search Bar**: Instantly filters movies as you type letters in the search bar.
- **Genre Filter Dropdown**: Easily filter movies by categories (Action, Sci-Fi, Drama, Comedy, Animation, or All Genres).
- **Dual Filtering Logic**: Allows searching by title and filtering by genre at the same time.
- **Mobile Responsive Design**: Clean CSS Grid layout that adapts seamlessly to desktop monitors, tablets, and smartphones.
- **No Results Feedback**: Shows a friendly alert message if no movies match the search or filter query.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic web page markup (`<header>`, `<main>`, `<select>`, `<input>`, `<footer>`).
- **CSS3**: Custom styling, Flexbox for navigation/controls, CSS Grid for responsive movie cards, and media queries for mobile devices.
- **JavaScript (ES6)**: 
  - Array of movie objects
  - DOM selection (`document.getElementById`)
  - Dynamic element rendering (`innerHTML`, `appendChild`)
  - Array methods (`.filter()`, `.forEach()`, `.includes()`)
  - Event listeners (`input` and `change` events)

---

## 📂 Project Structure

```text
├── index.html        # Main HTML structure of the application
├── style.css         # Styling, dark theme colors, and responsive grid
├── script.js         # Movie data, DOM manipulation, search & filter logic
├── EXPLANATION.md    # Beginner-friendly code explanation & viva questions
└── README.md         # Project documentation
