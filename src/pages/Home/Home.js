import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  InputBase,
  CardMedia,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
  Typography,
  Button,
  IconButton,
  ListItem,
  Stack,
} from "@mui/material";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import Checkbox from "@mui/material/Checkbox";
import CommentIcon from "@mui/icons-material/Comment";
import FilterListIcon from "@mui/icons-material/FilterList";

import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// redux toolkit
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { fetchAsyncData } from "../../store/apiSlice/apiSlice";
// import { fetchAsyncData1 } from "../../store/apiSlice/apiSlice";

// redux toolkit
import { Link } from "react-router-dom";

// core components
import HomeImg from "../../assets/images/home.jpg";
import { stockData, FilterImg, NewData } from "../../components/Data";
import { Box } from "@mui/system";

// Pop Up dialog
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import Elden from "../../assets/images/Elden.png";
// Pop Up dialog

// Loading
import ReactLoading from "react-loading";
import axios from "axios";

const Home = () => {

  const [age, setAge] = React.useState("");
  const navigate = useNavigate();


  // editing////////////////


  const data = useSelector(state => state.api.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncData());

  }, [dispatch]);

  const asiaGames = data && Object.keys(data).length > 0 && data.Products.filter((region) => region.RegionCode === 'ASIA');


  const row = data && Object.keys(data).length > 0 && data.Products.filter((region) => region.RegionCode === 'ROW');

  console.log('asiaGames', asiaGames)
  console.log('rowGames', row)
  // editing////////////////


  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [open, setOpen] = React.useState(true);
  const [dropopen, setDropOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const drop2Click = () => {
    setDropOpen(!dropopen);
  };
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
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

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  // Vertical tabs
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  const VerticalTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <Box sx={{ flexGrow: 1, bgcolor: "black", display: "flex", height: 224 }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab className="whitecolortypo" label="Price" {...a11yProps(0)} />
          <Tab className="whitecolortypo" label="Filter" {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} /> */}
        </Tabs>
        <TabPanel value={value} index={0}>
          <FormGroup>
            <FormControlLabel
              className="whitecolortypo"
              control={<Checkbox />}
              label="Free"
            />
            <FormControlLabel
              className="whitecolortypo"
              control={<Checkbox />}
              label="Under 100$"
            />
            <FormControlLabel
              className="whitecolortypo"
              control={<Checkbox />}
              label="Under 500$"
            />
            <FormControlLabel
              className="whitecolortypo"
              control={<Checkbox />}
              label="Under 1000$"
            />
            <FormControlLabel
              className="whitecolortypo"
              control={<Checkbox />}
              label="Under 1500$"
            />
          </FormGroup>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <FormGroup className="whitecolortypo">
            <FormControlLabel
              className="whitecolortypo"
              control={<Checkbox />}
              label="Action"
            />
            <FormControlLabel
              className="whitecolortypo"
              control={<Checkbox />}
              label="RPG"
            />
            <FormControlLabel
              className="whitecolortypo"
              control={<Checkbox />}
              label="Adventure"
            />
            <FormControlLabel
              className="whitecolortypo"
              control={<Checkbox />}
              label="Indie"
            />
            <FormControlLabel
              className="whitecolortypo"
              control={<Checkbox />}
              label="Strategy"
            />
            <FormControlLabel
              className="whitecolortypo"
              control={<Checkbox />}
              label="Open World"
            />
            <FormControlLabel
              className="whitecolortypo"
              control={<Checkbox />}
              label="Shooter"
            />
            <FormControlLabel
              className="whitecolortypo"
              control={<Checkbox />}
              label="Puzzle"
            />
            <FormControlLabel
              className="whitecolortypo"
              control={<Checkbox />}
              label="First Person"
            />
            <FormControlLabel
              className="whitecolortypo"
              control={<Checkbox />}
              label="Horror"
            />
          </FormGroup>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </Box>
    );
  };
  // Vertical tabs

  // Pop up Dialog
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const DialogModal = () => {
    return (
      <>
        <Dialog
          fullScreen
          open={open1}
          onClose={handleClose1}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose1}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Filters
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClose1}>
                Apply
              </Button>
            </Toolbar>
          </AppBar>
          <VerticalTabs />
        </Dialog>
      </>
    );
  };

  // Pop up Dialog

  const [isFetching, setIsFetching] = React.useState(false);
  const [showData, setShowdata] = React.useState(false);

  const handleisFetching = () => {
    setIsFetching(true);
    setTimeout(() => {
      setShowdata(true);
    }, 2000);
    setTimeout(() => {
      setIsFetching(false);
    }, 2000);
  };

  return (
    <>
      <Grid container>
        <Grid
          alignItems="baseline"
          item
          xs={12}
          style={{ height: "auto" }}
        ></Grid>

        <Carousel
          showThumbs={false}
          interval={7000}
          infiniteLoop={true}
          autoPlay
          className="cContainer"
        >
          <Box className="img-container">
            <Typography
              align="center"
              variant="h5"
              className="whitecolortypo game-title"
            >
              <img src={Elden} style={{ width: "300px" }} alt="" />
              {/* {data && Object.keys(data).length > 0 && data.Products[0].Graphics.map((image) => {
                if (image.GraphicType === 'Packshot') {
                  return <img src={image.ImageUrl} style={{ width: "300px" }} />
                }
              })} */}
            </Typography>
            <Typography variant="h5" className="whitecolortypo game-desc">
              Immerse yourself in a dark fantasy world brought to you by
              Hidetaka Miyazaki, the creator of Dark Souls, and George R.R.
              Martin, the author of A Song of Ice and Fire.
            </Typography>
            <Typography align="center" className="game-button-container">
              <Button
                onClick={() => navigate("/game/gamedetail")}
                className="seebuttonstyle"
              >
                {" "}
                Find out more
              </Button>{" "}
            </Typography>
            <img src={HomeImg} alt="" />
            
          </Box>

          <div className="img-container">
            <Typography
              align="center"
              variant="h5"
              className="whitecolortypo game-title"
            >
              <img src={Elden} style={{ width: "300px" }} alt="" />
            </Typography>
            <Typography variant="h5" className="whitecolortypo game-desc">
              Immerse yourself in a dark fantasy world brought to you by
              Hidetaka Miyazaki, the creator of Dark Souls, and George R.R.
              Martin, the author of A Song of Ice and Fire.
            </Typography>
            <Typography align="center" className="game-button-container">
              <Button
                onClick={() => navigate("/game/gamedetail")}
                className="seebuttonstyle"
              >
                {" "}
                Find out more
              </Button>{" "}
            </Typography>
            <img src={HomeImg} alt="" />
          </div>

          <div className="img-container">
            <Typography
              align="center"
              variant="h5"
              className="whitecolortypo game-title"
            >
              <img src={Elden} style={{ width: "300px" }} alt="" />
            </Typography>
            <Typography variant="h5" className="whitecolortypo game-desc">
              Immerse yourself in a dark fantasy world brought to you by
              Hidetaka Miyazaki, the creator of Dark Souls, and George R.R.
              Martin, the author of A Song of Ice and Fire.
            </Typography>
            <Typography align="center" className="game-button-container">
              <Button
                onClick={() => navigate("/game/gamedetail")}
                className="seebuttonstyle"
              >
                Find out more
              </Button>
            </Typography>
            <img src={HomeImg} alt="" />
          </div>

        </Carousel>
      </Grid>

      <Grid xs={6} item className="homepagesearch">
        <Search className="searchbar">
          <SearchIconWrapper>
            <SearchIcon className="searchicon" />
          </SearchIconWrapper>
          <InputBase
            className="searchinput"
            placeholder="Explore"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="seebuttonstyle"
          className="seemore"
          xs={12}
          sm={12}
        >
          <Typography className="whitecolortypo fs20px ">
            Popular Games
          </Typography>
          <Button className="seebuttonstyle">See all</Button>
        </Grid>

        <Grid spacing={3} container style={{ marginTop: "20px" }}>


          {data && Object.keys(data).length > 0 && data.Products.map((productData) => {
            return (
              productData.Graphics.map((imageData) => {
                if (imageData.GraphicType === 'Packshot') {
                  return (
                    <Grid key={imageData.Id} item direction="row" sm={4} xs={6} lg={2}>
                      <Link key={imageData.Id} to={"/game/gamedetail"} state={productData}>
                        <img src={imageData.ImageUrl} alt="Cinque Terre" style={{ 'objectFit': 'contain' }} className='game__images' />
                      </Link>
                    </Grid>
                  );
                }
              }
              ))
          })}
          {/* edit1 */}


        </Grid>



        <DialogModal />
        <Stack
          className="mt5"
          direction="row"
          style={{
            justifyContent: "space-between",
            paddingRight: "19px",
            alignItems: "center",
          }}
        >
          <Typography
            className="whitecolortypo"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Filter{" "}
          </Typography>
          <Button
            variant="outlined"
            className="whitecolortypo"
            startIcon={<FilterListIcon />}
            sx={{ display: { xs: "flex", sm: "none" } }}
            onClick={handleClickOpen1}
          >
            Filter
          </Button>
          <Typography direction="row" className="whitecolortypo">
            Sort by : New Release
          </Typography>
        </Stack>
        <Grid container className="mt5">
          <Grid
            xs={4}
            lg={2}
            sm={2}
            md={2}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            {" "}
            {/* remove from small screen*/}
            {/* <Typography className="whitecolortypo"> Filter </Typography> */}
            <List
              className="dropdownfilter"
              sx={{ width: "87%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton className="listbutton" onClick={handleClick}>
                <ListItemText primary="Price" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List
                  className="dropdownlisttext"
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                      <ListItem
                        className="listcheckbox"
                        key={value}
                        secondaryAction={
                          <ListItemIcon>
                            <Checkbox
                              defaultChecked
                              edge="end"
                              // checked={checked.indexOf(value) !== -1}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </ListItemIcon>
                        }
                        disablePadding
                      >
                        <ListItemButton
                          role={undefined}
                          onClick={handleToggle(value)}
                          dense
                        >
                          <ListItemText
                            id={labelId}
                            primary={`Under 100$ ${value}`}
                          />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </List>
            <List
              className="dropdownfilter"
              sx={{ width: "87%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton className="listbutton" onClick={drop2Click}>
                <ListItemText primary="Filter" />
                {dropopen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={dropopen} timeout="auto" unmountOnExit>
                <List
                  className="dropdownlisttext"
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                      <ListItem
                        className="listcheckbox"
                        key={value}
                        secondaryAction={
                          <ListItemIcon>
                            <Checkbox
                              edge="end"
                              // checked={checked.indexOf(value) !== -1}
                              tabIndex={-1}
                              disableRipple
                              defaultChecked
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </ListItemIcon>
                        }
                        disablePadding
                      >
                        <ListItemButton
                          role={undefined}
                          onClick={handleToggle(value)}
                          dense
                        >
                          <ListItemText
                            id={labelId}
                            primary={`RPG  ${value}`}
                          />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </List>
          </Grid>


          {/*  */}
          <Grid container xs={12} lg={10} sm={10} spacing={3}>


            {data && Object.keys(data).length > 0 && data.Products.map((productData) => productData.Graphics.map((imageData, i) => {
              if (imageData.GraphicType === 'Packshot') {
                return (
                  <Grid item sm={4} xs={6} lg={3}>
                    <Link key={imageData.Id} to={"/game/gamedetail"} state={productData}>
                      <img src={imageData.ImageUrl} alt="Cinque Terre" className='game__images' Filter />
                      <Grid item xs={12} sm={9} md={12} lg={11}>
                        <Typography align="center">
                          <Button className="whitebutton buynowbutton ">
                            Buy Now
                            <span>
                              <span> -40%</span> 259$
                            </span>
                          </Button>
                        </Typography>
                      </Grid>
                    </Link>
                  </Grid>
                )
              }
            }
            ))}

            {/* copy */}
            {/* {data && Object.keys(data).length > 0 && data.Products.map((productData) => productData.Graphics.map((imageData) => {
            if (imageData.GraphicType === 'Marketing' && imageData.ImageUrl.includes('hero')) {

              return (
                <Grid key={imageData.Id} item direction="row" sm={4} xs={6} lg={2}>
                  <Link key={imageData.Id} to={"/game/gamedetail"} state={productData}>
                    <img src={imageData.ImageUrl} alt="Cinque Terre" />
                  </Link>
                </Grid>
              );
            }

          }))} */}






            {showData ? (
              <>
                {NewData.map((item, i) => {
                  return (
                    <Grid item sm={4} xs={6} lg={3}>
                      <img src={item.images} alt="Cinque Terre" />
                      <Grid item xs={12} sm={9} md={12} lg={11}>
                        <Typography align="center">
                          <Button className="whitebutton buynowbutton ">
                            Buy Now
                            <span>
                              <span> -40%</span> 259$
                            </span>
                          </Button>
                        </Typography>
                      </Grid>
                    </Grid>
                  );
                })}
              </>
            ) : null}
          </Grid>
          {/*  */}



          {!isFetching ? (
            <Grid container item justifyContent="center">
              <Button className="seemorebutton" onClick={handleisFetching}>
                See more{" "}
              </Button>
            </Grid>
          ) : null}
          {/* <Stack direction="row" spacing={2}>
              <LoadingButton loading={"loading"} variant="outlined">
                Submit
              </LoadingButton>
            </Stack> */}
          {isFetching ? (
            <Grid container item justifyContent="center" className="mt5">
              <ReactLoading
                type={"spin"}
                color={"white"}
                height={"4%"}
                width={"4%"}
              />
            </Grid>
          ) : null}
        </Grid>
        {/* </Grid> */}
      </Grid>
    </>
  );
};

export default Home;
