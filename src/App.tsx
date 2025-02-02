import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PetsStoreProvider } from "./services/PetsStore";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

import "./App.css";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <PetsStoreProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Note: In React Router v6, `exact` isn't needed. */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </PetsStoreProvider>
  );
}
