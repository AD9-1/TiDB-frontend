import { useState } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/SignUp/Signup";
import Business from "./components/Business/Business";
import Login from "./components/Login/Login";

function App() {
  const [page, setPage] = useState("sign-up");
  return (
    <div className="App">
      <Navbar setPage={setPage} page={page} />

      <div className="App-middle">
        {(page === "sign-up" && <Signup setPage={setPage} />) ||
          (page === "business" && <Business setPage={setPage} />) ||
          (page === "login" && <Login setPage={setPage} />)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
