import { Table } from "antd";
import React from "react";
import { Navigate } from "react-router-dom";
import Sidebar from "../../GlobalFiles/Sidebar";
import Topbar from "../../GlobalFiles/Topbar";

const Patient_Details = () => {
  // Hardcoded user data for demo purposes
  const userData = {
    isAuthenticated: true,
    userType: "doctor", // Change this as needed for testing
  };

  const columns = [
    { title: "Id", dataIndex: "Id", key: "Id" },
    { title: "Patient Name", dataIndex: "Patient_Name", key: "Patient_Name" },
    { title: "Date", dataIndex: "Date", key: "Date" },
    { title: "Checked By", dataIndex: "Checked_By", key: "Checked_By" },
    { title: "Report Ref", dataIndex: "Report_Ref", key: "Report_Ref" },
  ];

  const dataSource = [
    {
      key: 1,
      Id: "ERFCE34",
      Patient_Name: "The Rock",
      Date: "12-09-2022",
      Checked_By: "Dr. Rajendra Patel",
      Report_Ref: "ERODEII334l",
    },
    {
      key: 2,
      Id: "ERFCE35",
      Patient_Name: "John Doe",
      Date: "13-09-2022",
      Checked_By: "Dr. Sarah Smith",
      Report_Ref: "ERODEII335m",
    },
  ];

  if (!userData.isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  if (userData.userType !== "doctor") {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <div className="container">
      <Sidebar />
      <div className="AfterSideBar">
        <Topbar />
        <div className="Payment_Page">
          <div className="patientBox">
            <Table columns={columns} dataSource={dataSource} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient_Details;
