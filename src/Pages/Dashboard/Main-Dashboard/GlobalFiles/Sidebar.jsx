import React, { useState } from "react";
import { FaAmbulance, FaFileMedical, FaUserNurse } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsBookmarkPlus, BsFillCalendarCheckFill } from "react-icons/bs";
import { ImMenu } from "react-icons/im";
import { FiLogOut, FiMessageSquare } from "react-icons/fi";
import { MdDashboardCustomize, MdSchedule } from "react-icons/md"; // Import MdSchedule icon
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    console.log("Logged out");
  };

  return (
    <div>
      <div style={{ width: isOpen ? "200px" : "70px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo"></h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <ImMenu onClick={toggle} style={{ cursor: "pointer" }} />
          </div>
        </div>
        <div className="bottomSection">
          <Link className="link" to={"/dashboard"}>
            <div className="icon">
              <MdDashboardCustomize className="mainIcon" />
            </div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
              Dashboard
            </div>
          </Link>

          <Link className="link" to={"/nurseprofile"}>
            <div className="icon">
              <CgProfile className="mainIcon" />
            </div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
              Profile
            </div>
          </Link>

          <Link className="link" to={"/addpatient"}>
            <div className="icon">
              <FaAmbulance className="mainIcon" />
            </div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
              Add Patient
            </div>
          </Link>

          <Link className="link" to={"/patientslist"}>
            <div className="icon">
              <FaUserNurse className="mainIcon" />
            </div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
              Patients List
            </div>
          </Link>

          <Link className="link" to={"/reports"}>
            <div className="icon">
              <FaFileMedical className="mainIcon" />
            </div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
              Reports
            </div>
          </Link>

          <Link className="link" to={"/bookappointment"}>
            <div className="icon">
              <BsBookmarkPlus className="mainIcon" />
            </div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
              Appointments
            </div>
          </Link>

          <Link className="link" to={"/schedule"}>
            <div className="icon">
              <MdSchedule className="mainIcon" /> {/* Changed icon to MdSchedule */}
            </div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
              Schedule
            </div>
          </Link>

          <Link className="link" to={"/calendar"}>
            <div className="icon">
              <BsFillCalendarCheckFill className="mainIcon" />
            </div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
              Calendar
            </div>
          </Link>

          <Link className="link" to={"/messages"}>
            <div className="icon">
              <FiMessageSquare className="mainIcon" />
            </div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
              Messages
            </div>
          </Link>

          <Link className="LogOutPath link" onClick={handleLogout} to={"/"}>
            <div className="icon">
              <FiLogOut />
            </div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
              Logout
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
