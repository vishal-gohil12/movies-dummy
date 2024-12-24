import axios from "axios";
import { Movie } from "../types/movie";

export async function fetchMovies(): Promise<Movie[]> {
  try {
    const response = await axios.get('https://dummyapi.online/api/movies');
    if (!response) {
      throw new Error('Failed to fetch movies');
    }
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
}
