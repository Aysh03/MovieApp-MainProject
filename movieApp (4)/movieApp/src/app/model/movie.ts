export interface Movie {
  dates: Dates;
  page: number;
  results?: ResultsEntity[] | null;
  total_pages: number;
  total_results: number;
}
export interface Dates {
  maximum: string;
  minimum: string;
}
export interface ResultsEntity {
  name: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[] | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  key: string;
  site: string;
  type: string;
}

// id
// :
// "63bdfd087d2bc10cfe79b7f5"
// iso_639_1
// :
// "en"
// iso_3166_1
// :
// "US"
// key
// :
// "bEoNNYyVNxc"
// name
// :
// "Who is Your Favourite Fearless Hero? Extended Preview"
// official
// :
// true
// published_at
// :
// "2023-01-06T17:00:31.000Z"
// site
// :
// "YouTube"
// size
// :
// 1080
// type
// :
// "Clip"
