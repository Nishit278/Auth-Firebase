import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

function Dashboard(props) {
  const [error, setError] = useState();
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch (ex) {
      setError("Failed to log out");
    }
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong>
          {currentUser}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <Button
        variant="link"
        className="w-100 text-center mt-2"
        onClick={handleLogout}
        style={{ textDecoration: "none" }}
      >
        Log out
      </Button>
    </>
  );
}

export default Dashboard;
