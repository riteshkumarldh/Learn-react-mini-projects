// Components imports
import Header from "./components/Header";
import Hero from "./components/Hero";
import CompaniesLogo from "./components/CompaniesLogo";
import AppDescription from "./components/AppDescription";
import Services from "./components/Services";
import Customers from "./components/Customers";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <CompaniesLogo />
        <AppDescription />
        <Services />
        <Customers />
      </main>
      <Footer />
    </div>
  );
}

export default App;
