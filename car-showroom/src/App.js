import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import AdminDashboard from './components/admin/AdminDashboard';
import OwnerDashboard from './components/owner/OwnerDashboard';
import VisitorDashboard from './components/visitor/VisitorDashboard';
import Registration from './components/Registration';
import AddAds from './components/owner/AddAds';




function App() {
  return (
    
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="addads" element={<AddAds />} />

        {/* admin */}
        <Route path="adminDashoboard" element={<AdminDashboard />} />
        

        {/* visitor */}
        <Route path="visitordashboard" element={<VisitorDashboard />} />
        


        {/* owner */}
        <Route path="ownerdashboard" element={<OwnerDashboard />} />
        

  

        {/* <Route path="adminsidebar" element={<AdminSlidebar/>}/> */}
      </Routes>
    </Router>


  );
}

export default App;
