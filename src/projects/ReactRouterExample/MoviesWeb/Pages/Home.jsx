import { useEffect, useState } from "react";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const TRENDING_MOVIES_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=Avengers&type=movie`;

      try {
        const response = await fetch(TRENDING_MOVIES_URL);
        const data = await response.json();

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setError(data.Error);
        }
      } catch (error) {
        setError(`Failed to fetch movies. ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎬 Welcome to Movie Flex</h1>
      <p style={styles.subtitle}>
        Discover the latest and greatest movies, reviews, and recommendations.
      </p>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🔥 Trending Movies</h2>

        {loading && <div style={styles.loader}></div>}
        {error && <p style={styles.error}>{error}</p>}

        <div style={styles.movieGrid}>
          {movies.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/250x300"
                }
                alt={movie.Title}
                className="poster"
              />
              <p className="movie-title">
                {movie.Title} ({movie.Year})
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {

    padding: "20px",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
    animation: "fadeIn 1s ease-in-out",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "20px",
  },
  section: {
    marginTop: "20px",
  },
  sectionTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#1e3a8a",
    marginBottom: "15px",
  },
  loader: {
    width: "50px",
    height: "50px",
    border: "5px solid #1e3a8a",
    borderTop: "5px solid transparent",
    borderRadius: "50%",
    margin: "20px auto",
    animation: "spin 1s linear infinite",
  },
  error: {
    color: "red",
    fontSize: "1.2rem",
    marginTop: "10px",
  },
 
  movieGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px",
    justifyContent: "center",
  },
};

const globalStyles = `
  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(-10px); }
    100% { opacity: 1; }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .movie-card {
    width: 250px; /* Fixed width for consistency */
    height: 350px; /* Fixed height for uniformity */
    text-align: center;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation: fadeIn 1s ease-in-out;
    margin: auto;
  }

  .movie-card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  .poster {
    width: 100%;
    height: 80%;
    object-fit: cover; /* Ensures all images are the same size */
    border-radius: 10px;
  }

  .movie-title {
    font-weight: bold;
    font-size: 1.6rem;
    color: #333;
    margin-top: 10px;
  }

  /* Make sure cards align nicely on different screens */
  @media (max-width: 1024px) {
    .movie-card {
      width: 220px;
      height: 320px;
    }
  }

  @media (max-width: 768px) {
    .title {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1rem;
    }

    .movie-card {
      width: 100%;
      max-width: 280px;
      height: 350px;
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerHTML = globalStyles;
document.head.appendChild(styleSheet);
