//import statements
import React, {Component} from "react";
//import  "./index.css"
import { AppBar, Toolbar, Typography } from '@mui/material';

//using title as prop
const Header = ({ title }) => {
    //Using mui for title and styling
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h4">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  };

export default Header;