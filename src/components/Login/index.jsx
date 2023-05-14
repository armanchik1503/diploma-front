import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
import "./login.css";
import {LoginGet} from "../requests";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Footer from "../Footer";
import HeaderFind from "../HeaderFind";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async(e) => {
    e.preventDefault();
    const auth_data = {
      'email': email,
      'password': password,
    };
    const data = await LoginGet(auth_data);
    console.log(data.data.user.first_name);

    alert(data.message)
    sessionStorage.setItem('token', data.data.token)
    sessionStorage.setItem('name', data.data.user.first_name + ' '+ data.data.user.last_name)
    sessionStorage.setItem('email', email)
    console.log(auth_data);
  };

  return (
    <>
      <Navigation />
      <HeaderFind />
      <div className="login">
        <h2 className="headings">Login</h2>
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
              <TextField
                label="Password"
                variant="outlined"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <a href="/resetpassword">Forgot your password?</a>
              <br />
              <button className="btn btn_auth" type="outlined">
                Login
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
