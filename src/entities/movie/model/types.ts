type Genre = {
  name: string;
}

type Country = {
  name: string;
}

type Persons = {
  name: string;
  enProfession: string;
}

type Streaming = {
  name: string,
  logo: {
    url: string,
  }
  url: string
}

export interface Movie {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  genres: Genre[];
  countries: Country[];
  year: number;
  persons: Persons[];
  actors: string[];
  poster: {
    url: string;
  }
  rating: {
    kp: number;
    imdb: number;
  }
  watchability: {
    items: Streaming[]
  }
}

export interface MoviesApiResponse extends Movie {
  docs: Movie[];
  status: string;
  pages: number;
}
