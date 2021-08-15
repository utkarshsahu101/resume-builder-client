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

function Registration() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Typography component="h3" variant="subtitle1">
            Let's create your account
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="fname"
                  name="firstname"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstname"
                  label="Firstname"
                  placeholder="Enter you firstname"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="lastname"
                  name="lastname"
                  variant="outlined"
                  required
                  fullWidth
                  id="lastname"
                  label="Lastname"
                  placeholder="Enter you lastname"
                  autoFocus
                />
              </Grid>
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
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="password"
                  name="password"
                  variant="outlined"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  placeholder="Enter you password"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="confirm password"
                  name="confirm_password"
                  variant="outlined"
                  required
                  fullWidth
                  id="confirm_password"
                  label="Confirm Password"
                  placeholder="Confirm you password"
                />
              </Grid>
            </Grid>
            <Button
              color="primary"
              fullWidth
              variant="contained"
              className={classes.signIn}
            >
              Sign in
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link variant="body2" href="/resume">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Registration;
