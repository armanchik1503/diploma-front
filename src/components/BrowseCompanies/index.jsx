import { useState } from "react";
import { useEffect } from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
import Footer from "../Footer";
import archi from "../../assets/archi.png";
import notion from "../../assets/notion.png";
import kaspi from "../../assets/kaspi.png";
import girl from "../../assets/girl.png";
import icon from "../../assets/icon.png";
import star from "../../assets/star.png";
import reviewer from "../../assets/reviewer.png";
import logouni from "../../assets/logo-uni.png";
import { Button, Grid, TextField } from "@mui/material";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import HeaderFind from "../HeaderFind";
import { GetFeatured } from "../requests";
import NavigationLog from "../NavigationLog";


import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fffff",
  // theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  marginBottom: "20px",
  // textAlign: "center",
  color: "black",
}));

export default function BrowseCompanies() {
  const navigate = useNavigate();
  const [location, setLocation] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [category, setCategory] = useState(null);
  const [cities, setCities] = useState();
  const [categories, setCategories] = useState();

  const isAuth = sessionStorage.getItem("token") ? true : false;

  const [featured, setFeatured] = useState();

  const [isClosed, setIsClosed] = useState(true);
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const auth_data = {
      email: email,
      password: password,
    };
    console.log(auth_data);
  };

  useEffect(() => {
    async function fetchData() {
      const response_featured = await GetFeatured();
      setFeatured(response_featured);
    }
    fetchData();
  }, []);
  function handleClick(e) {
    e.preventDefault();
    setIsClosed(false);
  }
  const handleClickOccupation = (e) => {
    e.preventDefault();
    setOccupation("online");
  };

  const handleClickOccupationOff = (e) => {
    e.preventDefault();
    setOccupation("offline");
  };

  return (
    <>
      {isAuth ? <NavigationLog /> : <Navigation />}

      <div className="profile">
        <HeaderFind />
        <div className="company-main-browse">
          <div className="left-sidebar">
            <div className="company-dashboard-left">
              <p>
                <b>Filters</b>
              </p>
              <FormControl
                sx={{ borderRadius: "10px !important", m: 1, minWidth: "100%" }}
              >
                <p>
                  <b>Location</b>
                </p>
                {/* <InputLabel id="demo-simple-select-helper-label">Age</InputLabel> */}
                <Select
                  // labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  // value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  defaultValue={"1"}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {cities?.map((item, index) => (
                    <MenuItem key={index} value={item?.id}>
                      {item?.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                sx={{ borderRadius: "10px !important", m: 1, minWidth: "100%" }}
              >
                <p>
                  <b>Category</b>
                </p>
                {/* <InputLabel id="demo-simple-select-helper-label">Age</InputLabel> */}
                <Select
                  // labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  defaultValue={"1"}
                  onChange={(e) => setCategory(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {categories?.map((item, index) => (
                    <MenuItem key={index} value={item?.name}>
                      {item?.name}
                    </MenuItem>
                  ))}
                </Select>

                {/* <TextField value={location} onChange={e=>setLocation(e.target.value)} placeholder="Almaty" variant="outlined" /> */}
              </FormControl>
              <Tooltip title="add">
                {/* color={occupation==='online' ? 'rgba(43, 91, 164, 1)' : 'rgba(57, 63, 71, 1)'} */}
                <Button
                  variant="primary"
                  style={
                    occupation === "online"
                      ? {
                          border: "1px solid rgba(43, 91, 164, 1)",
                          color: "rgba(43, 91, 164, 1)",
                        }
                      : {
                          border: "1px solid rgb(239 239 239)",
                          color: "rgba(57, 63, 71, 1)",
                        }
                  }
                  onClick={handleClickOccupation}
                >
                  Online
                </Button>
                {/* <IconButton>ffff</IconButton> */}
              </Tooltip>
              <Tooltip title="add">
                <Button
                  variant="primary"
                  style={
                    occupation === "offline"
                      ? {
                          border: "1px solid rgba(43, 91, 164, 1)",
                          color: "rgba(43, 91, 164, 1)",
                        }
                      : {
                          border: "1px solid rgb(239 239 239)",
                          color: "rgba(57, 63, 71, 1)",
                        }
                  }
                  onClick={handleClickOccupationOff}
                >
                  Offline
                </Button>
              </Tooltip>

              <FormControl
                sx={{ borderRadius: "10px !important", m: 1, minWidth: "100%" }}
              >
                <p>
                  <b>Salary</b>
                </p>
                {/* <InputLabel id="demo-simple-select-helper-label">Age</InputLabel> */}
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="paid"
                    control={<Radio />}
                    label="Paid"
                  />
                  <FormControlLabel
                    value="non-paid"
                    control={<Radio />}
                    label="Non-paid"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>

                {/* <TextField value={location} onChange={e=>setLocation(e.target.value)} placeholder="Almaty" variant="outlined" /> */}
              </FormControl>
              <FormControl
                sx={{ borderRadius: "10px !important", m: 1, minWidth: "100%" }}
              >
                <p>
                  <b>Date of posting</b>
                </p>
                {/* <InputLabel id="demo-simple-select-helper-label">Age</InputLabel> */}
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="all time"
                    control={<Radio />}
                    label="All time"
                  />
                  <FormControlLabel
                    value="last 24 hours"
                    control={<Radio />}
                    label="Last 24 hours"
                  />
                  <FormControlLabel
                    value="last 3 days"
                    control={<Radio />}
                    label="Last 3 days"
                  />
                  <FormControlLabel
                    value="last 7 days"
                    control={<Radio />}
                    label="Last 7 days"
                  />
                </RadioGroup>

                {/* <TextField value={location} onChange={e=>setLocation(e.target.value)} placeholder="Almaty" variant="outlined" /> */}
              </FormControl>

              <FormControl
                sx={{ borderRadius: "10px !important", m: 1, minWidth: "100%" }}
              >
                <p>
                  <b>Work experience</b>
                </p>
                {/* <InputLabel id="demo-simple-select-helper-label">Age</InputLabel> */}
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="any experience"
                    control={<Radio />}
                    label="Any experience"
                  />
                  <FormControlLabel
                    value="none"
                    control={<Radio />}
                    label="None"
                  />
                </RadioGroup>

                {/* <TextField value={location} onChange={e=>setLocation(e.target.value)} placeholder="Almaty" variant="outlined" /> */}
              </FormControl>

              <FormControl
                sx={{ borderRadius: "10px !important", m: 1, minWidth: "100%" }}
              >
                <p>
                  <b>Type of employment</b>
                </p>
                {/* <InputLabel id="demo-simple-select-helper-label">Age</InputLabel> */}
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Full-time"
                  />
                  <FormControlLabel control={<Checkbox />} label="Temporary" />
                  <FormControlLabel control={<Checkbox />} label="Part-time" />
                </RadioGroup>

                {/* <TextField value={location} onChange={e=>setLocation(e.target.value)} placeholder="Almaty" variant="outlined" /> */}
              </FormControl>

              <FormControl
                sx={{ borderRadius: "10px !important", m: 1, minWidth: "80%" }}
              >
                <p>
                  <b>Verified by</b>
                </p>
                {/* <InputLabel id="demo-simple-select-helper-label">Age</InputLabel> */}
                <Select
                  // labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  defaultValue={"SDU"}
                  onChange={(e) => setCategory(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value={"SDU"}>SDU</MenuItem>
                  <MenuItem value={"NU"}>NU</MenuItem>
                  <MenuItem value={"KBTU"}>KBTU</MenuItem>
                  <MenuItem value={"AITU"}>AITU</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          {/* <div className="right-sidebar">
                <div className="company-dashboard">
                <p>YOUR DASHBOARD</p>
                <hr
                    style={{ border: "0.2px solid #dcd5d5", borderRadius: "5px" }}
                />
                <h1 style={{ color: "#2B5BA4" }}>372</h1>
                <span>views today</span>

                <h1 style={{ color: "#2B5BA4" }}>15</h1>
                <span>posts today</span>

                <h1 style={{ color: "#2B5BA4" }}>9</h1>
                <span>search appereances</span>
                </div>
            </div> */}
          {/* <div> */}
            {/* tabs */}
            <div className="tabs-profile">
              <h3>3177 Internships</h3>
              <div className="fea-companies-browse">
                {featured?.map((item, index) => (
                  <Card
                    key={index}
                    variant="outlined"
                    sx={{
                      // width: 273,
                      marginLeft: "5px",
                      marginRight: "5px",
                      marginTop: "10px",
                      marginBottom: "10px",
                      height: "80%",
                    }}
                  >
                    <img
                      src={item.logo}
                      id="rounded-pic"
                      width="60px"
                      height="50px"
                      //   srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                      //   loading="lazy"
                      alt=""
                    />
                    <button
                      style={{
                        position: "absolute",
                        right: "30px",
                        color: "#2B5BA4",
                        background: "rgba(43, 91, 164, 0.09)",
                        borderRadius: "10px",
                        padding: "10px",
                        borderWidth: "0",
                        width: "150px",
                      }}
                    >
                      {item.count_internships} Internships
                    </button>
                    {/* <Typography  sx={{color: '#2B5BA4', background: 'rgba(43, 91, 164, 0.09)', borderRadius: '10px', padding:'5px', borderWidth: '0'}} component={"button"} >
                3 Internships
              </Typography> */}
                    <CardContent sx={{ px: 2 }}>
                      <br />
                      <h2 style={{ textAlign: "left" }}>{item.name}</h2>
                      <p style={{ textAlign: "left" }}>{item.city}</p>
                      <span style={{ textAlign: "left", fontSize: "10px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Consequat nunc ac a magna at elementum. Cras arcu varius
                        in aliquam habitant fermentum. Mi sit lorem mollis vitae
                        quis curabitur vestibulum.
                      </span>
                      <div className="grp_btns">
                        {item.specializations.map((spec, index) => (
                          <button
                            key={index}
                            style={{
                              borderRadius: "10px",
                              // padding: "5px",
                              background: "#ffffff",
                              color: ` ${
                                "#" +
                                Math.floor(Math.random() * 16777215).toString(
                                  16
                                )
                              }`,
                              border: `1px solid ${
                                "#" +
                                Math.floor(Math.random() * 16777215).toString(
                                  16
                                )
                              }`,
                              margin: "5px",
                              // width: "130px",
                            }}
                          >
                            {spec.name}
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          {/* </div> */}
         
        </div>
      </div>
      <Footer />
    </>
  );
}
