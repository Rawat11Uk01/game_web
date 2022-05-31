import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Grid, Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
/////////////// redux toolkit ////////////////
import { fetchAsyncProductPrice } from "../../store/apiSlice/apiSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ReactPlayer from 'react-player'
/////////////// redux toolkit ////////////////
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import trailer from "../../assets/trailer.mp4";
import HomeImg from "../../assets/images/home.jpg";
import midtrans from "../../assets/images/midtrans.png";
import rectangle from "../../assets/images/rectangle.png";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import WelcomeDialog from "./PaymentDialog's/WelcomeDialog";
import { useLocation } from 'react-router-dom';
const Home = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("1");
  const [recommendedData, setRecommendedData] = React.useState("");
  const [minimumData, setMinimumData] = React.useState("");
  const location = useLocation();
  const productDetails = location.state;

  console.log(productDetails, 'productdetails')
  // releaseDate////////////////
  const releaseDate = productDetails.ReleaseDate;
  const newReleaseDate = new Date(releaseDate).toISOString().split('T')[0];
  // releaseDate////////////////

  const gamePrice = useSelector(state => state.api.price);
  console.log(gamePrice, 'gameprice');


  useEffect(() => {
    let recommendedDataA = productDetails.MetaData[1].Values
    let recommendedDataB = recommendedDataA[0].split("\n");
    let minimumdataA = productDetails.MetaData[0].Values
    let minimumdataB = minimumdataA[0].split("\n");
    setMinimumData(minimumdataB);
    setRecommendedData(recommendedDataB);
    const skuDetail = productDetails.Sku;
    dispatch(fetchAsyncProductPrice(skuDetail));
  }, [productDetails])

  const show = productDetails.Graphics.map((image) => {
    if (image.Screenshot) {
      return <img src={image.ImageUrl} />
    }
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const screenshotData = productDetails.Graphics.filter((imageData) => {
    if (imageData.GraphicType === 'Screenshot') {
      return imageData.ImageUrl
    }
  }
  );

  return (
    <>

      <Grid
        container
        style={{
          backgroundImage: `url(${HomeImg})`,
        }}
        className="details-page-div"
      >
        <Grid container className="details-container">
          <Grid item xs={12} md={9} lg={8}>
          <Carousel  >
        <div>
          <ReactPlayer
            url={'https://www.youtube.com/watch?v=EE-4GvjKcfs&t=2s'}
            volume='1'
            muted
            width='100%'
            playing={true}
            height= '500px'
          />
        </div>
        {screenshotData.map((scrnsht) => <div><img src={scrnsht.ImageUrl}  /></div>)}
      </Carousel>
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            lg={3}
            sx={{ marginLeft: "8%", marginBottom: "5%" }}
            className="Rectangle-main"
          >
            <Grid container style={{ marginTop: "9%" }}>
              <Grid item xs={6}>
                <Typography align="center" alignSelf="center">
                  <img src={rectangle} style={{ width: "33%" }} />
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className="whitecolortypo">Release Date</Typography>
                <Typography className="whitecolortypo  mt2">
                  {newReleaseDate}
                </Typography>
              </Grid>
              <hr />
            </Grid>
            <Button className="lightgreybutton   lowbutton">
              Lowest Price
            </Button>
            <Typography align="center" className="whitecolortypo fs2-5rem">

              {gamePrice && Object.keys(gamePrice).length > 0 && gamePrice.data.Prices[0].Wsp}
              {' '}
              {gamePrice && Object.keys(gamePrice).length > 0 && gamePrice.data.Prices[0].CurrencyCode}

              {/*
            {' '}
            {gamePrice.data.Prices.split(0,1).CurrencyCode} */}
            </Typography>
            <WelcomeDialog />
            <hr />
            <Typography align="center" className="whitecolortypo fs1rem">
              Available Payment Method
            </Typography>
            <Grid
              item
              style={{ paddingLeft: "7%", marginTop: "8%", marginRight: "7%" }}
            >
              <img src={midtrans} style={{ width: "100%", height: "7%" }} />
            </Grid>
            <Typography
              align="center"
              className="whitecolortypo fs0-8rem mt2 mb5"
            >
              Your Transaction is secure
            </Typography>
            <hr />
            <Typography align="center" className="whitecolortypo fs1rem ">
              Sold by Genba
            </Typography>
          </Grid>

          {/* <Box sx={{ width: "100%", typography: "body1"}}>
            <TabContext className="tabdetails" value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider", position: "sticky",
            top: "12%"  }}>
                <TabList
                  className="tablist"
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    className="tabdetails"
                    style={{ color: "white" }}
                    label="Description"
                    value="1"
                  />
                  <a href="#sysReq">
                    <Tab
                      style={{ marginLeft: "7%", color: "white" }}
                      className="tabdetails"
                      label="System Requirements"
                      value="2"
                    />

                  </a>
                  <Tab
                    style={{ marginLeft: "7%", color: "white" }}
                    className="tabdetails"
                    label="Key activation"
                    value="3"
                  />
                </TabList>
              </Box>
              <TabPanel className="tabpanel whitecolortypo" value="1">
                <Tab1 />
              </TabPanel>
              <TabPanel className="tabpanel whitecolortypo" value="2">
                <Tab2 />
              </TabPanel>
              <TabPanel className="tabpanel whitecolortypo" value="3">
                <Tab3 />
              </TabPanel>
            </TabContext>
          </Box>{" "} */}
        </Grid>

        {/* <Grid
        container
        style={{
          // paddingTop: "5%",
          backgroundImage: `url(${HomeImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "auto",
          // marginTop: "-90px",
          paddingBottom: "1%",
          backgroundAttachment: "fixed"
        }}
      > */}

        <Grid container className="details-container">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext className="tabdetails" value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  className="tablist"
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    className="tabdetails"
                    style={{ color: "white" }}
                    label="Description"
                    value="1"
                  />
                  {/* <a href="#sysReq"> */}
                  <Tab
                    style={{ marginLeft: "7%", color: "white" }}
                    className="tabdetails"
                    label="System Requirements"
                    
                    
                    value="2"
                  />
                  {/* </a> */}
                  <Tab
                    style={{ marginLeft: "7%", color: "white" }}
                    className="tabdetails"
                    label="Key activation"
                    value="3"
                  />
                </TabList>
              </Box>
              <TabPanel className="tabpanel whitecolortypo" value="1">
                {/* <Tab1 /> */}

                {productDetails.Languages.map((langType) => {
                  if (langType.LanguageName === 'English') {
                    return <Typography>
                      {langType.LocalisedDescription}
                    </Typography>
                  }
                })}
              </TabPanel>
              <TabPanel className="tabpanel whitecolortypo" value="2">
                <Tab2 />
              </TabPanel>
              <TabPanel className="tabpanel whitecolortypo" value="3">
                <Tab3 />
              </TabPanel>
            </TabContext>
          </Box>{" "}
        </Grid>
      </Grid>
      <Grid container className="details-container-nomargin">
        <Typography className="whitecolortypo mb2 fs1-5rem">Story</Typography>
        <Typography className="whitecolortypo ">
          The Elden Ring is destroyed. Its fragments, scattered all over the
          world, arouse in the gods a desire to possess them. The incredible
          power of the artifacts transforms the gods into raging creatures taken
          over by madness. Return from exile and rise as one of those worthy of
          collecting the Elden Ring pieces.
        </Typography>
        <Typography className="whitecolortypo fs1-5rem mt2 mb2">
          Gameplay
        </Typography>
        <Typography className="whitecolortypo  ">
          Create a character and take care of every element of appearance,
          equipment, and personality. Rise as a fearless warrior or a clever
          treasure hunter. The Elden Ring game allows players to fully customize
          the heroes, which makes the gameplay even more unique.
        </Typography>
        <Typography className="whitecolortypo  mt3">
          Explore the stunning open world on the foot or back of a trusted
          horse. Discover the six kingdoms of the Lands Between to learn scraps
          of the history of this mystical place. As with other soulslike titles,
          nothing is clear in this video game. It's up to you to gather
          information and understand it.
        </Typography>
        <Typography className="whitecolortypo  mt3">
          Face bloodthirsty enemies and powerful bosses. Use weapons and spells,
          but don't underestimate your opponents. Each of them is an independent
          creature, equipped with its fighting style and unique skills. To
          defeat the enemy, you need to be quick, clever, and capable of
          anything. Prepare your attacks, and you may be able to get out of this
          fight alive.
        </Typography>
        <Typography className="whitecolortypo  mt3">
          The Elden Ring video game, like Dark Souls, offers the possibility of
          playing single-player gameplay or online in cooperation with up to
          four players. You don't have to defeat the most powerful bosses alone
          - summon other players and fight for life together! You can also
          explore the following chapters in the story as you join forces in the
          future online co-op battles of your unique legend. Will you become the
          one to discover the power of the Elden Ring?
        </Typography>
        {/* <Typography id="sysReq" className="whitecolortypo2 fs1-5rem mt3">
          System Requirements
        </Typography> */}
      </Grid>{" "}
      <div id="sysReq">
        <Grid container className="details-container-nomargin">
          <Typography id="sysReq" className="whitecolortypo2 fs1-5rem mt3">
            System Requirements
          </Typography>
        </Grid>
      </div>
      <Grid container className="details-container-nomargin">
        <Grid item xs={6}>
          <Typography className="whitecolortypo mt5 mb5">Minimum Requirements:</Typography>
          <Typography className="whitecolortypo">{minimumData && minimumData[0]}</Typography>
          <Typography className="whitecolortypo">
            {minimumData && minimumData[1]}
          </Typography>
          <Typography className="whitecolortypo">{minimumData && minimumData[2]}</Typography>
          <Typography className="whitecolortypo">
            {minimumData && minimumData[3]}
          </Typography>
          <Typography className="whitecolortypo">
            {minimumData && minimumData[4]}{" "}
          </Typography>{" "}
          <Typography className="whitecolortypo">{minimumData && minimumData[5]}</Typography>
          <Typography className="whitecolortypo">{minimumData && minimumData[6]}</Typography>
        </Grid>
        <Grid item xs={6} style={{ paddingLeft: "20px" }}>
          <Typography className="whitecolortypo mt5 mb5">
            Recommended Requirements :
          </Typography>
          <Typography className="whitecolortypo">{recommendedData && recommendedData[0]}</Typography>
          <Typography className="whitecolortypo">
            {recommendedData && recommendedData[1]}
          </Typography>
          <Typography className="whitecolortypo">{recommendedData && recommendedData[2]}</Typography>
          <Typography className="whitecolortypo">
            {recommendedData && recommendedData[3]}
          </Typography>
          <Typography className="whitecolortypo">
            {recommendedData && recommendedData[4]}{" "}
          </Typography>{" "}
          <Typography className="whitecolortypo">{recommendedData && recommendedData[5]}</Typography>
          <Typography className="whitecolortypo">{recommendedData && recommendedData[6]}</Typography>
        </Grid>
        <Grid item className="mt5">
          <Typography className="whitecolortypo fs1-5rem mt5 mb5">
            Developer: {productDetails.Developer}
          </Typography>
          <Typography className="whitecolortypo fs1-5rem mt5 mb5">
            Genres: {productDetails.Genres.join(' , ')}
          </Typography>
          <Typography className="whitecolortypo fs1-5rem mt5 mb5">
            Lanaguages: {productDetails.LocalisationSet.SpokenLanguageSet.join(' , ')}
          </Typography>
          <Typography className="whitecolortypo fs1-5rem mt5 mb5">
            Country:
          </Typography>
        </Grid>
        <Grid item className="mb6 mt19 details-container-nomargin">
          {productDetails.Languages.map((langType) => {
            if (langType.LanguageName === 'English') {
              return <Typography className="whitecolortypo " align="center">
                {langType.LegalText}
              </Typography>
            }
          })}

          {/* <Typography >
            ELDEN RING™ & ©BANDAI NAMCO Entertainment Inc. / ©2022 FromSoftware,
            Inc.
          </Typography> */}
        </Grid>{" "}
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
            More like this
          </Typography>
          <Button className="seebuttonstyle">See all</Button>
        </Grid>
        <Grid
          alignItems="baseline"
          className="mt3"
          item
          xs={12}
          style={{
            padding: "2em",
            background:
              "linear-gradient(136.91deg, rgba(255, 255, 255, 0.2) -132.08%, rgba(255, 255, 255, 0) 119.01%)",
            borderRadius: "15px",
          }}
        >
          <div className="detail-img">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div>

                  {productDetails && Object.keys(productDetails) && productDetails.Graphics.map((image) => {
                    if (image.GraphicType === 'Packshot') {
                      return <img src={image.ImageUrl} className='sliderImage'/>
                    }
                  })}

                  <Typography
                    align="center"
                    className="whitecolortypo mt2 fs1-3rem"
                  >
                    {productDetails.Name}
                  </Typography>
                  <Typography align="end" className="greycolortypo">
                    {gamePrice && Object.keys(gamePrice).length > 0 && gamePrice.data.Prices[0].Wsp}
                    {' '}
                    {gamePrice && Object.keys(gamePrice).length > 0 && gamePrice.data.Prices[0].CurrencyCode}
                  </Typography>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  {productDetails && Object.keys(productDetails) && productDetails.Graphics.map((image) => {
                    if (image.GraphicType === 'Packshot') {

                      return <img src={image.ImageUrl} className='sliderImage'/>
                    }
                  })}
                  <Typography
                    align="center"
                    className="whitecolortypo mt2 fs1-3rem"
                  >
                    {productDetails.Name}
                  </Typography>
                  <Typography align="end" className="greycolortypo">
                    {gamePrice && Object.keys(gamePrice).length > 0 && gamePrice.data.Prices[0].Wsp}
                    {' '}
                    {gamePrice && Object.keys(gamePrice).length > 0 && gamePrice.data.Prices[0].CurrencyCode}
                  </Typography>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  {productDetails && Object.keys(productDetails) && productDetails.Graphics.map((image) => {
                    if (image.GraphicType === 'Packshot') {

                      return <img src={image.ImageUrl} className='sliderImage'/>
                    }
                  })}
                  <Typography
                    align="center"
                    className="whitecolortypo mt2 fs1-3rem"
                  >
                    {productDetails.Name}
                  </Typography>
                  <Typography align="end" className="greycolortypo">
                    {gamePrice && Object.keys(gamePrice).length > 0 && gamePrice.data.Prices[0].Wsp}
                    {' '}
                    {gamePrice && Object.keys(gamePrice).length > 0 && gamePrice.data.Prices[0].CurrencyCode}
                  </Typography>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  {productDetails && Object.keys(productDetails) && productDetails.Graphics.map((image) => {
                    if (image.GraphicType === 'Packshot') {

                      return <img src={image.ImageUrl} className='sliderImage'/>
                    }
                  })}
                  <Typography
                    align="center"
                    className="whitecolortypo mt2 fs1-3rem"
                  >
                    {productDetails.Name}
                  </Typography>
                  <Typography align="end" className="greycolortypo">
                    {gamePrice && Object.keys(gamePrice).length > 0 && gamePrice.data.Prices[0].Wsp}
                    {' '}
                    {gamePrice && Object.keys(gamePrice).length > 0 && gamePrice.data.Prices[0].CurrencyCode}
                  </Typography>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  {productDetails && Object.keys(productDetails) && productDetails.Graphics.map((image) => {
                    if (image.GraphicType === 'Packshot') {

                      return <img src={image.ImageUrl} className='sliderImage'/>
                    }
                  })}
                  <Typography
                    align="center"
                    className="whitecolortypo mt2 fs1-3rem"
                  >
                    {productDetails.Name}
                  </Typography>
                  <Typography align="end" className="greycolortypo">
                    {gamePrice && Object.keys(gamePrice).length > 0 && gamePrice.data.Prices[0].Wsp}
                    {' '}
                    {gamePrice && Object.keys(gamePrice).length > 0 && gamePrice.data.Prices[0].CurrencyCode}
                  </Typography>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  {productDetails && Object.keys(productDetails) && productDetails.Graphics.map((image) => {
                    if (image.GraphicType === 'Packshot') {

                      return <img src={image.ImageUrl} className='sliderImage'/>
                    }
                  })}
                  <Typography
                    align="center"
                    className="whitecolortypo mt2 fs1-3rem"
                  >
                    {productDetails.Name}
                  </Typography>
                  <Typography align="end" className="greycolortypo">
                    {gamePrice && Object.keys(gamePrice).length > 0 && gamePrice.data.Prices[0].Wsp}
                    {' '}
                    {gamePrice && Object.keys(gamePrice).length > 0 && gamePrice.data.Prices[0].CurrencyCode}
                  </Typography>
                </div>{" "}
              </SwiperSlide>
            </Swiper>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
