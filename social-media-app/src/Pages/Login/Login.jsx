import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/Slices/authSlice";

function Login() {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = {
      email,
      password,
    };
    dispatch(login(user));
  };

  return (
    <>
      <div>
        <h1>Login</h1>

        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
}

export default Login;
