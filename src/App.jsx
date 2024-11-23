import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
          <div className="container mx-auto px-4 py-8">
            <Navigation />
            <Home />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
