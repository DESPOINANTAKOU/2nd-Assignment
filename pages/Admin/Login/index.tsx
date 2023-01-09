import { useState } from "react";
import { useRouter } from 'next/router';
import styles from 'styles/login.module.css';


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  

  const submit = async (_e: any) => {
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
    if(result){
        router.push("/Admin/categories");
    }
    else {
        setError(true);
    }
  };


  const handleUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <>
    <h1>Login Form</h1>
    <form action="" className={styles.form}>
      <div className={styles.formDivs}>
      <span className={styles.span}>Username</span>
      <input type="text" value={username} onChange={handleUsername} className={styles.input} /></div>
      <div className={styles.formDivs}>
      <span className={styles.span}>Password</span>
      <input type="password" value={password} onChange={handlePassword} className={styles.input}  /></div>
      <button className={styles.button} onClick={submit}>Submit</button>
     {error ? <p>Invalid Username or Password</p> : ""}
     </form>
    </>
  );
}
