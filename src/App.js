import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import { UserContext } from "./components/Contexts/UserContext";
import { useState } from "react";
import Page404 from "./components/Page404";
import SignUp from "./components/signup/SignUp";
import SearchPage from "./components/search/SearchPage";
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
