import React, { useState } from "react";
import { Radio } from "antd";
import banner from "../../../img/banner.png";
import admin from "../../../img/admin.jpg";
import "./DLogin.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Drawer } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons"; // Importing icons

const notify = (text) => toast(text);

const DLogin = () => {
  const [open, setOpen] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [placement, SetPlacement] = useState("Nurse");
  const [formvalue, setFormvalue] = useState({
    ID: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false); // State for showing/hiding password
  const navigate = useNavigate();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const Handlechange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (formvalue.ID !== "" && formvalue.password !== "") {
      // Hardcoded credentials
      if (placement === "Nurse") {
        if (formvalue.ID === "100" && formvalue.password === "nurse") {
          notify("Nurse Login Successful");
          setLoading(false);
          return navigate("/dashboard");
        } else {
          setLoading(false);
          return notify("Wrong Nurse credentials");
        }
      } else if (placement === "Doctor" || placement === "Admin") {
        notify("Under development those authentications");
        setLoading(false);
      }
    } else {
      setLoading(false);
      notify("Please fill in all the fields");
    }
  };

  const placementChange = (e) => {
    SetPlacement(e.target.value);
    if (e.target.value === "Doctor" || e.target.value === "Admin") {
      notify("Under development those authentications");
    }
  };

  const [ForgetPassword, setForgetPassword] = useState({
    type: "",
    email: "",
  });

  const HandleForgetPassword = (e) => {
    setForgetPassword({ ...ForgetPassword, [e.target.name]: e.target.value });
  };

  const [forgetLoading, setforgetLoading] = useState(false);

  const HandleChangePassword = () => {
    if (ForgetPassword.type === "") {
      return notify("Please Fill all Details");
    }
    setforgetLoading(true);
    setTimeout(() => {
      setForgetPassword({
        type: "",
        email: "",
      });
      onClose();
      setforgetLoading(false);
      notify("Account Details Sent");
    }, 2000);
  };

  const getCredentialsHint = () => {
    if (placement === "Nurse") {
      return { id: "100", password: "nurse" };
    } else if (placement === "Doctor") {
      return { id: "101", password: "doctor" };
    } else if (placement === "Admin") {
      return { id: "102", password: "admin" };
    }
  };

  const { id, password } = getCredentialsHint();

  return (
    <>
      <ToastContainer />
      <div className="mainLoginPage">
        <div className="leftside">
          <img src={banner} alt="banner" />
        </div>
        <div className="rightside">
          <h1>Login</h1>
          <div>
            <Radio.Group
              value={placement}
              onChange={placementChange}
              className={"radiogroup"}
            >
              <Radio.Button value="Nurse" className={"radiobutton"}>
                Nurse
              </Radio.Button>
              <Radio.Button value="Doctor" className={"radiobutton"}>
                Doctor
              </Radio.Button>
              <Radio.Button value="Admin" className={"radiobutton"}>
                Admin
              </Radio.Button>
            </Radio.Group>
          </div>
          <div className="Profileimg">
            <img src={admin} alt="profile" />
          </div>
          <div>
            <p>ID - {id}</p>
            <p>Password - {password}</p>
            <form onSubmit={HandleSubmit}>
              <h3>{placement} ID</h3>
              <input
                type="number"
                name="ID"
                value={formvalue.ID}
                onChange={Handlechange}
                required
              />
              <h3>Password</h3>
              <div style={{ position: "relative" }}>
                <input
                  type={passwordVisible ? "text" : "password"} // Toggle between text and password
                  name="password"
                  value={formvalue.password}
                  onChange={Handlechange}
                  required
                />
                <span
                  onClick={() => setPasswordVisible(!passwordVisible)} // Toggle password visibility
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                >
                  {passwordVisible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                </span>
              </div>
              <button type="submit">{Loading ? "Loading..." : "Submit"}</button>
              <p style={{ marginTop: "10px" }}>
                Forget Password?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={showDrawer}
                >
                  Get it on Email !
                </span>
              </p>

              <Drawer
                title="Forget Password"
                placement="left"
                onClose={onClose}
                open={open}
              >
                <div>
                  <label style={{ fontSize: "18px" }}>Choose Type</label>
                  <select
                    name="type"
                    value={ForgetPassword.type}
                    onChange={HandleForgetPassword}
                    required
                  >
                    <option value="">User Type</option>
                    <option value="nurse">Nurse</option>
                    <option value="doctor">Doctor</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "18px" }}>
                    Enter Email
                  </label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    name="email"
                    value={ForgetPassword.email}
                    onChange={HandleForgetPassword}
                    required
                    style={{
                      width: "100%",
                      height: "3rem",
                      borderRadius: "5px",
                      border: "none",
                      backgroundColor: "#bce0fb",
                      fontSize: "18px",
                      marginTop: "10px",
                      paddingLeft: "10px",
                    }}
                  />
                </div>

                <button
                  style={{
                    width: "50%",
                    margin: "20px auto",
                    display: "flex",
                    padding: "10px",
                    fontSize: "18px",
                    backgroundColor: "#ff9f9f",
                    border: "none",
                    borderRadius: "7px",
                    cursor: "pointer",
                    justifyContent: "center",
                  }}
                  onClick={HandleChangePassword}
                >
                  {forgetLoading ? "Loading..." : " Send Mail"}
                </button>
              </Drawer>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DLogin;
