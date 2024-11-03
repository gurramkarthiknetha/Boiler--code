import { createContext, useState } from "react";

export const LoginContextObj = createContext();

function LoginContext({ children }) {
  // state
  const [userLoginStatus, setUserLoginStatus] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [err, setErr] = useState(null);

  function handleUserLogin(obj) {
    console.log(obj);

    // Reset error state before each login attempt
    setErr(null);

    // Fetch user data
    fetch(`http://localhost:3000/users?username=${obj.username}&password=${obj.password}`, { method: "GET" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((users) => {
        if (users.length !== 0) {
          setUserLoginStatus(true);
          setCurrentUser(users[0]);
        } else {
          setErr({ message: "Invalid username or password." });
        }
      })
      .catch((error) => setErr({ message: error.message }));
  }

  function userLogout() {
    setCurrentUser(null);
    setUserLoginStatus(false);
    setErr(null);
  }

  return (
    <LoginContextObj.Provider
      value={{
        handleUserLogin,
        setCurrentUser,
        userLogout,
        userLoginStatus,
        currentUser,
        err,
      }}
    >
      {children}
    </LoginContextObj.Provider>
  );
}

export default LoginContext;
