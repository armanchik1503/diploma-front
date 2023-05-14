import { useState, useEffect } from "react";
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
import NavigationLog from "../NavigationLog";
import Checkbox from "@mui/material/Checkbox";
import {
  GetCities,
  GetCategories,
  GetFeatured,
  GetLatestPost,
} from "../requests";

import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fffff",
  // theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  marginBottom: "20px",
  // textAlign: "center",
  color: "black",
}));

export default function FindInternship() {
  const navigate = useNavigate();
  const [location, setLocation] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [category, setCategory] = useState(null);

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

  function handleClick(e) {
    e.preventDefault();
    setIsClosed(false);
  }
  const isAuth = sessionStorage.getItem("token") ? true : false;
  const [cities, setCities] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await GetCities();
      const response_category = await GetCategories();
      // const response_featured = await GetFeatured();
      // const response_post = await GetLatestPost();
      setCities(response.data);
      // setLatestPost(response_post);
      setCategories(response_category);
      // setFeatured(response_featured);
    }
    fetchData();
  }, []);
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
        <div className="company-main-find">
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
          {/* <div> */}
          {/* tabs */}
          <div className="tabs-profile">
            <h3>3177 Internships</h3>
            <div className="internship-list-profile">
              <Item>
                <Grid
                  container
                  spacing={2}
                  columnSpacing={{ xs: 4, sm: 2, md: 1 }}
                >
                  <Grid sx={{ textAlign: "center" }} item xs={2}>
                    <img src={notion} width={"60%"} />
                  </Grid>
                  <Grid item xs={10}>
                    <span>Notion</span>
                    <br />
                    <h2 onClick={handleClick}>Junior UI Designer</h2>
                    <span>Madrid |</span>
                    <span> Fulltime |</span>
                    <span> $30-32k |</span>
                    <span> 1 day ago </span>
                    <p>
                      Mollit in laborum tempor Lorem incididunt irure. Aute eu
                      ex ad sunt. Pariatur sint culpa do incididunt eiusmod
                      eiusmod culpa. laborum tempor Lorem incididunt.
                    </p>
                  </Grid>
                </Grid>
              </Item>

              <Item>
                <Grid
                  container
                  spacing={2}
                  columnSpacing={{ xs: 4, sm: 2, md: 1 }}
                >
                  <Grid sx={{ textAlign: "center" }} item xs={2}>
                    <img src={notion} width={"60%"} />
                  </Grid>
                  <Grid item xs={10}>
                    <span>Notion</span>
                    <br />
                    <h2>Junior UI Designer</h2>
                    <span>Madrid |</span>
                    <span> Fulltime |</span>
                    <span> $30-32k |</span>
                    <span> 1 day ago </span>
                    <p>
                      Mollit in laborum tempor Lorem incididunt irure. Aute eu
                      ex ad sunt. Pariatur sint culpa do incididunt eiusmod
                      eiusmod culpa. laborum tempor Lorem incididunt.
                    </p>
                  </Grid>
                </Grid>
              </Item>

              <Item>
                <Grid
                  container
                  spacing={2}
                  columnSpacing={{ xs: 4, sm: 2, md: 1 }}
                >
                  <Grid sx={{ textAlign: "center" }} item xs={2}>
                    <img src={notion} width={"60%"} />
                  </Grid>
                  <Grid item xs={10}>
                    <span>Notion</span>
                    <br />
                    <h2>Junior UI Designer</h2>
                    <span>Madrid |</span>
                    <span> Fulltime |</span>
                    <span> $30-32k |</span>
                    <span> 1 day ago </span>
                    <p>
                      Mollit in laborum tempor Lorem incididunt irure. Aute eu
                      ex ad sunt. Pariatur sint culpa do incididunt eiusmod
                      eiusmod culpa. laborum tempor Lorem incididunt.
                    </p>
                  </Grid>
                </Grid>
              </Item>

              <Item>
                <Grid
                  container
                  spacing={2}
                  columnSpacing={{ xs: 4, sm: 2, md: 1 }}
                >
                  <Grid sx={{ textAlign: "center" }} item xs={2}>
                    <img src={notion} width={"60%"} />
                  </Grid>
                  <Grid item xs={10}>
                    <span>Notion</span>
                    <br />
                    <h2>Junior UI Designer</h2>
                    <span>Madrid |</span>
                    <span> Fulltime |</span>
                    <span> $30-32k |</span>
                    <span> 1 day ago </span>
                    <p>
                      Mollit in laborum tempor Lorem incididunt irure. Aute eu
                      ex ad sunt. Pariatur sint culpa do incididunt eiusmod
                      eiusmod culpa. laborum tempor Lorem incididunt.
                    </p>
                  </Grid>
                </Grid>
              </Item>
            </div>
            {/* </div> */}
          </div>
          <div className="right-sidebar">
            <div className="company-dashboard-find-right ">
              <p><b>📨  Email me for internships</b></p>
              <hr
                style={{ border: "0.2px solid #dcd5d5", borderRadius: "5px" }}
              />
<br />
              
              <span>Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat commodo ea foes.</span>
<br />
<br />
              <TextField sx={{width:'100%'}} placeholder="name@mail.com"/>

              <button style={{width:'100%', marginTop:10}} className="btn">Subcribe</button>
            </div>
            <div className="company-dashboard-find-right ">
              <p><b>🚀 Get noticed faster</b></p>
              <hr
                style={{ border: "0.2px solid #dcd5d5", borderRadius: "5px" }}
              />
<br />
              
              <span>Quis eiusmod deserunt cillum laboris magna cupidatat esse labore irure quis cupidatat in.</span>
<br />
<br />
              {/* <TextField sx={{width:'100%'}} placeholder="name@mail.com"/> */}

              <button style={{width:'100%', marginTop:10}} className="btn">Register</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
