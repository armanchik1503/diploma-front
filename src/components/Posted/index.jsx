import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
import Footer from "../Footer";
import notion from "../../assets/notion.png";
import { Button } from "@mui/material";


export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const auth_data = {
      email: email,
      password: password,
    };
    console.log(auth_data);
  };

  return (
    <>
      <Navigation />
        <h2 className="headings">
        Your internship is successfully posted!
        </h2>
        <div className="post-intern-main">
            <div className="posted">
                <div className="image">
                    <img src={notion} alt="image of posted internship"/>
                </div>
                <div>
                    <p>Raycast corp</p>
                    <h3>Product Designer</h3>
                    <p>London | Full time | $40-42k | 2 day ago</p>
                    <p>Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.</p>
                </div>
            </div>

            <button className="post-more">Post another one</button>
            <button className="my-int" >My Internships</button>
            
        </div>
      <Footer />
    </>
  );
}
