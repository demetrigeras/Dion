import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import { createProfile } from '../services/Profile';

const Home = ({ user }) => {
  const navigate = useNavigate();
  const [ProfileData, setProfileData] = useState({
    user: user?.id, 
    name: "",
    photo: "",
    bio: "",
    DOB: "",
  });

  useEffect(() => {
    if (user) {
      setProfileData(prevData => ({ ...prevData, user: user.id }));
    } else {
      navigate('/create-profile');
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userProfile = await createProfile(ProfileData);
      console.log('Profile created:', userProfile);
      navigate('/dionhp'); // Redirect to the main page after creating profile
    } catch (error) {
      console.error('Error creating profile:', error);
    }
  };

  return (
    <div className="Home">
      test
      {user ? (
        <>
          <Nav user={user} />

          <h1>Create Profile</h1>
          <form onSubmit={handleSubmit}>
  <div className="dionProfile">
    <div className="form-group">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={ProfileData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
    </div>

    <div className="form-group">
      <label htmlFor="photo">Photo URL:</label>
      <input
        type="text"
        id="photo"
        name="photo"
        value={ProfileData.photo}
        onChange={handleChange}
        placeholder="Enter photo URL"
      />
    </div>

    <div className="form-group">
      <label htmlFor="bio">Bio:</label>
      <textarea
        id="bio"
        name="bio"
        value={ProfileData.bio}
        onChange={handleChange}
        placeholder="Write a brief bio"
      />
    </div>

    <div className="form-group">
      <label htmlFor="DOB">Date of Birth:</label>
      <input
        type="date"
        id="DOB"
        name="DOB"
        value={ProfileData.DOB}
        onChange={handleChange}
      />
    </div>

    <button type="submit" className="submit-button">Create Profile</button>
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
