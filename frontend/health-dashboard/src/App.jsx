// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Importing pages
import Dashboard from "./pages/Dashboard";
import Diets from "./pages/Diets";
import Recipes from "./pages/Recipes";
import Ingredients from "./pages/Ingredients";
import Workouts from "./pages/Workouts";
import Exercises from "./pages/Exercises";
import Metrics from "./pages/Metrics";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/diets" element={<Diets />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/metrics" element={<Metrics />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
