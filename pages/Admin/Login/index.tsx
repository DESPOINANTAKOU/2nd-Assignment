import { useState } from "react";
import { useRouter } from 'next/router';


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
      <span>Username</span>
      <input type="text" value={username} onChange={handleUsername} />
      <span>Password</span>
      <input type="password" value={password} onChange={handlePassword} />
      <button onClick={submit}>Submit</button>
     {error ? <p>Invalid Username or Password</p> : ""}
    </>
  );
}
