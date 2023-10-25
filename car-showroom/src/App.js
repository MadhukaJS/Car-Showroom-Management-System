import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import AdminDashboard from './components/admin/AdminDashboard';
import OwnerDashboard from './components/owner/OwnerDashboard';
import VisitorDashboard from './components/visitor/VisitorDashboard';
import Sidebar from './components/admin/AdminSidebar';

function App() {
  return (
    
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* admin */}
        <Route path="adminDashoboard" element={<AdminDashboard />} />
        <Route path="sidebaradmin" element={<Sidebar/>} />


        <Route path="visitordashboard" element={<VisitorDashboard />} />
        <Route path="ownerdashboard" element={<OwnerDashboard />} />
        

  

        {/* <Route path="adminsidebar" element={<AdminSlidebar/>}/> */}
      </Routes>
    </Router>


  );
}

export default App;
