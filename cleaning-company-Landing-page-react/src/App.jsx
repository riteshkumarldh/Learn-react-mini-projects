// Components imports
import Header from "./components/Header";
import Hero from "./components/Hero";
import CompaniesLogo from "./components/CompaniesLogo";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <CompaniesLogo />
      </main>
    </div>
  );
}

export default App;
