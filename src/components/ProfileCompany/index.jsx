import { useState } from "react";
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
import { Button, Grid } from "@mui/material";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fffff",
  // theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  marginBottom: "20px",
  // textAlign: "center",
  color: "black",
}));

export default function ProfileCompany() {
  const navigate = useNavigate();

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

  function handleClick(e){
    e.preventDefault();
    setIsClosed(false);
  }

  return (
    <>
      <Navigation />
      <div className="profile">
        <div className="company-main">
          <div>
            <div className="company-name">
              <img src={archi} alt="" width={"100%"} />
              <div className="profile-grid">
                <div>
                  <img
                    src={kaspi}
                    style={{ position: "relative", top: "-40px", left: "30px" }}
                  />
                </div>

                <div
                  style={{ position: "relative", top: "10px", left: "10px" }}
                >
                  <Grid
                    container
                    spacing={1}
                    columnSpacing={{ xs: 1, sm: 1, md: 3 }}
                  >
                    <Grid item xs={8}>
                      <h3>Kaspi.kz</h3>
                      <p>https://kaspi.kz</p>
                    </Grid>
                    <Grid item xs={4}>
                      <button
                        style={{
                          position: "relative",
                          top: "15px",
                          float: "right",
                          right: "35px",
                        }}
                        className="btn"
                        onClick={(e) => navigate("/post-internship")}
                      >
                        + Post An Internship
                      </button>
                    </Grid>
                    <Grid item xs={3}>
                      <Grid
                        container
                        spacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={3}>
                          <img src={kaspi} height="30px" />
                        </Grid>
                        <Grid item xs={9}>
                          <span>Founded</span>
                          <br />
                          <span>July 31, 2011</span>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={3}>
                      <Grid
                        container
                        spacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={3}>
                          <img src={kaspi} height="30px" />
                        </Grid>
                        <Grid item xs={9}>
                          <span>Founded</span>
                          <br />
                          <span>July 31, 2011</span>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={3}>
                      <Grid
                        container
                        spacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={3}>
                          <img src={kaspi} height="30px" />
                        </Grid>
                        <Grid item xs={9}>
                          <span>Founded</span>
                          <br />
                          <span>July 31, 2011</span>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={3}>
                      <Grid
                        container
                        spacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={3}>
                          <img src={kaspi} height="30px" />
                        </Grid>
                        <Grid item xs={9}>
                          <span>Founded</span>
                          <br />
                          <span>July 31, 2011</span>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
            {/* tabs */}
            <div className="tabs-profile">
              <Tabs>
                <TabList>
                  <Tab>PROFILE</Tab>
                  <Tab onClick={(e) => setIsClosed(true)}>MY INTERNSHIPS</Tab>
                </TabList>

                <TabPanel>
                  <div className="about-profile">
                    <h3>About</h3>
                    <p>
                      Kaspi Bank is a high-tech company that offers financial
                      and banking services and products for retail and
                      commercial banking. In addition to banking services, Kaspi
                      Bank's activities include retail financial services,
                      electronic payments.
                    </p>
                    {/* <Button variant="primary">SEE MORE</Button> */}
                    <Link to="/">SEE MORE</Link>
                  </div>
                  <div className="contact about-profile">
                    <h3>Contact</h3>
                    <button className="btn-contact">
                      <b>insta.com/kaspi</b>
                    </button>
                    <button className="btn-contact">
                      <b>facebook.com/kaspi</b>
                    </button>
                    <button className="btn-contact">
                      <b>twitter.com/kaspi</b>
                    </button>
                  </div>
                  <div className="team-profile">
                    <h3>Team</h3>
                    <Grid
                      container
                      spacing={1}
                      columnSpacing={{ xs: 2, sm: 3, md: 4 }}
                    >
                      <Grid item xs={4}>
                        <img src={girl} width={"95%"} />
                        <h3>Emily Willis</h3>
                        <p>UX/UI designer</p>
                      </Grid>
                      <Grid item xs={4}>
                        <img src={girl} width={"95%"} />
                        <h3>Emily Willis</h3>
                        <p>UX/UI designer</p>
                      </Grid>
                      <Grid item xs={4}>
                        <img src={girl} width={"95%"} />
                        <h3>Emily Willis</h3>
                        <p>UX/UI designer</p>
                      </Grid>
                    </Grid>
                    <Link to={"/"}>SEE ALL(12)</Link>
                  </div>
                  <div className="benefits-profile">
                    <h3 style={{ marginBottom: "35px" }}>Benefits</h3>

                    <Grid
                      container
                      spacing={1}
                      columnSpacing={{ xs: 2, sm: 3, md: 4 }}
                    >
                      <Grid item xs={4}>
                        <Item>
                          <img src={icon} />
                          <h2>Skill Development</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Consequat nunc ac a magna at elementum. Cras
                            arcu varius in aliquam habitant fermentum. Mi sit
                            lorem mollis vitae quis curabitur vestibulum.
                          </p>
                        </Item>
                      </Grid>
                      <Grid item xs={4}>
                        <Item>
                          <img src={icon} />
                          <h2>Skill Development</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Consequat nunc ac a magna at elementum. Cras
                            arcu varius in aliquam habitant fermentum. Mi sit
                            lorem mollis vitae quis curabitur vestibulum.
                          </p>
                        </Item>
                      </Grid>
                      <Grid item xs={4}>
                        <Item>
                          <img src={icon} />
                          <h2>Skill Development</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Consequat nunc ac a magna at elementum. Cras
                            arcu varius in aliquam habitant fermentum. Mi sit
                            lorem mollis vitae quis curabitur vestibulum.
                          </p>
                        </Item>
                      </Grid>
                      <Grid item xs={4}>
                        <Item>
                          <img src={icon} />
                          <h2>Skill Development</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Consequat nunc ac a magna at elementum. Cras
                            arcu varius in aliquam habitant fermentum. Mi sit
                            lorem mollis vitae quis curabitur vestibulum.
                          </p>
                        </Item>
                      </Grid>
                      <Grid item xs={4}>
                        <Item>
                          <img src={icon} />
                          <h2>Skill Development</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Consequat nunc ac a magna at elementum. Cras
                            arcu varius in aliquam habitant fermentum. Mi sit
                            lorem mollis vitae quis curabitur vestibulum.
                          </p>
                        </Item>
                      </Grid>
                      <Grid item xs={4}>
                        <Item>
                          <img src={icon} />
                          <h2>Skill Development</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Consequat nunc ac a magna at elementum. Cras
                            arcu varius in aliquam habitant fermentum. Mi sit
                            lorem mollis vitae quis curabitur vestibulum.
                          </p>
                        </Item>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="verified_by">
                    <h3>Team</h3>
                    <Grid
                      container
                      spacing={1}
                      columnSpacing={{ xs: 2, sm: 3, md: 4 }}
                    >
                      <Grid sx={{ margin: "auto" }} item xs={2}>
                        <img src={logouni} width={80} height={80} />
                      </Grid>
                      <Grid item xs={10}>
                        <h4>Suleyman Demirel University</h4>
                        <p>
                          Bachelor's degree Field Of StudyComputer and
                          Information Systems Security/Information Assurance
                        </p>
                        <span>2013 — 2017</span>
                        <br />
                        <span>
                          Additional English classes and UX profile courses​.
                        </span>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="real_reviews verified_by">
                    <h3>Real reviews by students</h3>
                    <div className="reviewer-profile">
                      <Grid
                        container
                        spacing={1}
                        columnSpacing={{ xs: 2, sm: 3, md: 4 }}
                      >
                        <Grid sx={{ textAlign: "center" }} item xs={2}>
                          <img src={reviewer} width={"80%"} />
                        </Grid>
                        <Grid item xs={10}>
                          <span>Aibek Berdanov</span>
                          <br />
                          <span style={{ fontSize: "12px" }}>a month ago</span>
                          <p>
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                          </p>
                        </Grid>
                        <Grid item xs={12}>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book, but also
                            the leap into electronic typesetting, remaining
                            essentially unchanged.
                          </p>
                        </Grid>
                      </Grid>
                    </div>
                    <Button variant="primary">SHOW ALL</Button>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div hidden={!isClosed} className="internship-list-profile">
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
                            Mollit in laborum tempor Lorem incididunt irure.
                            Aute eu ex ad sunt. Pariatur sint culpa do
                            incididunt eiusmod eiusmod culpa. laborum tempor
                            Lorem incididunt.
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
                            Mollit in laborum tempor Lorem incididunt irure.
                            Aute eu ex ad sunt. Pariatur sint culpa do
                            incididunt eiusmod eiusmod culpa. laborum tempor
                            Lorem incididunt.
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
                            Mollit in laborum tempor Lorem incididunt irure.
                            Aute eu ex ad sunt. Pariatur sint culpa do
                            incididunt eiusmod eiusmod culpa. laborum tempor
                            Lorem incididunt.
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
                            Mollit in laborum tempor Lorem incididunt irure.
                            Aute eu ex ad sunt. Pariatur sint culpa do
                            incididunt eiusmod eiusmod culpa. laborum tempor
                            Lorem incididunt.
                          </p>
                        </Grid>
                      </Grid>
                    </Item>
                  </div>

                  <div
                    hidden={isClosed}
                    className="internship-info internship-list-profile"
                  >
                    {/* <Item> */}
                    <div className="item">
                      <Grid
                        container
                        spacing={2}
                        columnSpacing={{ xs: 4, sm: 2, md: 1 }}
                      >
                        <Grid sx={{ textAlign: "center" }} item xs={1.5}>
                          <img src={girl} width={"90%"} />
                        </Grid>
                        <Grid item xs={2.5}>
                          <span>
                            <b>Darlene Black</b>
                          </span>
                          <br />
                          <span>Suleyman Demirel University</span>
                        </Grid>

                        <Grid sx={{ textAlign: "center" }} item xs={1}>
                          <p>Designer</p>
                        </Grid>
                        <Grid sx={{ textAlign: "center" }} item xs={1}>
                          <p>19 y.o.</p>
                        </Grid>

                        <Grid sx={{ textAlign: "center" }} item xs={2}>
                          <button className="btn-profile">your cv.pdf</button>
                        </Grid>
                        <Grid sx={{ textAlign: "center" }} item xs={2}>
                          <button className="btn-profile" color="blue">
                            Video.mp4
                          </button>
                        </Grid>

                        <Grid sx={{ textAlign: "center" }} item xs={2}>
                          <button className="btn-profile-blue">Approve</button>
                        </Grid>
                      </Grid>
                    </div>

                    <div className="item">
                      <Grid
                        container
                        spacing={2}
                        columnSpacing={{ xs: 4, sm: 2, md: 1 }}
                      >
                        <Grid sx={{ textAlign: "center" }} item xs={1.5}>
                          <img src={girl} width={"90%"} />
                        </Grid>
                        <Grid item xs={2.5}>
                          <span>
                            <b>Darlene Black</b>
                          </span>
                          <br />
                          <span>Suleyman Demirel University</span>
                        </Grid>

                        <Grid sx={{ textAlign: "center" }} item xs={1}>
                          <p>Designer</p>
                        </Grid>
                        <Grid sx={{ textAlign: "center" }} item xs={1}>
                          <p>19 y.o.</p>
                        </Grid>

                        <Grid sx={{ textAlign: "center" }} item xs={2}>
                          <button className="btn-profile">your cv.pdf</button>
                        </Grid>
                        <Grid sx={{ textAlign: "center" }} item xs={2}>
                          <button className="btn-profile" color="blue">
                            Video.mp4
                          </button>
                        </Grid>

                        <Grid sx={{ textAlign: "center" }} item xs={2}>
                          <button className="btn-profile-blue">Approve</button>
                        </Grid>
                      </Grid>
                    </div>

                    <div className="item">
                      <Grid
                        container
                        spacing={2}
                        columnSpacing={{ xs: 4, sm: 2, md: 1 }}
                      >
                        <Grid sx={{ textAlign: "center" }} item xs={1.5}>
                          <img src={girl} width={"90%"} />
                        </Grid>
                        <Grid item xs={2.5}>
                          <span>
                            <b>Darlene Black</b>
                          </span>
                          <br />
                          <span>Suleyman Demirel University</span>
                        </Grid>

                        <Grid sx={{ textAlign: "center" }} item xs={1}>
                          <p>Designer</p>
                        </Grid>
                        <Grid sx={{ textAlign: "center" }} item xs={1}>
                          <p>19 y.o.</p>
                        </Grid>

                        <Grid sx={{ textAlign: "center" }} item xs={2}>
                          <button className="btn-profile">your cv.pdf</button>
                        </Grid>
                        <Grid sx={{ textAlign: "center" }} item xs={2}>
                          <button className="btn-profile" color="blue">
                            Video.mp4
                          </button>
                        </Grid>

                        <Grid sx={{ textAlign: "center" }} item xs={2}>
                          <button className="btn-profile-blue">Approve</button>
                        </Grid>
                      </Grid>
                    </div>

                    <div className="item">
                      <Grid
                        container
                        spacing={2}
                        columnSpacing={{ xs: 4, sm: 2, md: 1 }}
                      >
                        <Grid sx={{ textAlign: "center" }} item xs={1.5}>
                          <img src={girl} width={"90%"} />
                        </Grid>
                        <Grid item xs={2.5}>
                          <span>
                            <b>Darlene Black</b>
                          </span>
                          <br />
                          <span>Suleyman Demirel University</span>
                        </Grid>

                        <Grid sx={{ textAlign: "center" }} item xs={1}>
                          <p>Designer</p>
                        </Grid>
                        <Grid sx={{ textAlign: "center" }} item xs={1}>
                          <p>19 y.o.</p>
                        </Grid>

                        <Grid sx={{ textAlign: "center" }} item xs={2}>
                          <button className="btn-profile">your cv.pdf</button>
                        </Grid>
                        <Grid sx={{ textAlign: "center" }} item xs={2}>
                          <button className="btn-profile" color="blue">
                            Video.mp4
                          </button>
                        </Grid>

                        <Grid sx={{ textAlign: "center" }} item xs={2}>
                          <button className="btn-profile-blue">Approve</button>
                        </Grid>
                      </Grid>
                    </div>
                    {/* </Item> */}
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
          <div className="right-sidebar">
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
