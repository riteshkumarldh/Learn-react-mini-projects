import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages and components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<SingleRecipe />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
