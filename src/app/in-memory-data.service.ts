export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: "Mr. Nice" },
      { id: 12, name: "Narco" },
      { id: 13, name: "Bombasto" },
      { id: 14, name: "Celeritas" },
      { id: 15, name: "Magneta" },
      { id: 16, name: "RubberMan" },
      { id: 17, name: "Dynama" },
      { id: 18, name: "Dr IQ" },
      { id: 19, name: "Magma" },
      { id: 20, name: "Tornado" }
    ];
    return { heroes };
  }

  createMovies() {
    const movies = [
      {
        Title: "Guardians of the Galaxy Vol. 2",
        Year: "2017",
        Rated: "PG-13",
        Released: "05 May 2017",
        Runtime: "136 min",
        Genre: "Action, Adventure, Sci-Fi",
        Director: "James Gunn",
        Writer: "James Gunn, Dan Abnett, Andy Lanning",
        Actors: "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
        Plot:
          "The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.",
        Language: "English",
        Country: "USA",
        Awards: "Nominated for 1 Oscar. Another 12 wins & 42 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg",
        Ratings: [
          { Source: "Internet Movie Database", Value: "7.7/10" },
          { Source: "Rotten Tomatoes", Value: "83%" },
          { Source: "Metacritic", Value: "67/100" }
        ],
        Metascore: "67",
        imdbRating: "7.7",
        imdbVotes: "388,497",
        imdbID: "tt3896198",
        Type: "movie",
        DVD: "22 Aug 2017",
        BoxOffice: "$389,804,217",
        Production: "Walt Disney Pictures",
        Website: "https://marvel.com/guardians",
        Response: "True"
      }
    ];
    return movies;
  }
}
