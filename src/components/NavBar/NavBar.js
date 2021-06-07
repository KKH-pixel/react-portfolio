import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import "./style.css"


export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <div className="styles">
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuRoundedIcon></MenuRoundedIcon>K.K. Hunt
          </Button>
        </div>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >

          <MenuItem onClick={handleClose}>
            <Link
              to="/home"
              className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
            > Home </Link>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Link
              to="/projects"
              className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
            > About </Link>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Link
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            > Projects </Link>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            > Connect
            </Link>
          </MenuItem>
          
        </Menu>
    </div>
  );
}