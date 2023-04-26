import Header from "../components/Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/firebaseContext";

const Home = () => {
  const { isLoggedIn } = useFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate, isLoggedIn]);

  return (
    <main>
      <Header />
      <div>
        <h1>Content</h1>
      </div>
    </main>
  );
};

export default Home;
