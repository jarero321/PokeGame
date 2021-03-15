import HomePage from "./components/HomePage";
import Game from "./components/Game"
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route  path="/Game" component={Game} />
        </div>
    </Router>
  );
}

export default App;
