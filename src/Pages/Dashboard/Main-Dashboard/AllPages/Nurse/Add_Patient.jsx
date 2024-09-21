import React from "react";
import { ToastContainer } from "react-toastify";
import Sidebar from "../../GlobalFiles/Sidebar";
import { Navigate } from "react-router-dom";
// import "./AddPatient.css"; // Add a new CSS file for custom styles

const Add_Patient = () => {
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
          <div className="Main_Add_Doctor_div">
            <h1>Add Patient</h1>
            <p>Under development. We will build this feature in the future.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add_Patient;
