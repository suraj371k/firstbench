import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaHome, FaUser, FaComments, FaRobot, FaChartBar, FaBook } from 'react-icons/fa'; 

function Navbar() {
  const pages = [
    { name: 'Dashboard', path: '/dashboard', icon: <FaHome /> },
    { name: 'FirstGuru', path: '/first', icon: <FaUser /> },
    { name: 'TownHall', path: '/town', icon: <FaComments /> },
    { name: 'AI Evaluation', path: '/ai', icon: <FaRobot /> },
    { name: 'Performance', path: '/performance', icon: <FaChartBar /> },
    { name: 'Mock Test', path: '/', icon: <FaBook /> }, 
  ];

  return (
    <div className='bg-[#19242d] p-4'>
      <nav className="flex flex-col lg:flex-row w-full justify-between items-center container mx-auto gap-5">
        {/* Brand Section */}
        <div className="navbar-brand">
          <h3 className='text-white text-3xl font-semibold'>Firstbench</h3>
        </div>

        {/* Links Section */}
        <div className="navbar-links flex flex-wrap gap-5 lg:gap-10 justify-center">
          {pages.map((page, index) => (
            <div key={index} className="flex items-center gap-2">
              <NavLink 
                to={page.path} 
                className={({ isActive }) => 
                  isActive ? 'text-[#00b4d8] flex items-center gap-2' : 'text-[#cac8c8] flex items-center gap-2'
                } 
              >
                <span className="icon">{page.icon}</span>
                <span className="page-name">{page.name}</span>
              </NavLink>
            </div>
          ))}
        </div>

        {/* Notifications and Profile Section */}
        <div className='flex gap-5 items-center'>
          <IoIosNotificationsOutline className='text-white text-3xl' />
          <button className='bg-zinc-900 pr-5 py-2 text-white'>
            <span className='bg-[#ca643b] rounded-sm p-2'>P</span>Profile
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
