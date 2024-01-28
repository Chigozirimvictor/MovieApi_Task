class Movie {
    constructor(title, director, releaseYear, genre, price) {
      this.title = title;
      this.director = director;
      this.releaseYear = releaseYear;
      this.genre = genre;
      this.price = price;
      this.available = true;
    }
  }
  
  class MovieStore {
    constructor() {
      this.movies = [];
      this.rentedMovies = [];
    }
  
    addMovie(movie) {
      this.movies.push(movie);
    }
  
    rentMovie(title) {
      const index = this.movies.findIndex(movie => movie.title === title && movie.available);
      if (index !== -1) {
        this.movies[index].available = false;
        this.rentedMovies.push(this.movies[index]);
        console.log(`${title} rented successfully!`);
      } else {
        console.log(`${title} is not available for rent.`);
      }
    }
  
    returnMovie(title) {
      const index = this.rentedMovies.findIndex(movie => movie.title === title);
      if (index !== -1) {
        this.rentedMovies[index].available = true;
        this.rentedMovies.splice(index, 1);
        console.log(`${title} returned successfully!`);
      } else {
        console.log(`${title} is not currently rented.`);
      }
    }
  
    listAvailableMovies() {
      const availableMovies = this.movies.filter(movie => movie.available);
      console.log("Available Movies:");
      availableMovies.forEach(movie => console.log(movie.title));
    }
  
    listRentedMovies() {
      console.log("Rented Movies:");
      this.rentedMovies.forEach(movie => console.log(movie.title));
    }
  }
  
  // Example usage:
  const movieStore = new MovieStore();
  
  const movie1 = new Movie("Aquaman,The Lost Kingdom", "Christopher Nolan", 2023, "adventure, Action", 10);
  const movie2 = new Movie("Amazing Spiderman", "Frank Darabont", 1994, "Drama,Action", 8);
  const movie3 = new Movie("Fast and Furious", "De Rock", 2018, "Crime,Action", 8);
  
  movieStore.addMovie(movie1);
  movieStore.addMovie(movie2);
  movieStore.addMovie(movie3);
  
  movieStore.listAvailableMovies();
  
  movieStore.rentMovie("Aquaman, The Lost Kingdom");
  movieStore.rentMovie("Amazing Spiderman");
  movieStore.listRentedMovies();
  
  movieStore.returnMovie("Aquaman, The Lost Kingdom");
  movieStore.listAvailableMovies();