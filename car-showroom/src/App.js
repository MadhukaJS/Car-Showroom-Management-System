import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import AdminDashboard from './components/admin/AdminDashboard';
import OwnerDashboard from './components/owner/OwnerDashboard';
import VisitorDashboard from './components/visitor/VisitorDashboard';



function App() {
  return (
    
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* admin */}
        <Route path="adminDashoboard" element={<AdminDashboard />} />
        {/* <Route path="AdminSidebar" element={<Sidebar/>} /> */}

        {/* visitor */}
        <Route path="visitordashboard" element={<VisitorDashboard />} />
        {/* <Route path="VisitorSidebar" element={<Sidebar/>} /> */}


        {/* owner */}
        <Route path="ownerdashboard" element={<OwnerDashboard />} />
        {/* <Route path="sidebaradmin" element={<Sidebar/>} /> */}



        owner
        

  

        {/* <Route path="adminsidebar" element={<AdminSlidebar/>}/> */}
      </Routes>
    </Router>


  );
}

export default App;
