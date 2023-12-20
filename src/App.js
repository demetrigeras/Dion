import './App.css';
import { Route, Routes} from "react-router-dom";
import { useState, useEffect } from 'react';

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
