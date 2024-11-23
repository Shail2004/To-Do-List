import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";
import '../styles/Profile.css'; // Import custom CSS for styling

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);

  return loading ? (
    <Loader />
  ) : (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-image">
          <img
            src="https://via.placeholder.com/150" // You can replace this with a real image URL
            alt="Profile"
          />
        </div>
        <div className="profile-details">
          <h1 className="profile-name">{user?.name}</h1>
          <p className="profile-email">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
