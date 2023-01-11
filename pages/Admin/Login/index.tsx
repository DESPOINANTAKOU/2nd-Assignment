import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "styles/login.module.css";
import { Formik, Form, useField, useFormikContext } from "formik";

export default function Login() {
  //the password and username must be states because the can change the UI
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState<boolean>(false);
  //this state works as a flag for the api error possibility
  const [error, setError] = useState(false);
  //part of the next router
  const router = useRouter();

  const handleUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const submit = async (e: any) => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const result = await response.json();

    if (result) {
      // if (e) {
      //   e.preventDefault();
      // }
      router.push("/Admin/categories");
      return console.log("correct API call");
    } else {
      // if (e) {
      //   e.preventDefault();
      // }
      setError(true);
      return console.log("Api call");
    }
  };

  useEffect(() => {
    (_e: any) => {
      submit(_e);
    };
  }, [clicked]);

  return (
    <React.Fragment>
      <h1>Login Form</h1>
      <form action="" method="post" className={styles.form}>
        <div className={styles.formDivs}>
          <label className={styles.span}>Username</label>
          <input
            type="text"
            value={username}
            onChange={handleUsername}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formDivs}>
          <label className={styles.span}>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            className={styles.input}
            required
          />
        </div>
        <button className={styles.button} onClick={() => setClicked(true)}>
          Submit
        </button>
        {error ? <p>Invalid Username or Password</p> : ""}
      </form>
    </React.Fragment>
  );
}
