import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./footer.css";
import Input from "@mui/joy/Input";

export default function Footer() {
  return (
    <div className="footer">
      <div className="campaign">
        <div style={{ paddingLeft: "80px" }}>
          <font size="+3">
            <p>
              Stay Up-To-Date On
              <span style={{ color: "#2B5BA4", textAlign: "left" }}>
                <br /> Internship News!
              </span>
            </p>
          </font>
        </div>
        <div>
          <Input
            endDecorator={<button className="btn btn_subsc">Subscribe</button>}
            sx={{
              "--Input-focusedThickness": "2px",
              "--Input-placeholderOpacity": 0.5,
              "--Input-gap": "9px",
              "--Input-radius": "12px",
              marginTop: "45px",
              marginRight: "5px",
              alignSelf: "center",
            }}
          />
        </div>
      </div>

      <div className="nav-bottom">
        <div>
          <Link to={"/"}>
            <img src={logo} className="logo" alt="eclipse" height={"70px"} />
          </Link>
        </div>
        <div className="nav_link">
          <Link to="">About</Link>
        </div>
        <div className="nav_link">
          <Link>Internships</Link>
        </div>
        <div className="nav_link">
          <Link>Contact Us</Link>
        </div>
        <div className="nav_link">
          <Link to={"/login"}>Terms</Link>
        </div>
        <div className="nav_link">
          <Link>Privacy Policy</Link>
        </div>
      </div>
      <hr />
      <p>@staffingSolutions All right reserved.</p>
    </div>
  );
}
