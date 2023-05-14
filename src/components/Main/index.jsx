import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import eclipse2 from "../../assets/eclipse2.jpg";
import notion from "../../assets/notion.png";
import picture from "../../assets/picture.svg";
import rounded from "../../assets/rounded.png";
import line from "../../assets/line.png";
import logo from "../../assets/logo.png";
import Footer from "../Footer";
import Navigation from "../Navigation";
import Input from "@mui/joy/Input";
import { BsSearch } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { GetCities, GetCategories, GetFeatured, GetLatestPost } from "../requests";

import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import NavigationLog from "../NavigationLog";

export default function Main() {
  const navigate = useNavigate();
const isAuth = sessionStorage.getItem('token') ? true : false
  const [cities, setCities] = useState();
  const [categories, setCategories] = useState();
  const [featured, setFeatured] = useState();
  const [latest_post, setLatestPost] = useState();
  const [location, setLocation] = useState();
  const [title, setTitle] = useState();
  console.log(location, title);
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  useEffect(() => {
    async function fetchData() {
      const response = await GetCities();
      const response_category = await GetCategories();
      const response_featured = await GetFeatured();
      const response_post = await GetLatestPost();
      setCities(response.data);
      setLatestPost(response_post);
      setCategories(response_category);
      setFeatured(response_featured);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   async function fetchDataCat() {
  //       // const response = await GetCities();
  //       // setCities(response.data);
  //       const response_category = await GetCategories();
  //       // setCategories(response_category);
  //   }
  //   fetchDataCat();
  // }, []);

  // useEffect(() => {
  //  const getCities = async () => {
  //   const list_of_cities = await GetCities();
  //   setCities(list_of_cities.data);
  // };

  // const getCategories = async () => {
  //   const list_of = await GetCategories();
  //   setCategories(list_of);
  // };

  //   getCities();
  //   getCategories();
  // }, []);

  function handleClickSearch() {
    const data_to_search = {
      
    }
    navigate('/find-internship')
  }

  return (
    <div>
      {isAuth ? <NavigationLog /> : <Navigation /> }
      
      <div className="main-content">
        <div style={{ marginLeft: "10%" }}>
          <h1 style={{ marginTop: "100px" }}>
            Unlock Your Potential: Find Your Perfect <br /> Internship Today!
          </h1>
          <h3>
            Boost your opportunities and let employers discover your potential.
          </h3>

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

          {/* <Input
            startDecorator={<BsSearch />}
            endDecorator={<button className="btn btn_subsc">Subscribe</button>}
            placeholder="Search Title or Keyword"
            sx={{
              "--Input-focusedThickness": "2px",
              "--Input-placeholderOpacity": 0.5,
              "--Input-gap": "9px",
              "--Input-radius": "12px",
              marginTop: "45px",
              //   marginLeft: "70px",
              alignSelf: "center",
              width: "550px",
            }}
          /> */}
        </div>
        <div className="eclipse2">
          <img
            src={eclipse2}
            className="eclipse"
            alt="eclipse"
            height={"50px"}
          />
        </div>
      </div>
      <h2 style={{ marginTop: "100px", textAlign: "center" }}>
        Explore by <br />
        <span style={{ color: "#2B5BA4" }}>categories</span>
      </h2>
      <div className="gridCard">
        {categories?.map((item, index) => (
          <div key={index} className="card">
            <Card
              orientation="horizontal"
              variant="outlined"
              sx={{
                width: 273,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <CardOverflow>
                <AspectRatio ratio="1" sx={{ width: 90 }}>
                  <img
                    src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                    srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
              </CardOverflow>
              <CardContent sx={{ px: 2 }}>
                <Typography fontWeight="md" mb={0.5}>
                  {item?.name}
                </Typography>
                <Typography level="body2">
                  {item?.count} Jobs Available
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div style={{ paddingBottom: "120px" }} className="main-content">
        <div style={{ marginLeft: "10%", marginRight: "40px" }}>
          <h1 style={{ marginTop: "100px" }}>Find Intern</h1>
          <span>
            By offering internships, you can benefit your organization by
            attracting top talent, enhancing your brand reputation, and
            fostering a culture of innovation and creativity. So, take the first
            step towards empowering the future generation by posting your
            internship opportunities today!
          </span>

          <h4>
            Register{" "}
            <img src={line} className="line" alt="line" height={"10px"} />
            Post <img src={line} className="line" alt="line" height={"10px"} />
            Hire
          </h4>
          <button onClick={(e) => navigate("/post-internship")} className="btn">
            + Post Internship
          </button>
        </div>
        <div
          style={{ marginLeft: "70px", marginRight: "10%" }}
          className="eclipse2"
        >
          <img src={picture} className="picture" alt="picture" />
        </div>
      </div>
      <h2 style={{ marginTop: "100px", textAlign: "center" }}>
        Featured <br />
        <span style={{ color: "#2B5BA4" }}>companies</span>
      </h2>
      <div className="fea-companies">
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
              height: '80%',
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
                Consequat nunc ac a magna at elementum. Cras arcu varius in
                aliquam habitant fermentum. Mi sit lorem mollis vitae quis
                curabitur vestibulum.
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
                        "#" + Math.floor(Math.random() * 16777215).toString(16)
                      }`,
                      border: `1px solid ${
                        "#" + Math.floor(Math.random() * 16777215).toString(16)
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
      <div style={{ paddingTop: "10px", background: "#ffffff" }}>
        <h2 style={{ marginTop: "100px", textAlign: "center" }}>
          Latest <span style={{ color: "#2B5BA4" }}>posts</span>
        </h2>
        <div className="main-content-posts">
          {/* {latest_post?.map((item, index) => ( */}
          {/* //   <div className="post">
          //   <Card orientation="horizontal" variant="solid">
          //     <CardOverflow>
          //       <AspectRatio ratio="1" sx={{ width: 90 }}>
          //         <img src={item.company?.logo} loading="lazy" alt="" />
          //       </AspectRatio>
          //     </CardOverflow>
          //     <CardContent sx={{ px: 2 }}>
          //       <span style={{ fontSize: "12px", color: "black" }}>{item.company.name}</span>
          //       <p style={{ fontSize: "14px", color: "black" }}>
          //        {item.position}
          //       </p>
          //       <p style={{ fontSize: "12px", color: "black" }}>
          //         || {item.city.name} || Fulltime {item.salary}k || 1 day ago
          //       </p>
          //       <Typography fontWeight="md" mb={0.5}>
          //         {item.description}
          //       </Typography>
          //     </CardContent>
          //   </Card>
          // </div> */}
<>
          <div className="post">
          <Card orientation="horizontal" variant="solid" >
            <CardOverflow>
              <AspectRatio ratio="1" sx={{ width: 90 }}>
                <img
                  src={notion}
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ px: 2 }}>
                <span style={{fontSize: '12px', color: 'black'}}>Notion</span>
                <p style={{fontSize: '14px', color: 'black'}}>Junior UI Designer</p>
                <p style={{fontSize: '12px', color: 'black'}}>|| Madrid    || Fulltime    $ 30-32k    || 1 day ago</p>
              <Typography fontWeight="md" mb={0.5}>
              Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. 
              Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="post">
          <Card orientation="horizontal" variant="solid" >
            <CardOverflow>
              <AspectRatio ratio="1" sx={{ width: 90 }}>
                <img
                  src={notion}
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ px: 2 }}>
                <span style={{fontSize: '12px', color: 'black'}}>Notion</span>
                <p style={{fontSize: '14px', color: 'black'}}>Junior UI Designer</p>
                <p style={{fontSize: '12px', color: 'black'}}>|| Madrid    || Fulltime    $ 30-32k    || 1 day ago</p>
              <Typography fontWeight="md" mb={0.5}>
              Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. 
              Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="post">
          <Card orientation="horizontal" variant="solid" >
            <CardOverflow>
              <AspectRatio ratio="1" sx={{ width: 90 }}>
                <img
                  src={notion}
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ px: 2 }}>
                <span style={{fontSize: '12px', color: 'black'}}>Notion</span>
                <p style={{fontSize: '14px', color: 'black'}}>Junior UI Designer</p>
                <p style={{fontSize: '12px', color: 'black'}}>|| Madrid    || Fulltime    $ 30-32k    || 1 day ago</p>
              <Typography fontWeight="md" mb={0.5}>
              Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. 
              Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="post">
          <Card orientation="horizontal" variant="solid" >
            <CardOverflow>
              <AspectRatio ratio="1" sx={{ width: 90 }}>
                <img
                  src={notion}
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ px: 2 }}>
                <span style={{fontSize: '12px', color: 'black'}}>Notion</span>
                <p style={{fontSize: '14px', color: 'black'}}>Junior UI Designer</p>
                <p style={{fontSize: '12px', color: 'black'}}>|| Madrid    || Fulltime    $ 30-32k    || 1 day ago</p>
              <Typography fontWeight="md" mb={0.5}>
              Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. 
              Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="post">
          <Card orientation="horizontal" variant="solid" >
            <CardOverflow>
              <AspectRatio ratio="1" sx={{ width: 90 }}>
                <img
                  src={notion}
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ px: 2 }}>
                <span style={{fontSize: '12px', color: 'black'}}>Notion</span>
                <p style={{fontSize: '14px', color: 'black'}}>Junior UI Designer</p>
                <p style={{fontSize: '12px', color: 'black'}}>|| Madrid    || Fulltime    $ 30-32k    || 1 day ago</p>
              <Typography fontWeight="md" mb={0.5}>
              Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. 
              Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="post">
          <Card orientation="horizontal" variant="solid" >
            <CardOverflow>
              <AspectRatio ratio="1" sx={{ width: 90 }}>
                <img
                  src={notion}
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ px: 2 }}>
                <span style={{fontSize: '12px', color: 'black'}}>Notion</span>
                <p style={{fontSize: '14px', color: 'black'}}>Junior UI Designer</p>
                <p style={{fontSize: '12px', color: 'black'}}>|| Madrid    || Fulltime    $ 30-32k    || 1 day ago</p>
              <Typography fontWeight="md" mb={0.5}>
              Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. 
              Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="post">
          <Card orientation="horizontal" variant="solid" >
            <CardOverflow>
              <AspectRatio ratio="1" sx={{ width: 90 }}>
                <img
                  src={notion}
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ px: 2 }}>
                <span style={{fontSize: '12px', color: 'black'}}>Notion</span>
                <p style={{fontSize: '14px', color: 'black'}}>Junior UI Designer</p>
                <p style={{fontSize: '12px', color: 'black'}}>|| Madrid    || Fulltime    $ 30-32k    || 1 day ago</p>
              <Typography fontWeight="md" mb={0.5}>
              Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. 
              Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="post">
          <Card orientation="horizontal" variant="solid" >
            <CardOverflow>
              <AspectRatio ratio="1" sx={{ width: 90 }}>
                <img
                  src={notion}
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ px: 2 }}>
                <span style={{fontSize: '12px', color: 'black'}}>Notion</span>
                <p style={{fontSize: '14px', color: 'black'}}>Junior UI Designer</p>
                <p style={{fontSize: '12px', color: 'black'}}>|| Madrid    || Fulltime    $ 30-32k    || 1 day ago</p>
              <Typography fontWeight="md" mb={0.5}>
              Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. 
              Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.
              </Typography>
            </CardContent>
          </Card>
        </div>
        </>
          {/* ) */}

          {/* )} */}
          
      
        </div>
      </div>
      <Footer />
    </div>
  );
}
