import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import UpdateRestaurant from "./pages/UpdateRestraunt";
import ProtectRout from "./component/ProtectRout";
import Navbar from "./component/Navbar";

export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectRout role="admin">
            <AdminDashboard />
          </ProtectRout>
        }
      />
      <Route
        path="/admin/update/:id"
        element={
          <ProtectRout role="admin">
            <UpdateRestaurant />
          </ProtectRout>
        }
      />

      <Route
        path="/customer/dashboard"
        element={
          <ProtectRout role="customer">
            <CustomerDashboard />
          </ProtectRout>
        }
      />
    </Routes>
    </>
  );
}
