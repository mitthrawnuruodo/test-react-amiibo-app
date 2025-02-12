import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import AmiiboList from "./components/AmiiboList";
import FavouritesPage from "./pages/FavouritesPage";
import { FavouriteProvider } from "./context/FavouriteContext";

const App = () => {
  const [amiibos, setAmiibos] = useState([]);

  useEffect(() => {
    fetch("https://www.amiiboapi.com/api/amiibo/")
      .then((response) => response.json())
      .then((data) => setAmiibos(data.amiibo.slice(0, 20))) // Limit to 20 items
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <FavouriteProvider>
      <BrowserRouter>
        <header style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "#eee" }}>
          <nav>
            <Link to="/" style={{ marginRight: "1rem" }}>🏠 Home</Link>
            <Link to="/favourites">❤️ Favourites</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<AmiiboList amiibos={amiibos} />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </BrowserRouter>
    </FavouriteProvider>
  );
};

export default App;