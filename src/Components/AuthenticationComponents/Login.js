import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouteLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  signIn: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
}));

function Login() {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Button
            color="primary"
            fullWidth
            variant="contained"
            className={classes.signIn}
          >
            Sign in using Google
          </Button>
          <Typography component="p" variant="p">
            or Sign in with your email
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  placeholder="Enter you email"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="current password"
                  name="password"
                  variant="outlined"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  placeholder="Enter you password"
                />
              </Grid>
            </Grid>
            <Button
              color="primary"
              fullWidth
              variant="contained"
              className={classes.signIn}
              component={RouteLink}
              to="/details"
            >
              Sign in
            </Button>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Link variant="body2" href="#">
                  Forget Password
                </Link>
              </Grid>
              <Grid item>
                <Link variant="body2" href="/resume-builder-client/signUp">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Login;
