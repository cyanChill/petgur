import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PetsStoreProvider } from "./services/PetsStore";
import { Home } from "./pages/Home";

import "./App.css";

export default function App() {
  return (
    <PetsStoreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </PetsStoreProvider>
  );
}
