import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./pages/SignUp/SignUp";
import Search from "./pages/Search/Search";

function App() {
  return (
    // The Router component is the top-level component that is used to set up the router. It is
    // wrapping the entire application.
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
