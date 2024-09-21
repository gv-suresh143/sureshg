import React from "react";
import { Route, Routes } from "react-router-dom";
import DLogin from "../Pages/Dashboard/Dashboard-Login/DLogin";
import Add_Patient from "../Pages/Dashboard/Main-Dashboard/AllPages/Nurse/Add_Patient";
import Book_Appointment from "../Pages/Dashboard/Main-Dashboard/AllPages/Nurse/Book_Appointment";
import Nurse_Profile from "../Pages/Dashboard/Main-Dashboard/AllPages/Nurse/Nurse_Profile";
import PatientsList from "../Pages/Dashboard/Main-Dashboard/AllPages/Nurse/PatientsList";
import Messages from "../Pages/Dashboard/Main-Dashboard/AllPages/Nurse/Messages";
import Schedule from "../Pages/Dashboard/Main-Dashboard/AllPages/Nurse/Schedule";
import Reports from "../Pages/Dashboard/Main-Dashboard/AllPages/Nurse/Reports";
import CalendarPage from "../Pages/Dashboard/Main-Dashboard/AllPages/Nurse/CalendarPage";
import Appointments from "../Pages/Dashboard/Main-Dashboard/AllPages/Nurse/Appointments";
import FrontPage from "../Pages/Dashboard/Main-Dashboard/GlobalFiles/FrontPage";
import Patient_Details from "../Pages/Dashboard/Main-Dashboard/AllPages/Nurse/Patient_Details";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DLogin />} />
        <Route path="/dashboard" element={<FrontPage />} />
        ******************** Nurse Part *************************
        <Route path="/addpatient" element={<Add_Patient />} />
        <Route path="/bookappointment" element={<Book_Appointment />} />
        <Route path="/nurseprofile" element={<Nurse_Profile />} />
        <Route path="/patientslist" element={<PatientsList />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/reports" element={<Reports />} />   
        <Route path="/calendar" element={<CalendarPage />} />      
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
