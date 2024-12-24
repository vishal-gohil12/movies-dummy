import { useEffect, useState } from "react";
import { Film } from "lucide-react";
import { MovieGrid } from "./components/MovieGrid";
import { fetchMovies } from "./services/movieApi";
import type { Movie } from "./types/movie";

function App() {
  const [movie, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (err) {
        setError("Failed to load movies. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    loadMovies();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <Film className="h-8 w-8 text-blue-600" />
            <h1 className="ml-3 text-2xl font-bold text-gray-900">
              Movie Database
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MovieGrid movies={movie} isLoading={isLoading} error={error} />
      </main>
    </div>
  );
}

export default App;
