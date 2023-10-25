import React from 'react'
import Sidebar from './AdminSidebar'
import Header from './AdminHeader'

export default function AdminDashboard() {
  return (

    <div className="h-screen flex-grow-1 overflow-y-lg-auto">
            <Header/>
            
    <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
          <Sidebar />
          </div>
    </div>



  )
}
