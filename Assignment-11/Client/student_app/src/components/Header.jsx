import React from 'react'

import {AppBar, Toolbar, styled} from "@mui/material"
import { NavLink } from 'react-router-dom';

const HeaderContainer= styled(AppBar)`
background: #000
`;
const Tabs = styled(NavLink)`
  margin: 0 10px;
  color: #fff;
  cursor:pointer;
   text-decoration: none;
    font-size: 20px;
`;
function Header() {
  return (
    <>
    <HeaderContainer position='static'>
      <Toolbar>
        <Tabs to="/" exact>Home</Tabs>
        <Tabs to="allstudents" exact>All Student</Tabs>
        <Tabs to="addstudent" exact>Add Student</Tabs>
      </Toolbar>
    </HeaderContainer>
    
    </>
  )
}

export default Header