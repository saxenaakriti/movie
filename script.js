// ========================================================
// BASIC JAVASCRIPT FOR MOVIE NIGHT 
// ========================================================
document.addEventListener(DOMcontentLoaded", function() 
{
let favourites=JSON.parse(localStorage.getItem("favourites")) || [];
let watchlist= JSON.parse(localStorage.getItem("watchlist")) || [];

// 1. Array of movie objects containing movie details
const movies = [
  {
    title: "MATRIX",
    genre: "Sci-Fi",
    rating: 8.7,
    poster: "images/matrix.jpg",
    description:"The Matrix (1999) is a science-fiction action movie about Neo, a computer hacker who discovers that the world he knows is actually a simulated reality called the Matrix. He joins a group of rebels led by Morpheus and fights to uncover the truth and free humanity."
  },
  {
    title: "LA LA LAND",
    genre: "Romance",
    rating: 8.0,
    poster: "images/la la land.jpg",
    description:"La La Land (2016) is a romantic musical about Mia, an aspiring actress, and Sebastian, a passionate jazz pianist. As they pursue their dreams in Los Angeles, they fall in love while facing challenges that test their relationship and ambitions."
  },
  {
    title: "BRUCE ALMIGHTY",
    genre: "Comedy",
    rating: 6.8,
    poster: "images/bruce almighty.jpg",
    description:"Bruce Almighty (2003) is a comedy movie about Bruce, a frustrated TV reporter who is given God’s powers for a short time. At first, he uses them for personal gain, but he eventually learns important lessons about responsibility, life, and helping others."
  },
  {
    title: "INCEPTION",
    genre: "Thriller",
    rating: 8.8,
    poster: "images/inception.jpg",
    description:"Inception (2010) is a thriller about Dom Cobb, a skilled thief who enters people’s dreams to steal information. He is given a difficult mission to plant an idea in someone’s mind, leading to a complex journey through multiple layers of dreams."
  },
  {
    title: "IT",
    genre: "Horror",
    rating: 7.3,
    poster: "images/it.jpg",
    description:"IT (2017) is a horror movie about a group of children who face a terrifying creature called Pennywise, which appears as a clown. As children in their town mysteriously disappear, the group must overcome their fears and stand together against Pennywise."
  },
  {
    title: "FAST AND FURIOUS",
    genre: "Action",
    rating: 7.3,
    poster:"images/fast and furious.jpg",
    description:"Fast & Furious (2009) is an action movie about Dominic Toretto and Brian O’Conner, who become involved in an undercover mission involving dangerous criminals and illegal street racing. The movie combines fast cars, intense action, friendship, and loyalty."
  },
  {
   title: "THE DARK KNIGHT",
    genre: "Superhero",
    rating: 9.1,
    poster:"images/the dark knight.jpg",
    description:"The Dark Knight (2008) is a superhero crime thriller about Batman as he faces the Joker, a dangerous criminal who creates chaos in Gotham City. With the help of allies like Commissioner Gordon and Harvey Dent, Batman must confront difficult choices while trying to protect the city."
  },
  {
     title: "KUNG FU PANDA",
    genre: "Animation",
    rating: 7.6,
    poster:"images/kung fu panda.jpg",
    description:"Kung Fu Panda (2008) is an animated comedy about Po, a clumsy but determined panda who dreams of becoming a kung fu master. When he is unexpectedly chosen as the Dragon Warrior, he trains with the Furious Five and learns to believe in himself."
  },
  ];

// 2. Getting references to HTML elements using document.getElementById
const moviesContainer = document.getElementById("moviesContainer");
const searchInput = document.getElementById("searchInput");
const genreSelect = document.getElementById("genreSelect");
const noResults = document.getElementById("noResults");

// 3. Function to display movies on the webpage
function displayMovies(movieList) {
  moviesContainer.innerHTML = "";

  if (movieList.length === 0) {
    noResults.style.display = "block";
    return;
  } else {
    noResults.style.display = "none";
  }

  movieList.forEach(function (movie) {

    const card = document.createElement("div");
    card.className = "movie-card";

    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title} Poster">

      <div class="movie-info">

        <h3 class="movie-title">${movie.title}</h3>

        <div class="movie-meta">
          <span class="movie-rating">★ ${movie.rating}</span>
          <span class="movie-genre">${movie.genre}</span>
        </div>

        <p class="movie-description">${movie.description}</p>

        <div class="movie-actions">

          <button onclick="toggleFavourite('${movie.title}')">
            Favourite
          </button>

          <button onclick="toggleWatchlist('${movie.title}')">
            Watchlist
          </button>

        </div>

      </div>
    `;

    moviesContainer.appendChild(card);
  });
}

    

    

// 4. Function to filter movies by Search Title AND Genre
function filterMovies() {
  // Get what the user typed in search bar (in lowercase)
  const searchText = searchInput.value.toLowerCase().trim();

  // Get the selected genre from dropdown
  const selectedGenre = genreSelect.value;

  // Filter the movies array
  const filtered = movies.filter(function (movie) {
    // Condition 1: Check if title matches search text
    const titleMatches = movie.title.toLowerCase().includes(searchText);

    // Condition 2: Check if genre matches or if "All" is chosen
    const genreMatches = (selectedGenre === "All") || (movie.genre === selectedGenre);

    // Return true only if BOTH match
    return titleMatches && genreMatches;
  });

  // Call display function with the filtered list
  displayMovies(filtered);
}

// 5. Add Event Listeners for User Actions
// When user types in search input
searchInput.addEventListener("input", filterMovies);

// When user changes the genre dropdown
genreSelect.addEventListener("change", filterMovies);

// 6. Display all movies initially when the page first loads
displayMovies(movies);
function toggleFavourite(title)
{
   let favourites =
JSON.parse(localStorage.getItem("favourites")) || [];

    if (favourites.includes(title)) {
          favourites = favourites.filter(movie => movie !== title);
          alert(title + " removed from favourites");
     } else {
          favourites.push(title);
          alert(title + " added to favourites");
      }

  localStorage.setItem("favourites", JSON.stringify(favourites));
  }
  function toggleWatchlist(title)
  {
     let watchlist =
  JSON.parse(localStorage.getItem("watchlist")) || [];

      if (watchlist.includes(title)) {
             watchlist = watchlist.filter(movie => movie !== title);
          alert(title + " removed from watchlist");
       } else {
            watchlist.push(title);
            alert(title + " added to watchlist");
      }

  localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }
const themetoggle = document.getelementById("themetoggle");
themeToggle.addEventListener("click", function() { document.body.classList.toggle("dark-mode");
});

});

            
