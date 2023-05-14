import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import Main from './components/Main';
import Registration from './components/Registration';
import ProfileCompany from './components/ProfileCompany';
import ProfileIntern from './components/ProfileIntern';
import PostInternship from './components/PostInternship';
import FindInternship from './components/FindInternship';
import BrowseCompanies from './components/BrowseCompanies';
import Posted from './components/Posted';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/posted" element={<Posted />} />
        <Route path="/profile-intern" element={<ProfileIntern />} />
        <Route path="/profile-company" element={<ProfileCompany />} />
        <Route path="/post-internship" element={<PostInternship />} />
        <Route path="/browse-companies" element={<BrowseCompanies />} />
        <Route path="/find-internship" element={<FindInternship />} />
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
