import axios from "axios";
import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";

import { isEmail } from "validator";

const const_t = 4;

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory();

  const validateForm = () => {
    return (
      username.length > 0 && password1 === password2 && password1.length > 0
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = axios
      .post("http://localhost:5000/register", {
        username: username,
        email: email,
        password: password1,
      })
      .then((response) => {
        setSuccess(true);
        return;
      })
      .catch((error) => {
        setError(JSON.stringify(error, null, 1));
        return error;
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Error modal */}
      <Modal show={error != null}>
        <Modal.Header>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{error != null ? error : null}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              setError(null);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* success banner, only shows if registration success */}
      <Modal show={success}>
        <Modal.Header>
          <Modal.Title>Logged in!</Modal.Title>
        </Modal.Header>
        <Modal.Body>User logged in!</Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              history.push({
                pathname: "/",
                state: { username: username },
              });
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <h3>Register</h3>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          autoFocus
          type="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          autoFocus
          type="email"
          placeholder="Enter username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          value={password1}
          onChange={(e) => {
            setPassword1(e.target.value);
          }}
        />
        <Form.Text className="text-muted">
          (Your password must be at least 8 characters long)
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Confirmed password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password again"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
      </Form.Group>

      {/* <Form.Group>
        <Form.Check
          name="genPasswordType"
          type="radio"
          label="Chaffing-by-tweaking"
          value="chaffing-by-tweaking"
          onChange={(e) => setGenPasswordType(e.target.value)}
          defaultChecked
        />
        <Form.Check
          name="genPasswordType"
          type="radio"
          label="Chaffing-with-a-password-model"
          value="chaffing-with-a-password-model"
          onChange={(e) => setGenPasswordType(e.target.value)}
        />

        <Form.Check
          name="genPasswordType"
          type="radio"
          label="Hybrid"
          value="hybrid"
          onChange={(e) => setGenPasswordType(e.target.value)}
        />
      </Form.Group> */}

      <Button block size="lg" disabled={!validateForm()} type="submit">
        Register
      </Button>
      <p className="already-register text-right">
        Already registered <a href="/login">sign in?</a>
      </p>
    </Form>
  );
}
