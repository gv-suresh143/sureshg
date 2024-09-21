import React from "react";
import { ToastContainer } from "react-toastify";
import Sidebar from "../../GlobalFiles/Sidebar";
import { Navigate } from "react-router-dom";

const Schedule = () => {
  // Simulated user data
  const data = { isAuthenticated: true, user: { userType: "nurse" } };

  if (!data.isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  if (data.user.userType !== "nurse") {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <>
      <ToastContainer />
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Main_Schedule_div">
            <h1>Schedule</h1>
            <p>Under development. The schedule feature will be built soon.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
