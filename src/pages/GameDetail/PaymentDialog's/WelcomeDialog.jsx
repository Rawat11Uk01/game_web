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
import PaymentButton from "./paymentmethod";

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

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  // const StyledDialog = styled(Dialog)(({ theme }) => ({
  //   root: {
  //     minWidth: 0,
  //     margin: theme.spacing(1),
  //   },
  // }));

  return (
    <React.Fragment>
      <Typography align="center">
        <Button
          className="lightgreybutton   buybutton"
          onClick={handleClickOpen}
        >
          Buy Now
        </Button>
      </Typography>
      <Dialog
        // className={`${StyledDialog["root"]}`}
        fullWidth={fullWidth}
        BackdropComponent={styled(Backdrop, {
          name: "MuiModal",
          slot: "Backdrop",
          overridesResolver: (props, styles) => {
            return styles.backdrop;
          },
        })({ zIndex: -1, backdropFilter: "blur(20px)" })}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        PaperProps={{
          className: "LargeDialog",
        }}
      >
        <DialogContent className="backblureffect ">
          <Grid container>
            <Grid item xs={6} className="pl20px">
              <Typography className="whitecolortypo fs1-5rem ">
                Welcome to Digimatch{" "}
              </Typography>
              <Typography className="whitecolortypo fs0-8rem mt10px">
                Enter your E-mail to recieve Key
              </Typography>
              <Search className="searchemail">
                <InputBase
                  className="emailinput"
                  placeholder=" Email Address"
                  inputProps={{ "aria-label": "search" }}
                />{" "}
              </Search>
              <DialogActions className="welcomeactionbutton">
                <PaymentButton />
              </DialogActions>
            </Grid>

            <Grid item xs={6}>
              <Grid
                item
                className="welcomebackimg"
                style={{
                  backgroundImage: `url(${JoinusImge})`,
                }}
              >
                <Typography
                  align="center"
                  className="whitecolortypo fs1-5rem welcomeimgtext"
                >
                  Thousands of games waiting to be played
                </Typography>
                <Typography align="center" className="mt35px">
                  <Button className="lightgreybutton   joinusb">Join us</Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
