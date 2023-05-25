// popup.js

// Function to fetch movie data from a CSV file
async function fetchMovieData() {
    try {
      const response = await fetch('movies.csv'); // Replace '/path/to/movies.csv' with the actual path to the movies.csv file
      const data = await response.text();
      return data;
    } catch (error) {
      console.error('Error fetching movie data:', error);
      return null;
    }
  }
  
  // Function to preprocess the movie data and generate recommendations
  function generateRecommendations(movieName, moviesData, similarity) {
    // Process the movie data and generate recommendations
    // Replace this with your actual movie recommendation logic
    const recommendedMovies = ['Movie 1', 'Movie 2', 'Movie 3']; // Placeholder recommendations
    return recommendedMovies;
  }
  
  // Function to display the recommended movies in the popup window
  function displayRecommendations(recommendedMovies) {
    const recommendationsContainer = document.getElementById('recommendations');
    recommendationsContainer.innerHTML = '';
  
    for (let i = 0; i < recommendedMovies.length; i++) {
      const movieElement = document.createElement('p');
      movieElement.textContent = (i + 1) + '. ' + recommendedMovies[i];
      recommendationsContainer.appendChild(movieElement);
    }
  }
  
  // Handle form submission
  async function handleFormSubmit(event) {
    event.preventDefault();
  
    // Get the movie name from the input field
    const movieInput = document.getElementById('movie-input');
    const movieName = movieInput.value;
  
    // Fetch movie data and generate recommendations
    const moviesData = await fetchMovieData();
    const similarity = cosineSimilarity(moviesData);
  
    const recommendedMovies = generateRecommendations(movieName, moviesData, similarity);
  
    // Display the recommended movies
    displayRecommendations(recommendedMovies);
  }
  
  // Add event listener to the form
  document.addEventListener('DOMContentLoaded', function() {
    const movieForm = document.getElementById('movie-form');
    movieForm.addEventListener('submit', handleFormSubmit);
  });
  