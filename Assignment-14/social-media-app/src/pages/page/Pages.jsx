import Home from "../home/Home"
import { Route, Routes } from "react-router-dom"
import Login from "../../components/Auth/Login.jsx"
import Register from "../../components/Auth/Register.jsx"
import Reset from "../../components/Auth/Reset.jsx"
import UserProfile from "../userProfile/UserProfile.jsx"


function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/profile/:id" element={<UserProfile />} />
      

      
    </Routes>
  )
}

export default Pages
