import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Services } from "./Components/Services";
import Blog from "./Components/Blog";
import { Project } from "./Components/Project";
import Error404 from "./Components/Error404";
import About from "./Components/About";
import Team from "./Components/Team";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Error404" element={<Error404 />} />
          <Route path="/About" element={<About />} />
          <Route path="/Team" element={<Team />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
