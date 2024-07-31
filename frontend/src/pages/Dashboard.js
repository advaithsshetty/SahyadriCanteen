import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { getUserProfile, updateUserProfile, isSignedIn } from '../services';

const ProfileDashboard = () => {
  const [profile, setProfile] = useState({});
  /*const [editMode, setEditMode] = useState(false);*/
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile();
        setProfile(data);
        setFormData(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(formData);
      setProfile(formData);
      /*setEditMode(false);*/
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <>
    { !isSignedIn() ? <h1>Loading...</h1> :
    <Container className="mt-4">
      <h2>Profile Dashboard</h2>
      <Row>
        <Col md="6">
          <Card>
            <Card.Header>Profile Details</Card.Header>
            <Card.Body>
              {/*editMode*/false ? (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name || ''}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email || ''}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formRole">
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                      type="text"
                      name="role"
                      value={formData.role || ''}
                      onChange={handleChange}
                    />
               </Form.Group>
                  <Button variant="primary" type="submit">Save Changes</Button>
                  <Button variant="secondary" onClick={() => /*setEditMode(false)*/false} className="ml-2">Cancel</Button>
                </Form>
              ) : (
                <>
                  <p><strong>Name:</strong> {profile.name}</p>
                  <p><strong>Email:</strong> {profile.email}</p>
                  <p><strong>Role:</strong> {profile.role}</p>
                  {false?<Button variant="primary" onClick={() => /*setEditMode(true)*/true}>Edit Profile</Button>:null}
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <Card.Header>Recent Activity</Card.Header>
            <Card.Body>
              <p>No recent activity.</p>     {/*TODO: Add recent activity*/}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    }
    </>
  );
};

export default ProfileDashboard;
