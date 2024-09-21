import { Table } from "antd";
import React from "react";
import { MdPersonAdd } from "react-icons/md";
import { FaUserNurse } from "react-icons/fa";
import { RiEmpathizeLine } from "react-icons/ri";
import { FaBed } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import Sidebar from "./Sidebar";

const FrontPage = () => {
  // Sample patient data
  const patientsData = [
    { key: 1, patientName: "John Doe", age: 30, disease: "Flu", bloodGroup: "O+", department: "General", email: "john@example.com" },
    { key: 2, patientName: "Jane Smith", age: 25, disease: "Headache", bloodGroup: "A-", department: "Neurology", email: "jane@example.com" },
    { key: 3, patientName: "Alice Johnson", age: 40, disease: "Diabetes", bloodGroup: "B+", department: "Endocrinology", email: "alice@example.com" },
    { key: 4, patientName: "Bob Brown", age: 50, disease: "Heart Disease", bloodGroup: "AB+", department: "Cardiology", email: "bob@example.com" },
    { key: 5, patientName: "Charlie White", age: 35, disease: "Asthma", bloodGroup: "O-", department: "Pulmonology", email: "charlie@example.com" },
  ];

  const columns = [
    { title: "Name", dataIndex: "patientName", key: "patientName" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Disease", dataIndex: "disease", key: "disease" },
    { title: "Blood Group", dataIndex: "bloodGroup", key: "bloodGroup" },
    { title: "Department", dataIndex: "department", key: "department" },
    { title: "Email", dataIndex: "email", key: "email" },
  ];

  // Simulated dashboard data
  const dashboardData = {
    doctor: 10,
    nurse: 5,
    patient: 100,
    admin: 3,
    bed: 50,
    ambulance: 2,
    appointment: 20,
    report: 15,
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="AfterSideBar">
        <h1 style={{ color: "black" }}>Overview</h1>
        <div className="maindiv">
          <div className="one commondiv">
            <div>
              <h1>{dashboardData.doctor}</h1>
              <p>Doctor</p>
            </div>
            <MdPersonAdd className="overviewIcon" />
          </div>
          <div className="two commondiv">
            <div>
              <h1>{dashboardData.nurse}</h1>
              <p>Nurse</p>
            </div>
            <FaUserNurse className="overviewIcon" />
          </div>
          <div className="three commondiv">
            <div>
              <h1>{dashboardData.patient}</h1>
              <p>Patient</p>
            </div>
            <RiEmpathizeLine className="overviewIcon" />
          </div>
          <div className="six commondiv">
            <div>
              <h1>{dashboardData.admin}</h1>
              <p>Admin</p>
            </div>
            <RiAdminLine className="overviewIcon" />
          </div>
          <div className="four commondiv">
            <div>
              <h1>{dashboardData.bed}</h1>
              <p>Beds</p>
            </div>
            <FaBed className="overviewIcon" />
          </div>
          <div className="five commondiv">
            <div>
              <h1>{dashboardData.ambulance}</h1>
              <p>Ambulance</p>
            </div>
            <FaAmbulance className="overviewIcon" />
          </div>
          <div className="six commondiv">
            <div>
              <h1>{dashboardData.appointment}</h1>
              <p>Appointment</p>
            </div>
            <BsFillBookmarkCheckFill className="overviewIcon" />
          </div>
          <div className="six commondiv">
            <div>
              <h1>{dashboardData.report}</h1>
              <p>Reports</p>
            </div>
            <MdPayment className="overviewIcon" />
          </div>
        </div>

        {/* Patient Details Section */}
        <div className="patientDetails">
          <h1>Patient Details</h1>
          <div className="patientBox">
            <Table columns={columns} dataSource={patientsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
