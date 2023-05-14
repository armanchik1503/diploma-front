import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
import "../Login/login.css";
import {ResetPass} from "../requests";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Footer from "../Footer";
import HeaderFind from "../HeaderFind";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const handleSubmit = async(e) => {
    e.preventDefault();
    await ResetPass(email);
    console.log(email);
  };

  return (
    <>
      <Navigation />
      <HeaderFind />
      <div className="login">
        <h2 className="headings">Forgot Password</h2>
        <div className="auth">
          <div>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                "& > :not(style)": { m: 3, width: "90%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                label="Email"
                variant="outlined"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
           
              <a href="/login">Back to Log In</a>
              <br />
              <button className="btn btn_auth" type="outlined">
              Reset Password
              </button>
            </Box>

            {/* <form onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="text"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="text"
          />
          <br /> */}
            <br />
            {/* <button type="submit">Login</button> */}
            {/* </form> */}
          </div>
          <div className="not">
            <Box
              component="div"
              sx={{
                "& > :not(style)": { m: 3, width: "90%" },
              }}
            >
              <h2>Not Registred?</h2>
              <p>
                <b>Search & Apply</b>
                <br />
                Lorem ipsum dolor sit amet, consectetur
              </p>

              <p>
                <b>Upload Your Own Video CV</b>
                <br />
                Lorem ipsum dolor sit amet, consectetur
              </p>

              <p>
                <b>Internship Alerts</b>
                <br />
                Lorem ipsum dolor sit amet, consectetur
              </p>

              <p>
                <b>Free CV Review</b>
                <br />
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <button
                onClick={() => {
                  navigate("/registration");
                }}
                className="btn btn_auth"
                type="outlined"
              >
                Register
              </button>
            </Box>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
