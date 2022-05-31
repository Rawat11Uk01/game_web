import * as React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  FormControl,
  Typography,
  Grid,
  InputBase,
  Backdrop,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import { styled, alpha } from "@mui/material/styles";
import JoinusImge from "../../../assets/images/emaildialog.png";
import PaymentButton from "./PaymentSuccesDialog";
import elden from "../../../assets/images/shortimg.png";
import { Link } from "react-router-dom";
const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("lg");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Typography align="center" onClick={handleClickOpen}>
        pending
      </Typography>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        PaperProps={{
          className: "LargeDialog ",
        }}
        BackdropComponent={styled(Backdrop, {
          name: "MuiModal",
          slot: "Backdrop",
          overridesResolver: (props, styles) => {
            return styles.backdrop;
          },
        })({ zIndex: -1, backdropFilter: "blur(20px)" })}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          className="whitecolortypo"
        >
          <Typography align="center" className="fs1-5rem">
            Thank you, your order 5452100987033 has been placed successfully
          </Typography>
        </BootstrapDialogTitle>
        <DialogContent className="p10px-10px">
          <Grid container>
            <Grid container item xs={12} className="successpagecontainer">
              <Grid item xs={2} align="center ">
                <Typography className="whitecolortypo"> </Typography>
                <img
                  src={elden}
                  className="suucimg"
                  style={{ marginTop: "10px" }}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography className="whitecolortypo mb20px">
                  Product Name
                </Typography>
                <Typography className="whitecolortypo">
                  Elden ring Steam CD-KEY Global
                </Typography>
                <Typography className="whitecolortypo fs0-8rem">
                  Region: INDONESIA
                </Typography>
                <Button className="whitebutton greencolorButton mt10px mb10px">
                  Status : <span> Complete</span>
                </Button>
              </Grid>
              <Grid item xs={2} align="center">
                <Typography className="whitecolortypo">Unit Price</Typography>
                <Grid item>
                  <Typography className="whitecolortypo pt30px">
                    $7.30
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={2} align="center">
                <Typography className="whitecolortypo">Quantity </Typography>
                <Grid item>
                  <Typography className="whitecolortypo pt30px">1</Typography>
                </Grid>
              </Grid>
              <Grid item xs={2} align="center">
                <Grid item>
                  <Typography className="whitecolortypo">Price </Typography>
                </Grid>
                <Typography className="whitecolortypo pt30px">$7.90</Typography>
              </Grid>
              <Grid container item xs={12} className="pricecontainer">
                <Grid item xs={2}></Grid>
                <Grid item xs={6}>
                  <Typography className="whitecolortypo">
                    KEY: 4A2D - AE78 - 95DC - 1235
                  </Typography>
                </Grid>

                <Grid item xs={2}>
                  <Typography align="end" className="whitecolortypo">
                    Total price
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography align="center" className="whitecolortypo">
                    $7.90
                  </Typography>
                </Grid>
              </Grid>
            </Grid>{" "}
            <Grid container item justifyContent="center">
              <Link to="/">
                <Typography
                  align="center"
                  className="whitecolortypo mt10px fs1-1rem"
                >
                  Back to website
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
