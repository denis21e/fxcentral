import React, { useState, useEffect } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TermsOfUse from './TermsOfUse';
import './UserProfile.css';

const UserProfile = ({ user, onLogout, setUser }) => {
  const [editMode, setEditMode] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState(user?.password); 
  const navigate = useNavigate();

  useEffect(() => {
    setName(user?.name || '');
    setEmail(user?.email || '');
  }, [user]); 

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:5000/api/user/${user._id}`, {
        name,
        email,
        password
      });

      if (response.status === 200) {
        console.log('User updated:', response.data);
        setUser({
            ...user,
            name,
            email,
            password
        }); 
        setEditMode(false);
        alert('User updated successfully');
      } else {
        alert('Failed to update user');
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/user/${user._id}`);
      if (response.status === 200) {
        alert('User deleted successfully');
        onLogout();
        navigate('/'); 
      } else {
        alert('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <Container id="user-profile-container">
      <h1 id="user-profile-title">User Profile</h1>
      {editMode ? (
        <Form id="user-profile-form" onSubmit={handleEdit}>
          <Form.Group controlId="formName" className="form-group">
            <Form.Label id="form-name-label">Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="form-name-input"
            />
          </Form.Group>
          <Form.Group controlId="formEmail" className="form-group">
            <Form.Label id="form-email-label">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="form-email-input"
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="form-group">
            <Form.Label id="form-password-label">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="form-password-input"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3" id="save-changes-button">
            Save Changes
          </Button>
          <Button variant="secondary" onClick={() => setEditMode(false)} className="mt-3 ms-2" id="cancel-button">
            Cancel
          </Button>
        </Form>
      ) : (
        <div id="user-profile-info">
          <p id="user-name"><strong>Name:</strong> {name}</p>
          <p id="user-email"><strong>Email:</strong> {email}</p>
          <Button variant="primary" onClick={() => setEditMode(true)} id="edit-button">
            Edit
          </Button>
          <Button variant="danger" onClick={handleDelete} className="ms-2" id="delete-button">
            Delete Account
          </Button>
          <Button variant="secondary" onClick={onLogout} className="ms-2" id="logout-button">
            Logout
          </Button>
          <Button variant="info" onClick={() => setShowTerms(!showTerms)} className="ms-2" id="terms-button">
            Terms of Use
          </Button>
        </div>
      )}
      {showTerms && <TermsOfUse />}
    </Container>
  );
};

export default UserProfile;