import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "styles/login.module.css";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from 'yup';

export default function Login() {
  //the password and username must be states because the can change the UI
  
  const [clicked, setClicked] = useState<boolean>(false);
  //this state works as a flag for the api error possibility
  const [error, setError] = useState(false);

  //part of the next router
  const router = useRouter();

const admin = "admin";

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().matches(admin).required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });

  //shows us what errors we have done
  console.log(formik.errors);
  
  return (
    <React.Fragment>
      <h1>Login Form</h1>
      <form action="" method="post" className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.inputContainer}>
          <label className={styles.span}>Username</label>
          <input
            id="username"
            name="username"
            value={formik.values.username}
            type="text"
            placeholder="Please insert your username"
            onChange={formik.handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.span}>Password</label>
          <input
            id="password"
            name="password"
            value={formik.values.password}
            type="password"
            placeholder="Please insert your password"
            onChange={formik.handleChange}
            className={styles.input}
            required
          />
        </div>
        <button  type="submit" className={styles.button} onClick={() => setClicked(true)}>
          Submit
        </button>
        {error ? <p>Invalid Username or Password</p> : ""}
      </form>
    </React.Fragment>
  );
}
