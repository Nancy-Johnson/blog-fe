import Home from "./pages/home/home";
import TopBar from "./components/topbar/TopBar";
/*import Login from "./pages/login/Login";*/
/*import Register from "./pages/register/Register";*/
/*import Settings from "./pages/settings/Settings";*/
/*import Single from "./pages/single/Single";*/
/*import Write from "./pages/write/Write";*/
import { BrowserRouter as Router, Switch, Route, Link}  from "react-router-dom";

function App() {
  return (
    
     <Router>
     <TopBar/>
     <Switch>
      <Route path="/">
        <Home />
      </Route>
     </Switch>
    </Router>
      
    
  );
}

export default App;
