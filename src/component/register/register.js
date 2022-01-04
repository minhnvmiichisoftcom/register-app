import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    repassword: "",
    showPassword: false,
    errorUsername: "",
    errorPassword: "",
    errorRepassword: "",
    age: "",
    errorAge: "",
  });

  let navigate = useNavigate();

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

  const doCreateAccount = () => {
    let valueTmp = { ...values };
    if (values.username.length !== 0) {
      valueTmp.errorUsername = "";
    } else {
      valueTmp.errorUsername = "Username is empty";
    }

    if (values.password.length !== 0) {
      valueTmp.errorPassword = "";
    } else {
      valueTmp.errorPassword = "Password is empty";
    }

    if (values.repassword !== values.password) {
      valueTmp.errorRepassword = "re password not match";
    } else {
      valueTmp.errorRepassword = "";
    }
    if (values.age.length !== 0) {
      valueTmp.errorAge = "";
    } else {
      valueTmp.errorAge = "Age not selected";
    }
    if (
      valueTmp.errorRepassword.length === 0 &&
      valueTmp.errorPassword.length === 0 &&
      valueTmp.errorUsername.length === 0 &&
      valueTmp.errorAge.length === 0
    ) {
      navigate("/home");
    }
    setValues(valueTmp);
  };

  return (
    <div className="container">
      <div className="boxLeft">
        <div className="boxLeftImg">
          <img
            className="img"
            src="https://thumbs.dreamstime.com/b/account-creation-concept-icon-account-creation-concept-icon-secured-new-user-registration-idea-thin-line-illustration-protection-175556937.jpg"
          />
        </div>
        <div className="boxLeftTitle">
          <h1>Already have an account?</h1>
        </div>
        <div className="boxLeftButton">
          <Button variant="outlined">Sign In</Button>
        </div>
      </div>
      <div className="boxRight">
        <div className="boxRightTitle">
          <h1>Create Account</h1>
          <p>Get Started by creating your new account? </p>
        </div>
        <div className="boxRightInput">
          <TextField
            className="input"
            error={values.errorUsername}
            helperText={values.errorUsername}
            value={values.username}
            onChange={handleChange("username")}
          />
          <br />
          <TextField
            className="input"
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
          />
          <br />
          <TextField
            id="outlined-adornment-password"
            className="input"
            type={values.showPassword ? "text" : "repassword"}
            value={values.repassword}
            onChange={handleChange("repassword")}
            error={values.errorRepassword}
            helperText={values.errorRepassword}
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
          />
          <br />
          <Select
            className="input"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={values.age}
            onChange={handleChange("age")}
            helperText={values.errorAge}
            error={values.errorAge}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
        <div className="boxRightButton">
          <Button variant="contained" onClick={doCreateAccount}>
            Register
          </Button>
        </div>
        <div className="boxRightOption">
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
        <div className="boxRightOtherSignIn">
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
    </div>
  );
};

export default Register;
