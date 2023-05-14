import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./nav.css";

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <div className="nav-top">
      <div>
        <Link to={"/"}>
          <img src={logo} className="logo" alt="eclipse" height={"70px"} />
        </Link>
      </div>
      <div className="nav_link">
        <Link to="/find-internship">Find Internship</Link>
      </div>
      <div className="nav_link">
        <Link to='/browse-companies'>Browse Companies</Link>
      </div>
      <div className="nav_link">
        <Link></Link>
      </div>
      <div className="nav_link">
        <Link to={"/login"}>Login/Register</Link>
      </div>
      <div className="post">
        <button onClick={(e) => navigate("/post-internship")} className="btn">
          + Post Internship
        </button>
      </div>
    </div>
  );
}
