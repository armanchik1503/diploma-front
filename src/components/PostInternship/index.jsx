import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
import "./newint.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Footer from "../Footer";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { upload } from "@testing-library/user-event/dist/upload";
import { PostJob, GetCities } from "../requests.js";
import NavigationLog from "../NavigationLog";

export default function Login() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Marketing & Communication");
  const [type, setType] = useState("Full Time");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("Non-paid");
  const [experience, setExperience] = useState("Any experience");
  const [verified, setVerified] = useState("");
  const [occupation, setOccupation] = useState("Online");
  const [certificate, setCertificate] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("English");
  const [cities, setCities] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await GetCities();
      // const response_category = await GetCategories();
      // const response_featured = await GetFeatured();
      // const response_post = await GetLatestPost();
      setCities(response.data);
      // setLatestPost(response_post);
      // setCategories(response_category);
      // setFeatured(response_featured);
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth_data = {
      position: title,
      category: category,
      type: type,
      city_id: location,
      salary: salary,
      experience: experience,
      verified_by: verified,
      occupation: occupation,
      file: certificate,
      description: description,
      skills: skills,
    };
    console.log(auth_data);
    await PostJob(auth_data);
  };

  return (
    <>
      {/* <Navigation /> */}
      <NavigationLog />
      <div className="post-int">
        <h2
          className="headings"
          style={{ marginLeft: "10%", marginRight: "10%" }}
        >
          Post an internship and find a good candidate today!
        </h2>
        <div className="post-intern-main">
          <div>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                flexGrow: 1,
                marginLeft: "1%",
                marginRight: "2%",
                "& > :not(style)": { m: 3, width: "90%" },
              }}
            >
              <Grid
                container
                spacing={1}
                columnSpacing={{ xs: 1, sm: 1, md: 3 }}
              >
                <Grid item xs={12}>
                  <FormControl sx={{ m: 1, minWidth: "100%" }}>
                    <p>
                      <b>Internship Title</b>
                    </p>
                    {/* <InputLabel id="demo-simple-select-helper-label">Age</InputLabel> */}
                    <TextField
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      label="Title"
                      variant="outlined"
                    />

                    {/* <Select
                      // labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value=""
                      label="Title"
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value={""}>Title</MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select> */}
                  </FormControl>

                  {/* <p>
                    <b>Internship Title</b>
                  </p>
                  <TextField
                    label="Internship Title"
                    fullWidth
                    variant="outlined"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  /> */}
                </Grid>
                <Grid item xs={6}>
                  <FormControl sx={{ m: 1, minWidth: "100%" }}>
                    <p>
                      <b>Internship Category</b>
                    </p>
                    {/* <TextField label="Title" variant="outlined" /> */}

                    {/* <InputLabel id="demo-simple-select-helper-label">Age</InputLabel> */}
                    <Select
                      // labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value={"Marketing & Communication"}>
                        Marketing & Communication
                      </MenuItem>
                      <MenuItem value={"Design & Development"}>
                        Design & Development
                      </MenuItem>
                      <MenuItem value={"Human Research & Development"}>
                        Human Research & Development
                      </MenuItem>
                      <MenuItem value={"Finance Management"}>
                        Finance Management
                      </MenuItem>
                      <MenuItem value={"Government Jobs"}>
                        Government Jobs
                      </MenuItem>
                      <MenuItem value={"Business & Consulting"}>
                        Business & Consulting
                      </MenuItem>
                      <MenuItem value={"Customer Support Care"}>
                        Customer Support Care
                      </MenuItem>
                      <MenuItem value={"Project Management"}>
                        Project Management
                      </MenuItem>
                    </Select>
                  </FormControl>
                  {/* <p>
                    <b>Internship Category</b>
                  </p>
                  <TextField
                    fullWidth
                    label="Internship Category"
                    variant="outlined"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  /> */}
                </Grid>
                <Grid item xs={6}>
                  <FormControl sx={{ m: 1, minWidth: "100%" }}>
                    <p>
                      <b>Internship Type</b>
                    </p>
                    {/* <InputLabel id="demo-simple-select-helper-label">Age</InputLabel> */}
                    <Select
                      // labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      placeholder="Full Time"
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value={"Full Time"}>Full Time</MenuItem>
                      <MenuItem value={"Part Time"}>Part Time</MenuItem>
                      <MenuItem value={"Temporary"}>Temporary</MenuItem>
                    </Select>
                  </FormControl>

                  {/* <p>
                    <b>Internship Type</b>
                  </p>
                  <TextField
                    fullWidth
                    label="Internship Type"
                    variant="outlined"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  /> */}
                </Grid>
                <Grid item xs={6}>
                  <FormControl sx={{ m: 1, minWidth: "100%" }}>
                    <p>
                      <b>Internship Location</b>
                    </p>
                    {/* <InputLabel id="demo-simple-select-helper-label">Age</InputLabel> */}
                    <Select
                      // labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      // value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      {cities?.map((item, index) => (
                        <MenuItem key={index} value={item?.id}>{item?.name}</MenuItem>
                      ))}
                      
                    </Select>

                    {/* <TextField value={location} onChange={e=>setLocation(e.target.value)} placeholder="Almaty" variant="outlined" /> */}
                  </FormControl>

                  {/* <p>
                    <b>Internship Location</b>
                  </p>
                  <TextField
                    fullWidth
                    label="Internship Location"
                    width="100% !important"
                    variant="outlined"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  /> */}
                </Grid>
                <Grid item xs={6}>
                  <FormControl sx={{ m: 1, minWidth: "100%" }}>
                    <p>
                      <b>Salary</b>
                    </p>
                    {/* <InputLabel id="demo-simple-select-helper-label">Age</InputLabel> */}
                    <Select
                      // labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="non-paid">Non-paid</MenuItem>
                      <MenuItem value="paid">Paid</MenuItem>
                    </Select>
                  </FormControl>

                  {/* <p>
                    <b>Salary</b>
                  </p>
                  <TextField
                    fullWidth
                    label="Salary"
                    width="100% !important"
                    variant="outlined"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  /> */}
                </Grid>
                <Grid item xs={6}>
                  <FormControl sx={{ m: 1, minWidth: "100%" }}>
                    <p>
                      <b>Experience</b>
                    </p>
                    {/* <InputLabel id="demo-simple-select-helper-label">Age</InputLabel> */}
                    <Select
                      // labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="Any experience">Any experience</MenuItem>
                      <MenuItem value={"none"}>None</MenuItem>
                    </Select>
                  </FormControl>

                  {/* <p>
                    <b>Experience</b>
                  </p>
                  <TextField
                    fullWidth
                    label="Experience"
                    width="100% !important"
                    variant="outlined"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  /> */}
                </Grid>
                <Grid item xs={6}>
                  <FormControl sx={{ m: 1, minWidth: "100%" }}>
                    <p>
                      <b>Verified by</b>
                    </p>
                    {/* <InputLabel id="demo-simple-select-helper-label">Age</InputLabel> */}
                    {/* <Select
                      // labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value=""
                      label="Verified by"
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">Verified by</MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select> */}
                    <TextField
                      fullWidth
                      label="Verified by"
                      width="100% !important"
                      variant="outlined"
                      value={verified}
                      onChange={(e) => {
                        setVerified(e.target.value);
                      }}
                    />
                  </FormControl>

                  {/* <p>
                    <b>Verified by</b>
                  </p>
                  <TextField
                    fullWidth
                    label="Verified by"
                    width="100% !important"
                    variant="outlined"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  /> */}
                </Grid>
                <Grid item xs={6}>
                  <FormControl sx={{ m: 1, minWidth: "100%" }}>
                    <p>
                      <b>Occupation</b>
                    </p>
                    {/* <InputLabel id="demo-simple-select-helper-label">Age</InputLabel> */}
                    <Select
                      // labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="online">Online</MenuItem>
                      <MenuItem value="offline">Offline</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid id="formControl" item xs={5.6}>
                  <FormControl sx={{ m: 1, minWidth: "100%" }}>
                    <span>Upload Verification Certificate(s)</span>
                    {/* <TextField
                    fullWidth
                    label="Upload Verification Certificate(s)"
                    width="100% !important"
                    variant="outlined"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    inputProps={{
                      style: {
                        height: "150px",
                      },
                    }}
                  /> */}
                    {/* <input type="file" id="upload" hidden /> <button style={{marginTop:'50px'}} className="btn btn_upload">
                    Upload
                    
                  </button> */}

                    <input
                      type="file"
                      value={certificate}
                      onChange={(e) => setCertificate(e.target.value)}
                      id="upload"
                      hidden
                    />
                    <label
                      htmlFor="upload"
                      className=" btn_upload"
                      style={{ marginTop: "50px" }}
                    >
                      {" "}
                      Upload{" "}
                    </label>
                  </FormControl>
                </Grid>
                {/* <Grid item xs={12}>
                  <p>
                    <b>Application Deadline</b>
                  </p>
                  <TextField
                    fullWidth
                    label="Internship Application Deadline"
                    width="100% !important"
                    variant="outlined"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Grid> */}

                <Grid item xs={12}>
                  <p>
                    <b>Internship Description</b>
                  </p>
                  <TextField
                    fullWidth
                    inputProps={{
                      style: {
                        height: "300px",
                      },
                    }}
                    label="Internship Description"
                    width="100% !important"
                    variant="outlined"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl sx={{ m: 1, minWidth: "100%" }}>
                    <p>
                      <b>Required Skiils</b>
                    </p>
                    {/* <InputLabel id="demo-simple-select-helper-label">Age</InputLabel> */}
                    <Select
                      // labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={skills}
                      onChange={(e) => setSkills(e.target.value)}
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="English">English</MenuItem>
                      <MenuItem value={"Creativity"}>Creativity</MenuItem>
                      <MenuItem value={"Responsibility"}>
                        Responsibility
                      </MenuItem>
                      <MenuItem value={"Self-study"}>Self-study</MenuItem>
                      <MenuItem value={"Punctuality"}>Punctuality</MenuItem>
                    </Select>
                  </FormControl>
                  {/* <TextField
                    fullWidth
                    label="Experience"
                    width="100% !important"
                    variant="outlined"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  /> */}
                </Grid>
              </Grid>
              <button
                type="submit"
                style={{ marginRight: "7%" }}
                className="btn btn_auth_reg"
              >
                Post
              </button>
            </Box>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
