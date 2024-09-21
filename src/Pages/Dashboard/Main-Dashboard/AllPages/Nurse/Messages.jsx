import React from "react";
import { ToastContainer } from "react-toastify";
import Sidebar from "../../GlobalFiles/Sidebar";
import { Navigate } from "react-router-dom";

const Messages = () => {
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
          <div className="Main_Messages_div">
            <h1>Messages</h1>
            <p>Message functionality is under development.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
