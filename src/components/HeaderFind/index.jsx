import Input from "@mui/joy/Input";
import { useState, useEffect } from "react";
import Divider from "@mui/joy/Divider";
import { CiLocationOn } from "react-icons/ci";
import { GetCities, GetCategories, GetFeatured, GetLatestPost } from "../requests";
import { Link, useNavigate } from "react-router-dom";

import { BsSearch } from "react-icons/bs";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

export default function HeaderFind() {

  const navigate = useNavigate();


  const [title, setTitle] = useState();
  const [cities, setCities] = useState();
  const [location, setLocation] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await GetCities();
      setCities(response.data);
    }
    fetchData();
  }, []);
  function handleClickSearch() {
    const data_to_search = {
      
    }
    navigate('/find-internship')
  }
  return (
    <div className="main-content-header">
      <div style={{ marginLeft: '64px',
    marginRight: '64px '}}>
        <h1 style={{ marginTop: "100px" }}>
          Find Your Perfect{" "}
          <span style={{ color: "#2B5BA4" }}>Internship </span> Today!
        </h1>
        <p>
          There are numerous internships available in the fields of computer
          science, engineering, and technology, that are awaiting your
          application.
        </p>

        <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 550,

              marginTop: "75px",
              //   marginLeft: "70px",
              alignSelf: "center",
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <BsSearch />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1, fontSize: "small" }}
              placeholder="Search Title or Keyword"
              inputProps={{ "aria-label": "search Title" }}
              onChange={(e) => setTitle(e.target.value)}
            />
            {/* <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <BsSearch />
            </IconButton> */}
            <Divider sx={{ height: 40, m: 0 }} orientation="vertical" />
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            >
              <CiLocationOn color="black" />
            </IconButton>
            <select
              style={{
                border: "none",
                borderBottom: "0px solid",
                paddingRight: "25px",
                color: "#a2a2a2",
              }}
              defaultValue={""}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="" disabled>
                Search Location
              </option>
              {cities?.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
            {/* <InputBase
              sx={{ ml: 1, flex: 1, fontSize: "small" }}
              placeholder="Search Location"
              inputProps={{ "aria-label": "search Location" }}
            /> */}
            <button onClick={handleClickSearch} className="btn btn_subsc">
              Search
            </button>
          </Paper>
      </div>
      
    </div>
  );
}
