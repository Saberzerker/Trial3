import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getUserProfile, updateUserProfile } from '../../services/ProfileService';

const ProfileWrapper = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
  }

  input, select {
    width: 100%;
    padding: 0.8rem;
    margin: 0.5rem 0;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    background: #1e1e1e;
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    width: 100%;
    padding: 0.8rem;
    margin: 1rem 0;
    background: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: 4px;
    color: #000;
    font-weight: bold;
    cursor: pointer;
  }
`;

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    age: '',
    weight: '',
    height: '',
    gender: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const data = await getUserProfile(userId);
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem('userId');
      await updateUserProfile(userId, profile);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile.');
    }
  };

  return (
    <ProfileWrapper>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={profile.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={profile.email}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={profile.age}
          onChange={handleChange}
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={profile.weight}
          onChange={handleChange}
        />
        <input
          type="number"
          name="height"
          placeholder="Height (m)"
          value={profile.height}
          onChange={handleChange}
        />
        <select
          name="gender"
          value={profile.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Update Profile</button>
      </form>
    </ProfileWrapper>
  );
};

export default ProfileForm;