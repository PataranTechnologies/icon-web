import React from "react";
import { Link } from "react-router-dom";

import CloseIcon from "@material-ui/icons/Close";
import {ReactComponent as GoogleIcon} from "../../assets/google.svg";
import styles from "./Auth.module.css";


const Auth = (props) => {
  return (
    <div className={styles.authContainer}>
      <CloseIcon
        fontSize="large"
        style={{
          position: "absolute",
          top: "0",
          right: "15px",
          marginTop: "1rem",
          marginLeft: "1rem",
          cursor: "pointer",
        }}
        onClick={props.onCancel}
      />
      <div className={styles.informationHeading}>Register to the website to download more icons</div>
      <h2>{props.authMode ? "Sign in" : "Sign up"}</h2>
      <p className={styles.socialNetwork}>with your social network</p>
      <Link to="/" className={styles.googleLinkContainer}><GoogleIcon/><span>Google</span></Link>
      <p className={styles.separator}>or</p>
      {props.authMode ? (
        <form className={styles.formGroup} action="/login" method="POST">
          <div className={styles.emailInput}>
          <input
            type="text"
            name="email"
            autoComplete="off"
            required
          />
          <label>Username or Email</label>
          </div>
          <div className={styles.passInput}>
          <input
            type="password"
            name="password"
            required
          />
          <label>Password</label> 
          </div>
          <div className={styles.secondarySection}>
            <div className={styles.stayLoggedInCheckbox}>
            <input type="checkbox" name="stayIn"/>
            <label>Keep me signed in</label>
            </div>
            <div className={styles.forgotPassword}>
              <Link to="/">Forgot Password?</Link>
            </div>
          </div>
          <button className={styles.authBtn} type="submit">
            Sign in
          </button>
        </form>
      ) : (
        <form className={styles.formGroup} action="/signup" method="POST">
          <div className={styles.nameInput}>
          <input
            type="text"
            name="username"
            autoComplete="off"
            required
          />
          <label>Username</label>
          </div>
          <div className={styles.emailInput}>
          <input
            type="email"
            name="email"
            autoComplete="off"
            required
          />
          <label>Email</label>
          </div>
          <div className={styles.passInput}>
          <input
            type="password"
            name="password"
            required
          />
          <label>Password</label> 
          </div>
          <button className={styles.authBtn} type="submit">
            Sign up
          </button>
        </form>
      )}
        <button onClick={props.authSwitch} className={styles.authSwitchBtn}>
          {props.authMode ? "Not a member? Sign up" : "Already Registered? Sign in"}
        </button>
    </div>
  );
};

export default Auth;
