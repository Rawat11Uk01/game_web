import * as React from "react";
import Box from "@mui/material/Box";
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
import payment from "../../../assets/images/payment.png";
import payementok from "../../../assets/images/paymentok.png";
import PaymentDialog from "./PaymentSuccesDialog";

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
      <Typography align="center">
        <Button
          className="lightgreybutton   emailsubmitb"
          onClick={handleClickOpen}
        >
          Submit
        </Button>
      </Typography>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        PaperProps={{
          className: "SmallDialog",
        }}
        BackdropComponent={styled(Backdrop, {
          name: "MuiModal",
          slot: "Backdrop",
          overridesResolver: (props, styles) => {
            return styles.backdrop;
          },
        })({ zIndex: -1, backdropFilter: "blur(20px)" })}
      >
        <DialogContent sx={{ m: 0, p: 0 }}>
          <div>
            <img src={payment} />
          </div>
          <PaymentDialog />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
