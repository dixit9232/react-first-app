export const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎬 About MovieHub</h1>
      <p style={styles.subtitle}>
        MovieHub is your go-to platform for discovering the latest and greatest
        movies. Whether you&apos;re looking for trending films, reviews, or
        recommendations, we&apos;ve got you covered!
      </p>

      <div style={styles.aboutGrid}>
        <div className="about-card">
          <h2>🎥 Explore Movies</h2>
          <p>
            Browse a vast collection of movies from different genres and eras.
          </p>
        </div>

        <div className="about-card">
          <h2>⭐ User Reviews</h2>
          <p>
            Read and share reviews to help others find the best movies to watch.
          </p>
        </div>

        <div className="about-card">
          <h2>🎭 Discover Trends</h2>
          <p>Stay updated with the latest movie trends and top-rated films.</p>
        </div>
      </div>
    </div>
  );
};

// 🎨 CSS-in-JS Styles
const styles = {
  container: {

    padding: "40px 20px",
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
    marginBottom: "30px",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
};

// 🌟 Additional Global Styles
const globalStyles = `
  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(-10px); }
    100% { opacity: 1; }
  }

  .about-card {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    text-align: center;
  }

  .about-card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  .about-card h2 {
    color: #1e3a8a;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .about-card p {
    color: #555;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1rem;
    }

    .about-card {
      padding: 15px;
    }
  }
`;

// Inject global styles
const styleSheet = document.createElement("style");
styleSheet.innerHTML = globalStyles;
document.head.appendChild(styleSheet);
