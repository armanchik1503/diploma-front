import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
import Footer from "../Footer";
import archi from "../../assets/archi.png";
import notion from "../../assets/notion.png";
import script from "../../assets/script.png";
import project from "../../assets/project.png";
import icon from "../../assets/icon.png";
import star from "../../assets/star.png";
import navigation from "../../assets/navigation.png";
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

export default function Login() {
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

  function handleClick(e) {
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
                    src={script}
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
                    <Grid item xs={6}>
                      <h3>Dmitry Kargaev</h3>
                    </Grid>
                    <Grid item xs={6}>
                      <p>
                        <img src={navigation} /> Saint Petersburg, Russian
                        Federation
                      </p>
                    </Grid>
                    <Grid item xs={12}>
                      <p>
                        Freelance UX/UI designer, 80+ projects in web design,
                        mobile apps (iOS & android) and creative projects. Open
                        to offers.
                      </p>
                    </Grid>

                    <Grid item xs={12}>
                      <button className="btn">Contact Info</button>
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
                  <Tab onClick={(e) => setIsClosed(true)}>MY APPLICATIONS</Tab>
                  <Tab onClick={(e) => setIsClosed(true)}>Responses (3)</Tab>
                </TabList>

                <TabPanel>
                  <div className="about-profile">
                    <h3>About</h3>
                    <p>
                      I'm more experienced in eCommerce web projects and mobile
                      banking apps, but also like to work with creative
                      projects, such as landing pages or unusual corporate
                      websites.
                    </p>
                    {/* <Button variant="primary">SEE MORE</Button> */}
                    <Link to="/">SEE MORE</Link>
                  </div>
                  <div className="team-profile">
                    <h3>Projects</h3>
                    {/* <span>3 of 12</span> */}
                    <Grid
                      container
                      spacing={1}
                      columnSpacing={{ xs: 2, sm: 3, md: 4 }}
                    >
                      <Grid item xs={4}>
                        <img src={project} width={"95%"} />
                        <p>
                          <b>Zara redesign concept</b>
                        </p>
                        <p>UX/UI design, 15.07.2019</p>
                      </Grid>
                      <Grid item xs={4}>
                        <img src={project} width={"95%"} />
                        <h3>Zara redesign concept</h3>
                        <p>UX/UI design, 15.07.2019</p>
                      </Grid>
                      <Grid item xs={4}>
                        <img src={project} width={"95%"} />
                        <h3>Zara redesign concept</h3>
                        <p>UX/UI design, 15.07.2019</p>
                      </Grid>
                    </Grid>
                    <Link to={"/"}>SEE ALL(12)</Link>
                  </div>
                  <div className="contact about-profile">
                    <h3>Skills & Endoresments</h3>
                    <Grid
                      container
                      spacing={2}
                      columnSpacing={{ xs: 2, sm: 2, md: 6 }}
                    >
                      <Grid item={4}>
                        <Item>
                          <Grid
                            container
                            spacing={1}
                            columnSpacing={{ xs: 1, sm: 1, md: 3 }}
                          >
                            <Grid item xs={10}>
                              <p>
                                <b>User experience (UX)</b>
                              </p>
                            </Grid>
                            <Grid item xs={2}>
                              <p style={{ color: "#2B5BA4" }}>
                                <b>6</b>
                              </p>
                            </Grid>
                          </Grid>
                        </Item>
                      </Grid>

                      <Grid item={4}>
                        <Item>
                          <Grid
                            container
                            spacing={1}
                            columnSpacing={{ xs: 1, sm: 1, md: 3 }}
                          >
                            <Grid item xs={10}>
                              <p>
                                <b>User experience (UX)</b>
                              </p>
                            </Grid>
                            <Grid item xs={2}>
                              <p style={{ color: "#2B5BA4" }}>
                                <b>6</b>
                              </p>
                            </Grid>
                          </Grid>
                        </Item>
                      </Grid>

                      <Grid item={4}>
                        <Item>
                          <Grid
                            container
                            spacing={1}
                            columnSpacing={{ xs: 1, sm: 1, md: 3 }}
                          >
                            <Grid item xs={10}>
                              <p>
                                <b>User experience (UX)</b>
                              </p>
                            </Grid>
                            <Grid item xs={2}>
                              <p style={{ color: "#2B5BA4" }}>
                                <b>6</b>
                              </p>
                            </Grid>
                          </Grid>
                        </Item>
                      </Grid>
                    </Grid>
                    <Link>SHOW ALL (17)</Link>
                  </div>

                  <div className="verified_by">
                    <h3>Experience</h3>
                    <Grid
                      container
                      spacing={1}
                      columnSpacing={{ xs: 2, sm: 3, md: 4 }}
                    >
                      <Grid sx={{ margin: "auto" }} item xs={2}>
                        <img src={logouni} width={80} height={80} />
                      </Grid>
                      <Grid item xs={10}>
                        <h4>Freelance UX/UI designer</h4>
                        <p>
                          Self Employed | <span> Around the world</span>
                        </p>
                        <span>2Jun 2016 — Present</span>
                        <p>
                          Work with clients and web studios as freelancer. Work
                          in next areas: eCommerce web projects; creative
                          landing pages; iOs and Android apps; corporate web
                          sites and corporate identity sometimes.
                        </p>
                      </Grid>
                    </Grid>

                    <hr />
                    <Grid
                      container
                      spacing={1}
                      columnSpacing={{ xs: 2, sm: 3, md: 4 }}
                    >
                      <Grid sx={{ margin: "auto" }} item xs={2}>
                        <img src={logouni} width={80} height={80} />
                      </Grid>
                      <Grid item xs={10}>
                        <h4>Freelance UX/UI designer</h4>
                        <p>
                          Self Employed | <span> Around the world</span>
                        </p>
                        <span>2Jun 2016 — Present</span>
                        <p>
                          Work with clients and web studios as freelancer. Work
                          in next areas: eCommerce web projects; creative
                          landing pages; iOs and Android apps; corporate web
                          sites and corporate identity sometimes.
                        </p>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="verified_by">
                    <h3>Education</h3>
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
                        <p>
                          Additional English classes and UX profile courses​.
                        </p>
                      </Grid>
                    </Grid>
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
                          <img src={project} width={"90%"} />
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
                          <img src={project} width={"90%"} />
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
                          <img src={project} width={"90%"} />
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
                          <img src={project} width={"90%"} />
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
                          <p>
                            Unfortunately, we decided to... <br />Keep improving! <br />With
                            Respect)
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
                          <p>
                            Unfortunately, we decided to... <br />Keep improving!<br /> With
                            Respect)
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
                          <p>
                            Unfortunately, we decided to...<br /> Keep improving! <br />With
                            Respect)
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
                          <p>
                            Unfortunately, we decided to... <br />Keep improving!<br /> With
                            Respect)
                          </p>
                        </Grid>
                      </Grid>
                    </Item>
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

            <div className="company-dashboard">
              <p>VISITORS</p>
              <hr
                style={{ border: "0.2px solid #dcd5d5", borderRadius: "5px" }}
              />
              <Grid
                container
                spacing={1}
                columnSpacing={{ xs: 1, sm: 1, md: 3 }}
              >
                <Grid item xs={3}>
                  <img src={script} height={"70px"} />
                </Grid>
                <Grid item xs={9}>
                  <p>
                    <b>Darlene Black</b>
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    HR-manager, 10 000 connec...
                  </p>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                columnSpacing={{ xs: 1, sm: 1, md: 3 }}
              >
                <Grid item xs={3}>
                  <img src={script} height={"70px"} />
                </Grid>
                <Grid item xs={9}>
                  <p>
                    <b>Darlene Black</b>
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    HR-manager, 10 000 connec...
                  </p>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                columnSpacing={{ xs: 1, sm: 1, md: 3 }}
              >
                <Grid item xs={3}>
                  <img src={script} height={"70px"} />
                </Grid>
                <Grid item xs={9}>
                  <p>
                    <b>Darlene Black</b>
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    HR-manager, 10 000 connec...
                  </p>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                columnSpacing={{ xs: 1, sm: 1, md: 3 }}
              >
                <Grid item xs={3}>
                  <img src={script} height={"70px"} />
                </Grid>
                <Grid item xs={9}>
                  <p>
                    <b>Darlene Black</b>
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    HR-manager, 10 000 connec...
                  </p>
                </Grid>
              </Grid>
            </div>

            <div className="company-dashboard">
              <p>YOU MAY LIKE THESE COURSES</p>
              <hr
                style={{ border: "0.2px solid #dcd5d5", borderRadius: "5px" }}
              />

              <Grid
                container
                spacing={1}
                columnSpacing={{ xs: 1, sm: 1, md: 3 }}
              >
                <Grid item xs={4}>
                  <img src={project} height={"60px"} />
                </Grid>
                <Grid item xs={8}>
                  <span>
                    <b>UX Foundations: Prototyping</b>
                  </span>
                  <br />
                  <span style={{ fontSize: "10px" }}>27,959 viewers</span>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                columnSpacing={{ xs: 1, sm: 1, md: 3 }}
              >
                <Grid item xs={4}>
                  <img src={project} height={"60px"} />
                </Grid>
                <Grid item xs={8}>
                  <span>
                    <b>UX Foundations: Prototyping</b>
                  </span>
                  <br />
                  <span style={{ fontSize: "10px" }}>27,959 viewers</span>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                columnSpacing={{ xs: 1, sm: 1, md: 3 }}
              >
                <Grid item xs={4}>
                  <img src={project} height={"60px"} />
                </Grid>
                <Grid item xs={8}>
                  <span>
                    <b>UX Foundations: Prototyping</b>
                  </span>
                  <br />
                  <span style={{ fontSize: "10px" }}>27,959 viewers</span>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                columnSpacing={{ xs: 1, sm: 1, md: 3 }}
              >
                <Grid item xs={4}>
                  <img src={project} height={"60px"} />
                </Grid>
                <Grid item xs={8}>
                  <span>
                    <b>UX Foundations: Prototyping</b>
                  </span>
                  <br />
                  <span style={{ fontSize: "10px" }}>27,959 viewers</span>
                </Grid>
              </Grid>
              <br />
              <Link>See all recomendations</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
