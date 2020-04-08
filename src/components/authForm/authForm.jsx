import React, { useState, useEffect } from "react";
import { TextField, Button, Divider } from "@material-ui/core";
import styled from "styled-components";

const H1 = styled.h1`
  margin: 30px 0px;
  text-align: left;
  font-size: 25px;
  font-weight: 600;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const StyledTextField = styled(TextField)`
  margin: 5px 0px;
  width: 100%;
`;
const AuthButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  & > .-full {
    flex: 1;
  }
  & > .-margin {
    margin-left: 15px;
  }
  &.-last {
    margin-top: 20px;
  }
`;
const StyledDivider = styled(Divider)`
  width: 100%;
  margin: 25px 0px;
`;

const AuthForm = props => {
  const [isRegister, setIsRegister] = useState(props.type);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setIsRegister(props.type);
  }, [props]);

  const register = () => {
    props.register(email, password);
  };

  const signin = () => {
    props.signin(email, password);
  };

  return (
    <React.Fragment>
      <H1>{isRegister ? 'Register' : 'Sign in'} to Ecom</H1>
      <Form>
        <AuthButtons>
          <Button
            onClick={props.facebookAuth}
            className="-full"
            variant="contained"
            color="primary"
          >
            {isRegister ? 'Register' : 'Sign in'} with Facebook
          </Button>
          <Button
            onClick={props.googleAuth}
            className="-margin"
            variant="contained"
          >
            Google
          </Button>
        </AuthButtons>
        <StyledDivider variant="middle" />
        <StyledTextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <StyledTextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <AuthButtons className="-last">
          <Button onClick={e => setIsRegister(!isRegister)} color="primary">
            {isRegister ? "Sign in instead" : "Create account"}
          </Button>
          {isRegister ? (
            <Button onClick={register} variant="contained" color="primary">
              Create
            </Button>
          ) : (
            <Button onClick={signin} variant="contained" color="primary">
              Sign in
            </Button>
          )}
        </AuthButtons>
      </Form>
    </React.Fragment>
  );
};

export default AuthForm;
