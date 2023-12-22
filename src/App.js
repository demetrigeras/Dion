import './App.css';
import { Route, Routes} from "react-router-dom";
import { useState, useEffect } from 'react';
import Home from "./screens/Home.jsx";
import SignUp from "./screens/SignUp.jsx";
import SignIn from "./screens/SignIn.jsx";
import SignOut from "./screens/SignOut.jsx";
import Nav from "./components/Nav.jsx";
import { verifyUser } from "./services/user.js";


function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  return (
    <div className="App">
     <Routes> 
      <Route path="/" element={<Home user={user} />} />  
      <Route path="/sign-up" element={<SignUp setUser={setUser} />} />
      <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
      <Route path="/sign-out" element={<SignOut setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
