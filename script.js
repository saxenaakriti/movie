// ========================================================
// BASIC JAVASCRIPT FOR MOVIE NIGHT 
// ========================================================
let favourites=JSON.parse(localStorage.getItem("favourites")) || [];
let watchlist= JSON.parse(localStorage.getItem("watchlist")) || [];

// 1. Array of movie objects containing movie details
const movies = [
  {
    title: "Inception",
    genre: "Sci-Fi",
    rating: 8.8,
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
    description: "A skilled thief steals secrets from inside people's dreams using secret dream-sharing technology."
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    rating: 9.0,
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    description: "Batman faces the Joker, a criminal mastermind who creates chaos across the streets of Gotham City."
  },
  {
    title: "3 Idiots",
    genre: "Comedy",
    rating: 8.4,
    poster: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    description: "Two friends search for their long-lost college companion while recalling their wild engineering college days."
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    rating: 8.7,
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    description: "A team of brave explorers travel through a wormhole in space to ensure humanity's survival on a new planet."
  },
  {
    title: "Coco",
    genre: "Animation",
    rating: 8.4,
    poster: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80",
    description: "An aspiring young musician named Miguel embarks on an extraordinary journey to the magical Land of the Dead."
  },
  {
    title: "Dangal",
    genre: "Drama",
    rating: 8.3,
    poster:"images/dangal.jpg",
    description: "An ex-wrestler trains his two daughters to become world-class wrestling champions against all social odds."
  }
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
          alert(title + "added to favourites");
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
            
