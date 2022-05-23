import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { UserContext } from "./components/Contexts/UserContext";
import { useState } from "react";
import Page404 from "./components/Page404";
import SignUp from "./components/SignUp";
import SearchPage from "./components/SearchPage";
import HomePage from "./pages/HomePage";

function App() {
  const [User, setUser] = useState(false);

  return (
    <div className="App">
      <UserContext.Provider value={{ User, setUser }}>
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <HomePage />
            <Footer />
          </Route>
          <Route path="/search/:searchTerm">
            <Navbar />
            <SearchPage />
            <Footer />
          </Route>
          {!User && (
            <>
              <Route Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
            </>
          )}
          <Route to="*">
            <Page404 />
          </Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
