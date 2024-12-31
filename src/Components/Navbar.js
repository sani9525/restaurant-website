import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link } from "react-router-dom";
import CartPage from "./CartPage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = ({ cart, setCart }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <a href="/">
        <img src={Logo} alt="" />
        </a>
      </div>
      <div className="navbar-links-container">
        <a href="/">Home</a>
        <a href="/Menu"> Menu</a>
        <a href="/about">About</a>
        <a href="/testimonials">Testimonials</a>
        <a href="/contact">Contact</a>

          <Link to="/cart">
<div style={{ position: "relative", display: "inline-block" }}>
  <div
    style={{
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "#f0f0f0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <BsCart2
      className="navbar-cart-icon"
      style={{ fontSize: "20px", color: "#333" }}
    />
  </div>
  <span
    style={{
      position: "absolute",
      top: "-5px",
      right: "-5px",
      backgroundColor: "green",
      color: "#fff",
      borderRadius: "50%",
      padding: "2px 6px",
      fontSize: "12px",
      fontWeight: "bold",
    }}
  >
    {cart.length}
  </span>
</div>

          </Link>

        <button className="primary-button"><a href="/Menu">Bookings Now</a></button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
