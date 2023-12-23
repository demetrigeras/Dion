import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import { getProfile, updateProfile } from '../services/Profile'; // Assuming updateProfile is a service function

const UserProfile = ({ user }) => {
  const navigate = useNavigate();
//   const [ProfileData, setProfileData] = useState(null);
  const [ProfileData, setProfileData] = useState({
    user: user.id, 
    name: '',
    photo: '',
    bio: '',
    DOB: '',
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    console.log("Current user:", user); // Debugging
    if (user && user.id) {
      fetchUserProfile(user.id);
    }
  }, [user]);

  const fetchUserProfile = async (id) => {
    try {
    //   console.log("Fetching profile for ID:", id); // Debugging
      const profile = await getProfile(id);
      setProfileData(profile);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user.id, ProfileData);
      setEditing(false);
      // Optionally, fetch the profile again to ensure the display is updated
      fetchUserProfile(user.id);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };


  return (
    <div className="UserProfile">
      <Nav user={user} />
      <h1>User Profile</h1>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <input 
            name="name" 
            value={ProfileData.name} 
            onChange={handleInputChange} 
            placeholder="Name" 
          />
          <input 
            name="photo" 
            value={ProfileData.photo} 
            onChange={handleInputChange} 
            placeholder="Photo URL" 
          />
          <textarea 
            name="bio" 
            value={ProfileData.bio} 
            onChange={handleInputChange} 
            placeholder="Bio" 
          />
          <input 
            type="date" 
            name="DOB" 
            value={ProfileData.DOB} 
            onChange={handleInputChange} 
          />
          <button type="submit">Save Changes</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </form>
      ) : (
        <div>
          <p>Name: {ProfileData.name}</p>
          <p>Email: {user?.email}</p>
          <img src={ProfileData.photo} alt="Profile" />
          <p>Bio: {ProfileData.bio}</p>
          <p>Date of Birth: {ProfileData.DOB}</p>
          <button onClick={() => setEditing(true)}>Edit Profile</button>
        </div>
      )}
      <button className="create-event" onClick={() => navigate('/create-event')}>Create Event</button>
    </div>
  );
};

export default UserProfile;
