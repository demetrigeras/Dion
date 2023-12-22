import Nav from "../components/Nav.jsx";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { createProfile } from "../services/Profile.js";

const Home = ({ user }) => {

const [ProfileData, setProfileData] = useState({
    name:"",
    photo: "",
    bio: "",
    DOB: "",
}) 

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const userProfile = await createProfile(ProfileData);
    console.log('Profile created:', userProfile);

  } catch (error) {
    console.error('Error creating profile:', error);
  }
}


  return (
    <div className="Home">
      {user ? (
        <>
          <Nav user={user} />

          <h1>Create Profile</h1>
          <form>
            <div className="dionProfile">
            </div>
          </form>

        </>
      ) : (
        <div className="dion-screen">
          <div className="image-container"></div>
          <div className="dion">
            <div className="homepage">
              <header> Welcome to Dion</header>
            </div>
            <div className="signInorOut">
              <NavLink className="sign-up-nav" to="/sign-up">
                Sign Up
              </NavLink>
              <NavLink className="sign-in-nav" to="/sign-in">
                Sign In
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
