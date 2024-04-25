import { useEffect, useState } from "react";

const LoginUrl = "http://localhost:7181/api/Account/login";

export interface UserCredentials {
  email: string;
  password: string;
}

export function useValidateLogin(credentials: UserCredentials) {
  const [correctLogin, setCorrectLogin] = useState(false);

  useEffect(() => {
    setCorrectLogin(false);
    if (credentials.email !== "" && credentials.password !== "") {
      handleLogin(credentials);
    }
  }, [credentials]);

  const handleLogin = async (credentials: UserCredentials) => {
    try {
      let response = await fetch(LoginUrl, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });
      if (response.ok) {
        let token = await response.json();
        localStorage.setItem("token", token.jwt);
        setCorrectLogin(true);
      } else {
        alert("Server returned: " + response.statusText);
      }
    } catch (err) {
      alert("Error: " + err);
    }
  };
  return { correctLogin };
}
