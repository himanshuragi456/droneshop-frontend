import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile(props) {
  const { UserData } = props;

  return (
    <section className="profile">
      <div className="profile-sidebar">
        <Link to="/profile" className="profile-active">Profile</Link>
        <Link to="/transaction">Transaction</Link>
      </div>
      <div className="profile-info">
        <div className="profile-info-container">
          <img src={UserData.imageProfile} alt="User" />
          <div>
            <div className="user-detail">
              <p>Name</p>
              <h1>{UserData.fullName}</h1>
            </div>
            <div className="user-detail">
              <p>Email</p>
              <h1>{UserData.email}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
