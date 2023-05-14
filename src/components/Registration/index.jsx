import { useState } from "react";
import Navigation from "../Navigation";
import "./register.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Footer from "../Footer";
import { Register, RegisterCompany } from "../requests";
import HeaderFind from "../HeaderFind";

export default function Registration() {
  const [name, setName] = useState('');
  const [phone_com, setPhoneCom] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [email_com, setEmailCom] = useState('');
  const [site, setSite] = useState('');
  const [description, setDescription] = useState('');
  const [password, setPassword] = useState('');
  const [password_com, setPasswordCom] = useState('');
  const [password_rpt_com, setPasswordRptCom] = useState('');
  const [password_rpt, setPasswordRpt] = useState('');

  const [first_name, setFirstname] = useState('');
  const [last_name, setLastname] = useState('');
  const [birth_date, setBirthdate] = useState('');



const handleSubmit = async(e) => {
  e.preventDefault();
  const reg_data = {
    "first_name": first_name,
    "last_name": last_name,
    "email": email,
    "password": password,
    "phone": phone
  }
  console.log(reg_data);

  await Register(reg_data);
};

const handleSubmitCom = async(e) => {
  e.preventDefault();
  const reg_data_company = {
    "name": name,
    "email": email_com,
    // "site": site,
    // "description": description,
    "password": password_com,
    "phone": phone_com,
  }
  console.log(reg_data_company);

  await RegisterCompany(reg_data_company);
};

console.log(email);
  return (
    <>
      <Navigation />
      <HeaderFind />
      <div className="login">
        <h2 className="headings">Sign up to InternKZ</h2>
        <div className="auth_reg">
          <Tabs>
            <TabList>
              <Tab>Intern Register</Tab>
              <Tab>Company Register</Tab>
            </TabList>

            <TabPanel>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  "& > :not(style)": { m: 3, width: "90%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField value={email} onChange={e => setEmail(e.target.value)} label="Email" variant="outlined" />
                <TextField value={first_name} onChange={e => setFirstname(e.target.value)} sx={{width: '43.3% !important' }} label="First Name" variant="outlined" />
                <TextField value={last_name} onChange={e => setLastname(e.target.value)} sx={{width: '43.3% !important'}} label="Last Name" variant="outlined" />
                <TextField value={password} onChange={e => setPassword(e.target.value)} label="Create Password (must contain at least 5 characters)" variant="outlined" />
                <TextField value={password_rpt} onChange={e => setPasswordRpt(e.target.value)} label="Repeat Password" variant="outlined" />
                <TextField value={phone} onChange={e => setPhone(e.target.value)} label="Phone Number" variant="outlined" />
                <br />
                <button className="btn btn_auth_reg" type="outlined">
                  Sign up
                </button>
              </Box>
            </TabPanel>
            <TabPanel>
            <Box
                component="form"
                onSubmit={handleSubmitCom}
                sx={{
                  "& > :not(style)": { m: 3, width: "90%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField value={email_com } onChange={e=>setEmailCom(e.target.value)} label="Email" variant="outlined" />
                <TextField value={name} onChange={e=>setName(e.target.value)} label="Company Name" variant="outlined" />
                <TextField value={password_com } onChange={e=>setPasswordCom(e.target.value)} label="Create Password (must contain at least 5 characters)" variant="outlined" />
                <TextField value={password_rpt_com } onChange={e=>setPasswordRptCom(e.target.value)} label="Repeat Password" variant="outlined" />
                <TextField value={phone_com } onChange={e=>setPhoneCom(e.target.value)} label="Business Number (*Optional)" variant="outlined" />
                <br />
                <button className="btn btn_auth_reg" type="outlined">
                  Sign up
                </button>
              </Box>
            </TabPanel>
          </Tabs>
          
        </div>
      </div>
      <Footer />
    </>
  );
}
