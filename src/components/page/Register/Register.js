import axios from "axios";
import React, { useRef, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { isEmail } from "validator";
import { register } from "../../../actions/auth";

const const_t = 4;

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [samepwdCheck, setSamepwdCheck] = useState("");

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const history = useHistory();

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccess(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(username, email, password1))
        .then(() => {
          setSuccess(true);
        })
        .catch(() => {
          setSuccess(false);
        });
    }
  };

  const validateForm = () => {
    return (
      username.length > 2 &&
      username.length < 21 &&
      password1 === password2 &&
      password1.length > 5 &&
      password1.length < 41
    );
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const data = axios
  //     .post("http://localhost:5000/register", {
  //       username: username,
  //       email: email,
  //       password: password1,
  //     })
  //     .then((response) => {
  //       setSuccess(true);
  //       return;
  //     })
  //     .catch((error) => {
  //       setError(JSON.stringify(error, null, 1));
  //       return error;
  //     });
  // };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Form onSubmit={handleRegister} ref={form}>
          {!success && (
            <div>
              <h3>Register</h3>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  validations={[required, vusername]}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  validations={[required, validEmail]}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password1"
                  placeholder="Enter password"
                  value={password1}
                  onChange={(e) => {
                    setPassword1(e.target.value);
                  }}
                  validations={[required, vpassword]}
                />
                <Form.Text className="text-muted">
                  (Your password must be at least 8 characters long)
                </Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Label>Confirmed password</Form.Label>
                <Form.Control
                  type="password"
                  name="password2"
                  placeholder="Enter password again"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  validations={[required, vpassword]}
                />
              </Form.Group>

              <Button block size="lg" type="submit" disabled={!validateForm()}>
                Register
              </Button>
              <p className="already-register text-right">
                Already registered <a href="/login">sign in?</a>
              </p>
            </div>
          )}

          {message && (
            <div>
              <Form.Group>
                <div
                  className={
                    success ? "alert alert-success" : "alert alert-danger"
                  }
                  role="alert"
                >
                  {message}
                </div>
              </Form.Group>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
};

export default Register;
