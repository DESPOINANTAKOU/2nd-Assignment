import React, { useEffect, useState } from "react";
import styles from "styles/login.module.css";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from 'yup';
import Categories from "../../../components/categories";

export default function Login() {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  //the password and username must be states because the can change the UI
  const [clicked, setClicked] = useState<boolean>(false);
  //this state works as a flag for the api error possibility
  const [error, setError] = useState(false);


  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async  values => {
      console.log(values);
     const request = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values),
      }
      const response = await fetch('/api/login', request);
      const result = await response.json();
      if (result) {
        setIsLogged(true);
      } else {
        setError(true)
      }
    },
  });

  //shows us what errors we have done
  console.log(formik.errors);
  if (!isLogged){
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
  else {
    return (
      <>
        <Categories setLogged={setIsLogged} />
      </>
    )
  }
  
}
