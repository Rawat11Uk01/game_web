import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { IconButton, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="footertextdiv">
          <Typography align="center" className="whitecolortypo fs1rem">
            FAQ <span className="whitecolortypo pl10px fs1rem">Help</span>
          </Typography>
        </div>
        <div className="footericondiv">
          <Typography align="right">
            <IconButton>
              <FcGoogle className="fs2rem footericon " />
            </IconButton>
            <IconButton>
              <FaFacebook className="fs2rem  whitecolortypo footericon fbicon" />
            </IconButton>
            <IconButton>
              <FiTwitter className="fs2rem  whitecolortypo footericon fbicon" />
            </IconButton>
          </Typography>
        </div>
      </div>
    </>
  );
}
