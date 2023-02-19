import Home from "./pages/home/home";
import TopBar from "./components/topbar/TopBar";
/*import Login from "./pages/login/Login";*/
/*import Register from "./pages/register/Register";*/
/*import Settings from "./pages/settings/Settings";*/
/*import Single from "./pages/single/Single";*/
/*import Write from "./pages/write/Write";*/
import { BrowserRouter as Router, Routes, Route, Link}  from "react-router-dom";

function App() {
  return (
    
    <Router>
       <Routes>
       <Route path="/" element={<TopBar />} />
   
       </Routes>
      

      <Routes>
         <Route path="/" element={<Home />} />
        
       
      </Routes>
      <Link to="/"> </Link>
</Router>
    
  );
}

export default App;
