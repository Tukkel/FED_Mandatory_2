import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

const LoginUrl = "http://localhost:7181/api/Account/login";

export interface UserCredentials {
  email: string;
  password: string;
}

interface MyTokenPayload {
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"?: string;
  [key: string]: any;
}

export function useValidateLogin(credentials: UserCredentials) {
  const [correctLogin, setCorrectLogin] = useState(false);
  const [manager, setManager] = useState(false);

  useEffect(() => {
    setCorrectLogin(false);
    setManager(false);
    if (credentials.email !== "" && credentials.password !== "") {
      handleLogin(credentials);
    }
  }, [credentials]);

  const handleLogin = async (credentials: UserCredentials) => {
    try {
      const response = await fetch(LoginUrl, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });
      if (response.ok) {
        const token = await response.json();
        localStorage.setItem("token", token.jwt);
        const decode: MyTokenPayload = jwtDecode(token.jwt);
        localStorage.setItem(
          "role",
          decode[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
          ] || ""
        );
        localStorage.setItem("modelId", decode["ModelId"] || "");
        if (localStorage.getItem("role") === "Manager") {
          setManager(true);
        }
        setCorrectLogin(true);
      } else {
        alert("Server returned: " + response.statusText);
      }
    } catch (err) {
      alert("Error: " + err);
    }
  };
  return { correctLogin, manager };
}
