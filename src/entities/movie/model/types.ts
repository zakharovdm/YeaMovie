type Genre = {
  name: string;
}

type Country = {
  name: string;
}

export interface Movie {
  id: number;
  name: string;
  description: string;
  genres: Genre[];
  countries: Country[];
  year: number;
  director: string;
  actors: string[];
  poster: {
    url: string;
  }
  rating: {
    kp: number;
    imdb: number;
  } 
}

export interface MoviesApiResponse {
  docs: Movie[];
  status: string;
}
