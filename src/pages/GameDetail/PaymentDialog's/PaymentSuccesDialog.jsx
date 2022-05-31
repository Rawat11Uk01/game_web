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
// import PaymentButton from "./PaymentSuccesDialog";
import payementok from "../../../assets/images/paymentok.png";
import SuccessDialog from "./SuccessDialog";

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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          className="lightgreybutton    proceedbutton"
          onClick={handleClickOpen}
          sx={{ textTransform: "capitalize" }}
        >
          Proceed Now
        </Button>
      </div>
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
        })({ zIndex: -1, backdropFilter: "blur(40px)" })}
      >
        <DialogContent className="p20px-0px">
          <Grid container className="p0px-20px">
            <Grid item xs={12} className="pl6px">
              <Typography className="whitecolortypo fs1-5rem ">
                Digimatch.io
              </Typography>
              <Typography className="whitecolortypo fs0-8rem mt10px">
                Amount <span className="fs1-5rem pl10px">IDR 50000 </span>
              </Typography>
              <Typography align="center" className="mt15px">
                <img src={payementok} className="paymentcircleimg" />{" "}
              </Typography>
              <Typography className="drkgreycolortypo fs0-8rem">
                Your Transaction was successful! You can always contact us for
                support{" "}
              </Typography>
            </Grid>
          </Grid>{" "}
          <Typography align="center" className="whitecolortypo paymentsuccessB">
            <SuccessDialog />
          </Typography>{" "}
          <Grid item className="pl30px mt16px">
            <Typography className="whitecolortypo fs0-8rem">
              Loreumipsum@gmail.com
            </Typography>
            <Typography className="whitecolortypo  fs0-8rem">
              You are full covered by digimatch shield
            </Typography>
          </Grid>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
