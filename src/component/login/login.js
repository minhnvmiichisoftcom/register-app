import {
  Button,
  Container,
  FilledInput,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  OutlinedInput,
  TextField,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
    errorUsername: "",
    errorPassword: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function doSignIn() {
    let valueTmp = { ...values };
    if (values.username.length != 0) {
      valueTmp.errorUsername = ""
    } else {
      valueTmp.errorUsername = "Username is empty";
    }

    if (values.password.length != 0) {
      valueTmp.errorPassword = "";
    } else {
      valueTmp.errorPassword = "Password is empty";
    }
    setValues(valueTmp)
  }

  const navigate = useNavigate();

  const doCreateAccount = () => {
    navigate("/register");
  };

  return (
    <div className="container">
      <div className="flexLeft">
        <div className="boxFormControl">
          <div className="box1">
            <h1>Welcome Back</h1>
            <p>We Are Happy Have To You Back!</p>
          </div>
          <div className="box2">
            <TextField
              id="standard-error-helper-text"
              className="textField"
              value={values.username}
              onChange={handleChange("username")}
              error={values.errorUsername.length != 0}
              helperText={values.errorUsername}
              disableUnderline={true}
              label={"Username"}
            />
          </div>
          <div className="box3">
            <TextField
              className="textField"
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              error={values.errorPassword}
              helperText={values.errorPassword}

              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              disableUnderline={true}
              label="Password"
            />
          </div>
          <div className="box4">
            <Button className="button">Forgot password?</Button>
          </div>
          <div className="box5">
            <Button className="button" variant="contained" onClick={doSignIn}>
              Login
            </Button>
          </div>
          <div className="box6">
            <div className="boxContainer2">
              <div className="divide">.</div>
              <hr className="hr" />
              <p className="textOr">Or</p>
              <hr className="hr" />
              <div className="divide"></div>
            </div>
            <div className="boxContainer3">
              <div className="boxOtherLogin">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png" />
              </div>
              <div className="boxOtherLogin">
                <img src="https://www.mhpcolorado.org/wp-content/uploads/2021/02/TS-FB-Icon.png" />
              </div>
              <div className="boxOtherLogin">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flexRight">
        <div className="boxContainer">
          <div className="boxRight1">
            <img src="https://account.samsung.com/membership/assets/images/intro/intro_mbr.png" />
          </div>
          <div className="boxRight2">
            <h1>Don't Have An Account</h1>
          </div>
          <div className="boxRight3">
            <Button
              className="button"
              variant="outlined"
              onClick={doCreateAccount}
            >
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
