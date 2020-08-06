import React from "react";

import CloseIcon from "@material-ui/icons/Close";
import styles from "./Auth.module.css";

const Auth = (props) => {
  return (
    <div className={styles.authContainer}>
      <CloseIcon fontSize="large" style={{position: "absolute", top: "0", right: "15px", marginTop: "1rem", marginLeft: "1rem", cursor: "pointer"}} onClick={props.onCancel}/>
      <h2>{props.authMode ? "Login" : "Signup"}</h2>
      {props.authMode ? (
        <form className={styles.formGroup} action="/login" method="POST">
          <input
            className={styles.emailInput}
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="false"
            required
          />
          <input
            className={styles.passInput}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button className={styles.authBtn} type="submit">
            Login
          </button>
        </form>
      ) : (
        <form className={styles.formGroup} action="/signup" method="POST">
          <input
            className={styles.nameInput}
            type="text"
            name="f-name"
            placeholder="First Name"
            autoComplete="false"
            required
          />
          <input
            className={styles.nameInput}
            type="text"
            name="l-name"
            placeholder="Last Name"
            autoComplete="false"
            required
          />
          <input
            className={styles.emailInput}
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="false"
            required
          />
          <input
            className={styles.passInput}
            type="password"
            name="password"
            placeholder="Create Password"
            required
          />
          <input
            className={styles.passInput}
            type="password"
            name="password"
            placeholder="Confirm Password"
            required
          />
          <button className={styles.authBtn} type="submit">
            Signup
          </button>
        </form>
      )}
      <p>
        or{" "}
        <button onClick={props.authSwitch} className={styles.authSwitchBtn}>
          {props.authMode ? "Create an account" : "Log into your account"}
        </button>
      </p>
    </div>
  );
};

export default Auth;
