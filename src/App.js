import './App.css';
import { Route, Routes} from "react-router-dom";
import { useState, useEffect } from 'react';
import SignUp from "./screens/SignUp.jsx";
import SignIn from "./screens/SignIn.jsx";
import SignOut from "./screens/SignOut.jsx";
import Dionhp from "./screens/dionhp.jsx";
import Welcome from "./screens/welcome.jsx";
import CreateProfile from "./screens/Createprofile.jsx";
import UserProfile from "./screens/userProfile.jsx";
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
     <Route path="/" element= {<Welcome user={user} />} />  
      <Route path="/create-profile" element={<CreateProfile user={user} />} /> 
      <Route path="/dionhp" element= {<Dionhp user={user} />} /> 
      <Route path="/profile/:id" element= {<UserProfile user={user} />} /> 
      <Route path="/sign-up" element={<SignUp setUser={setUser} />} />
      <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
      <Route path="/sign-out" element={<SignOut setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
