import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { checkRequire, checkEmail, checkMobile, checkPassword } from "./Checks";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import swal from "sweetalert";
import Footer from "./Footer";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  mainroot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 20,
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    fontSize: 32,
  },
}));

function SignUpForm(props) {
  const classes = useStyles();
  const [getFirstName, setFirstName] = useState("");
  const [getLastName, setLastName] = useState("");
  const [getEmail, setEmail] = useState("");

  const [getFirstNameMsg, setFirstNameMsg] = useState("");
  const [getLastNameMsg, setLastNameMsg] = useState("");
  const [getEmailMsg, setEmailMsg] = useState("");
  const [getPasswordMsg, setPasswordMsg] = useState("");
  const [getConfirmPasswordMsg, setConfirmPasswordMsg] = useState("");
  const [getMsg, setMsg] = useState("");

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const [CPvalues, setCPValues] = React.useState({
    confirmPassword: "",
    showConfirmPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  ////////////////////////////
  const handleChangeCP = (prop) => (event) => {
    setCPValues({ ...CPvalues, [prop]: event.target.value });
  };

  const handleClickShowConfirmPassword = () => {
    setCPValues({
      ...CPvalues,
      showConfirmPassword: !CPvalues.showConfirmPassword,
    });
  };

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    setFirstNameMsg("");
    setLastNameMsg("");
    setEmailMsg("");
    setPasswordMsg("");
    setConfirmPasswordMsg("");

    var err = false;
    if (!checkRequire(getFirstName)) {
      err = true;
      setFirstNameMsg(
        <font color="red" size="2">
          <i>Please enter your First Name</i>
        </font>
      );
    } else if (!checkRequire(getLastName)) {
      err = true;
      setLastNameMsg(
        <font color="red" size="2">
          <i>Please enter your Last Name</i>
        </font>
      );
    } else if (getEmail.length == 0) {
      err = true;
      setEmailMsg(
        <font color="red" size="2">
          <i>Please enter your Email Id</i>
        </font>
      );
    } else if (!checkEmail(getEmail)) {
      err = true;
      setEmailMsg(
        <font color="red" size="2">
          <i>Invalid Email Id</i>
        </font>
      );
    } else if (values.password.length == 0) {
      err = true;
      setPasswordMsg(
        <font color="red" size="2">
          <i>Please enter your Password</i>
        </font>
      );
    } else if (!checkPassword(values.password)) {
      err = true;
      setPasswordMsg(
        <font color="red" size="2">
          <i>
            Password must be alphanumeric and between 8-20 characters! Allowed
            special characters are !@#$%^&*
          </i>
        </font>
      );
    } else if (CPvalues.confirmPassword.length == 0) {
      err = true;
      setConfirmPasswordMsg(
        <font color="red" size="2">
          <i>Please re-enter your password</i>
        </font>
      );
    } else if (!checkPassword(CPvalues.confirmPassword)) {
      err = true;
      setConfirmPasswordMsg(
        <font color="red" size="2">
          <i>
            Password must be alphanumeric and between 8-20 characters! Allowed
            special characters are !@#$%^&*
          </i>
        </font>
      );
    } else if (values.password != CPvalues.confirmPassword) {
      err = true;
      setConfirmPasswordMsg(
        <font color="red" size="2">
          <i>
            Confirm password you entered doesnot match to your original password
          </i>
        </font>
      );
    }

    if (!err) {
      if (values.password == CPvalues.confirmPassword) {
        let body = {
          firstname: getFirstName,
          lastname: getLastName,
          emailaddress: getEmail,
          password: values.password,
        };
        console.log("BODYYYYYYYYYY ", body);
        localStorage.setItem(
          "User",
          JSON.stringify({
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.emailaddress,
            password: body.password,
          })
        );
        swal("Record Save Successfully", "Success", {
          buttons: false,
        });
        props.history.replace({ pathname: "/SignIn" });
      } else {
        setMsg("Fail to submit Record ..");
      }
    } else {
      swal("Error Occurred", "error", {
        button: false,
      });
    }
  };

  return (
    <div>
      <div className={classes.mainroot}>
        <div
          style={{
            display: "flex",
            padding: 20,
            borderRadius: "2%",
            background: "#FFFFFF",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={6}>
              <img src="images/signup.jpg" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <h1>Sign Up</h1>
                  <h4>Please enter your details.</h4>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="firstname"
                    placeholder="Your First Name"
                    name="firstname"
                    //autoComplete="email"
                    autoFocus
                    size="small"
                    onChange={(event) => {
                      setFirstName(event.target.value);
                    }}
                  />
                  {getFirstNameMsg}
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="lastname"
                    placeholder="Your Last Name"
                    name="lastname"
                    //autoComplete="email"
                    autoFocus
                    size="small"
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                  />
                  {getLastNameMsg}
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    placeholder="Enter your Email Id"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    size="small"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                  {getEmailMsg}
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth="true" size="small">
                    {/*<InputLabel htmlFor="outlined-adornment-password"></InputLabel>*/}
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      placeholder="Enter your Password"
                      onChange={handleChange("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      //labelWidth={70}
                    />
                  </FormControl>
                  <small>
                    Use 8 or more characters with a mix of letters & numbers
                  </small>
                  <br />
                  {getPasswordMsg}
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth="true" size="small">
                    {/*<InputLabel htmlFor="outlined-adornment-password"></InputLabel>*/}
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={
                        CPvalues.showConfirmPassword
                          ? "text"
                          : "confirmPassword"
                      }
                      value={CPvalues.confirmPassword}
                      placeholder="Confirm Password"
                      onChange={handleChangeCP("confirmPassword")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseDownConfirmPassword}
                            edge="end"
                          >
                            {CPvalues.showConfirmPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      //labelWidth={70}
                    />
                    {getConfirmPasswordMsg}
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                    onClick={() => handleSubmit()}
                  >
                    Submit
                  </Button>
                  {getMsg}
                </Grid>

                <Grid item xs={12}>
                  <h4>
                    <img src="images/whatsapp.jpg" width="35" height="35" />
                    Enable order updates and important information on Whatsapp
                    <FormControlLabel control={<Checkbox name="checkedC" />} />
                  </h4>
                  <Divider orientation="horizontal" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <Grid container>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
            }}
          >
            <small>
              By continuing you agree to our&nbsp;
              <font color="red"> Terms of service</font>
              <br /> and
              <font color="red">&nbsp; Privacy & Legal Policy.</font>
            </small>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default SignUpForm;
