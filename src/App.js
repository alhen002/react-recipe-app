import {BrowserRouter, Switch, Route} from "react-router-dom";

// page components
import {Home} from "./pages/Home/Home";
import {Create} from "./pages/Create/Create";
import {Search} from "./pages/Search/Search";
import {Recipe} from "./pages/Recipe/Recipe";
import {Navbar} from "./components/Navbar";

// import styles
import './App.css';



function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/recipes/:id">
              <Recipe />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
