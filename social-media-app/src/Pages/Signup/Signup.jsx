import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../store/Slices/authSlice";


function Signup() {
  // states for inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  //  functions
const dispatch = useDispatch();

  const handleSignup = () => {

    // get user from input fieds 
    const user = {
      name,
      email,
      password,
      address,
      phone,
      gender,
    };

    console.log("signup data is received",user);
    dispatch(signup(user))

   
  };

  return (
    <div>
      <h1>Sign up </h1>
      <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} /> 
      <br />
      <input type="email" placeholder="email"   onChange={(e) => setEmail(e.target.value)}/>
      <br />
      <input type="password" placeholder="password"   onChange={(e) => setpassword(e.target.value)} />
      <br />
      <input type="text" placeholder="address"   onChange={(e) => setAddress(e.target.value)}/>
      <br />
      <input type="text" placeholder="phone"  onChange={(e) => setPhone(e.target.value)} />
      <br />
      <div>
        <input type="radio" name="gender" value="male"  onClick={() => setGender("male")} />
        <label htmlFor="">Male</label>
        <input type="radio" name="gender" value="female" onClick={() => setGender("female")} />
        <label htmlFor="">Femail</label>
      </div>
      <button onClick={handleSignup}>Signup </button>
    </div>
  );
}

export default Signup;
