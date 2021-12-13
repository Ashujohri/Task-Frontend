import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import swal from "sweetalert";

// import {
//   getData,
//   ServerURL,
//   postData,
//   postDataAndImage,
// } from "../FetchNodeServices";
import Alert from "@material-ui/lab/Alert";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Ashutosh Johri
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    width: "100%",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const [adminID, setAdminId] = useState();
  const [getAlert, setAlert] = useState(false);
  const [password, setPassword] = useState();

  const handleClick = async () => {
    // var body = { adminid: adminID, password: password };
    let User = JSON.parse(localStorage.getItem("User"));
    if (password === User.password && adminID === User.email) {
      props.history.replace({ pathname: "/Dashboard" });
      // setAlert(false);
    } else {
      swal("Incorrect Credentials", "error", {
        buttons: false,
      });
    }
  };

  const handleGoToPage = () =>{
    props.history.replace({ pathname: "/SignUpForm" });
  }

  function AlertMsg() {
    return (
      <div>
        {getAlert ? (
          <div className={classes.root}>
            <Alert variant="filled" severity="error">
              Invalid UserID/Password
            </Alert>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          autoComplete="email"
          autoFocus
          onChange={(e) => setAdminId(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => handleClick()}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" onClick={() => handleGoToPage()} >
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </div>
      {AlertMsg()}
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
