import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { lazy} from "react";

const Home = lazy(() => import("./pages/Homepage"));
const Project = lazy(() => import("./pages/project"));

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
