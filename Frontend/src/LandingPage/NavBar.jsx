import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  TextField,
  Card,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
      label: "",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#574b90",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    background: "#01579b",
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    marginTop: "-25px",
    width: "250px",
  },
  placeholder: {
    color: "white",
  },
  loginBtn: {
    width: "150px",
    border: "1px solid white",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  card: {
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "black",
    textAlign: "center",
    margin: "4% 0 2% 30%",
    backgroundColor: "transparent",
  },
  startBtn: {
    background: "#01579b",
    color: "white",
    marginTop: "4%",
  },
  order: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "black",
    background: "transparent",
  },
  float: {
    marginTop: "15%",
    float: "left",
    textAlign: "center",
    width: "50%",
  },
}));

function NavBar() {
  const classes = useStyles();

  const [address, setAddress] = useState("");

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const fetchCoordinates = (e) => {
    // 13 for enter
    let regexPinCodeCheck = new RegExp("^[0-9]{5}(?[0-9](1)");
    if (e.keyCode === "13") {
      console.log(regexPinCodeCheck.test(address));
    }
    //Also, how can I check whether a user is entering a pincode or a city name or an address in the query, because I have to
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <Typography
            className={classes.menuButton}
            style={{ marginRight: "10%" }}
          >
            <img width="200px" src="logo.png" alt="delivary.com" />
          </Typography>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <SearchIcon />
            </Grid>
            <Grid item>
              <CssTextField
                onKeyUp={fetchCoordinates}
                onChange={handleAddress}
                value={address}
                className={classes.title}
                InputLabelProps={{
                  className: classes.placeholder,
                }}
                label="What are you hungry for?"
              />
            </Grid>
          </Grid>

          <Button color="inherit" className={classes.loginBtn}>
            Log in
          </Button>
          <Typography style={{ margin: "0 2%" }}>
            <LocalOfferIcon />
          </Typography>
          <Typography>
            <ShoppingBasketIcon />
          </Typography>
        </Toolbar>
      </AppBar>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Office landing pic"
            image="https://res.cloudinary.com/delivery-com/image/fetch/f_auto/https%3A%2F%2Fs3.amazonaws.com%2Fs3.delivery.com%2FOffice%2BLanding%2BPages%2FMain%2BFor%2BOffice%2FMain-Header-DESKTOP-V2.png"
          />
          <div className={classes.overlay}>
            <h1>Ordering for the team has</h1>
            <h1>never been easier</h1>
            <Typography>
              Choose from customizable options and one size fits all solutions.
            </Typography>
            <Button className={classes.startBtn}>Get Started</Button>
          </div>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Bg Pic"
            image="https://res.cloudinary.com/delivery-com/image/fetch/f_auto/https%3A%2F%2Fs3.amazonaws.com%2Fs3.delivery.com%2FOffice%2BLanding%2BPages%2FMain%2BFor%2BOffice%2FMain-GO%2526Catering-Background-DESKTOP.png"
          />
          <div className={classes.order}>
            <Typography className={classes.float}>
              <h1>Ordering as a group</h1>
              <h5 style={{ color: "dimgrey", margin: "8% 0" }}>
                It's as simple as picking a restaurant, inviting your coworkers,
                and enjoying your meal.
              </h5>
              <img
                width="500px"
                src="https://res.cloudinary.com/delivery-com/image/fetch/f_auto/https%3A%2F%2Fs3.amazonaws.com%2Fs3.delivery.com%2FOffice%2BLanding%2BPages%2FMain%2BFor%2BOffice%2FMain-icon-GroupOrdering-DESKTOP.png"
                alt="Box"
              />
            </Typography>
            <Typography className={classes.float}>
              <h1>Ordering for a group</h1>
              <h5 style={{ color: "dimgrey", margin: "8% 0" }}>
                Catering that caters to you. Our options save you money, please
                a hungry crowd, and are fully customizable.
              </h5>
              <img
                width="500px"
                src="https://res.cloudinary.com/delivery-com/image/fetch/f_auto/https%3A%2F%2Fs3.amazonaws.com%2Fs3.delivery.com%2FOffice%2BLanding%2BPages%2FMain%2BFor%2BOffice%2FMain-icon-Catering-DESKTOP.png"
                alt="Box2"
              />
            </Typography>
          </div>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Bg Pic"
            image="https://res.cloudinary.com/delivery-com/image/fetch/f_auto/https%3A%2F%2Fs3.amazonaws.com%2Fs3.delivery.com%2FOffice%2BLanding%2BPages%2FMain%2BFor%2BOffice%2FMain%2Bpage-customize%2Bsection%2Bbackground-DESKTOP.png"
          />
          <div className={classes.order}>
            <Typography className={classes.float} style={{ margin: "4% 0" }}>
              <img
                src="https://res.cloudinary.com/delivery-com/image/fetch/f_auto/https%3A%2F%2Fs3.amazonaws.com%2Fs3.delivery.com%2FOffice%2BLanding%2BPages%2FMain%2BFor%2BOffice%2FMain-icon-Individual-DESKTOP.png"
                alt="bags"
              />
              <h6 style={{ color: "dimgrey", marginLeft: "10%" }}>
                Let coworkers choose their meal from options that fit your
                budget.
              </h6>
            </Typography>
            <Typography className={classes.float} style={{ width: "45%" }}>
              <h1 style={{ margin: "-12% 0 6% 0" }}>Individual Ordering</h1>
              <h6
                style={{
                  color: "dimgrey",
                  marginLeft: "10%",
                  textAlign: "left",
                  width: "80%",
                }}
              >
                Create your own rules for budget and scheduling, and let us do
                the rest! Employees will use pre-set credits for each order, and
                you'll be the office hero.
              </h6>
            </Typography>
          </div>
        </CardActionArea>
      </Card>
      <Card>
        <Typography
          style={{
            float: "left",
            width: "20%",
            paddingLeft: "5%",
            margin: "15% 0 0 0",
          }}
        >
          <h5
            style={{
              color: "#01579b",
              fontWeight: "bold",
              marginBottom: "20%",
            }}
          >
            SAVE MONEY
          </h5>
          <h6 style={{ color: "dimgrey", textAlign: "center" }}>
            Pay zero fees for ordering from the best local restaurants that
            deliver to your office.
          </h6>
        </Typography>
        <Typography style={{ float: "left", width: "60%", marginLeft: "10%" }}>
          <img
            src="https://res.cloudinary.com/delivery-com/image/fetch/f_auto/https%3A%2F%2Fs3.amazonaws.com%2Fs3.delivery.com%2FOffice%2BLanding%2BPages%2FMain%2BFor%2BOffice%2FMain-Value-prop-1-DESKTOP.png"
            alt=""
          />
        </Typography>
      </Card>
      <Card style={{ background: "#eeeeee" }}>
        <Typography style={{ float: "left" }}>
          <img
            src="https://res.cloudinary.com/delivery-com/image/fetch/f_auto/https%3A%2F%2Fs3.amazonaws.com%2Fs3.delivery.com%2FOffice%2BLanding%2BPages%2FMain%2BFor%2BOffice%2FMain-Value-prop-2-DESKTOP.png"
            alt=""
          />
        </Typography>
        <Typography>
          <h6
            style={{
              color: "#01579b",
              margin: "18% 0",
              fontWeight: "bold",
            }}
          >
            FULLY CUSTOMIZABLE SOLUTION
          </h6>
          <div style={{ color: "dimgrey", margin: "-15% 40%" }}>
            Choose what fits your team, from group ordering & catering to
            pre-set rules for accounts.
          </div>
          <img
            style={{ marginLeft: "16%" }}
            src="https://res.cloudinary.com/delivery-com/image/fetch/f_auto/https%3A%2F%2Fs3.amazonaws.com%2Fs3.delivery.com%2FOffice%2BLanding%2BPages%2FMain%2BFor%2BOffice%2FMain-Value%2BProp-Coffee-4B-DESKTOP.png"
            alt=""
          />
        </Typography>
      </Card>
      <Card>
        <Typography style={{ float: "left" }}>
          <img
            src="https://res.cloudinary.com/delivery-com/image/fetch/f_auto/https%3A%2F%2Fs3.amazonaws.com%2Fs3.delivery.com%2FOffice%2BLanding%2BPages%2FMain%2BFor%2BOffice%2FMain-Value-prop-3-DESKTOP.png"
            alt=""
          />
        </Typography>
        <Typography>
          <h6
            style={{
              fontWeight: "bold",
              color: "#01579b",
              margin: "20% 0 2% 0",
            }}
          >
            MULTI-VERTICAL
          </h6>
          <div style={{ color: "dimgrey", marginRight: "1%" }}>
            More than just food. Get same-day delivery of wine, beer & spirits,
            groceries, and office essentials.
          </div>
        </Typography>
      </Card>
    </div>
  );
}

export default NavBar;
