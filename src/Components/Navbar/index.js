import React, { useState, useRef, useEffect } from 'react';
import { IoIosNotifications } from "react-icons/io";
import Avatar from 'react-avatar';

const Navbar = () => {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
    const profileRef = useRef(null);
    const notificationRef = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
          if (profileRef.current && !profileRef.current.contains(event.target)) {
            setShowProfileDropdown(false);
          }
          if (notificationRef.current && !notificationRef.current.contains(event.target)) {
            setShowNotificationDropdown(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);

  return (
     <div className="bg-gray-900 text-white py-4 px-4 rounded-2xl mt-2 z-50 mx-2 flex justify-between items-center">
      <div className="text-md text-white">
        TalkNest
      </div>
      
      <div className="flex gap-4 items-center">
        {/* Notification Icon and Dropdown */}
        <div className="relative" ref={notificationRef}>
          <div 
            className="cursor-pointer relative"
            onClick={() => {
              setShowNotificationDropdown(!showNotificationDropdown);
              setShowProfileDropdown(false);
            }}
          >
            <IoIosNotifications size={26} />
            <span className="w-4 h-4 text-xs rounded-full flex justify-center items-center bg-green-200 text-black border border-gray-900 absolute -top-0.5 right-0">
              1
            </span>
          </div>
          
          {showNotificationDropdown && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg text-[#222] rounded-lg  py-2 px-2 z-50 border border-gray-800">
              <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-lg">
                New message from John Doe
              </div>
              <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-lg">
                Someone liked your post
              </div>
            </div>
          )}
        </div>

     
        <div className="relative" ref={profileRef}>
          <div
            onClick={() => {
              setShowProfileDropdown(!showProfileDropdown);
              setShowNotificationDropdown(false);
            }}
          >
            <Avatar 
              name="Rohit" 
              src="https://media.licdn.com/dms/image/v2/D4D03AQFRw6UjkAzr8g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1691257155439?e=1735776000&v=beta&t=m7jcjURhU_ArIckKnhu47GGMsc9_wIc3ulFUZTVo8NE"
              size={30}
              className="rounded-full cursor-pointer"
            />
          </div>
          
          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white px-2 rounded-lg shadow-lg py-2 z-50 border border-gray-800">
              <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-[#222] rounded-lg">
                Account
              </div>
              <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-red-400 rounded-lg">
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
