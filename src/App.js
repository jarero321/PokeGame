import HomePage from "./components/HomePage";
import Game from "./components/Game"
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/Game" component={Game} />
      </div>
    </Router>
  );
}

export default App;
