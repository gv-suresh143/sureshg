import React from "react";
import { ToastContainer } from "react-toastify";
import Sidebar from "../../GlobalFiles/Sidebar";
import { Navigate } from "react-router-dom";

const Appointments = () => {
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
          <div className="Main_Appointments_div">
            <h1>Appointments</h1>
            <p>The Appointments feature is under construction.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointments;
