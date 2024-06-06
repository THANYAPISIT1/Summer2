import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/LoginPages/Login";
import Register from "./Pages/LoginPages/Register";
import Broadcast from "./Pages/Broadcasts/Broadcast";
import Customer from "./Pages/Customers/Customer";
import AddNewCustomer from "./Pages/Customers/AddNewCustomer";
import Template from "./Pages/Templates/Template";
import TemplateCreate from "./Pages/Templates/TemplateCreate";
import CustomerEdit from "./Pages/Customers/CustomerEdit";
import TestingGround from "./TestingGround";
import CtrBroadcast from "./Pages/Broadcasts/CtrBroadcast";
import Admin from "./Pages/Admin/Admin";
import AddNewAdmin from "./Pages/Admin/DetailandEditAdmin";
import AdminEdit from "./Pages/Admin/AdminEdit";
import DetailAndEditAdmin from "./Pages/Admin/DetailandEditAdmin";
import UpdateTemplate from "./Pages/Templates/TemplateEdit";
import BCCContentDetail from "./Pages/Broadcasts/Content/BCContentDetail";
import Transection from "./Pages/Transection/Transection";

function App() {
  const ProtectedRoutes = ({ children }) => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      return <Navigate to="/login" />;
    }
    
    return children;
  };

  

  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Wrap all protected routes in the ProtectedRoutes component */}
        <Route
          path="*"
          element={
            <ProtectedRoutes>
              <Routes>
                <Route path="/" element={<Broadcast />} />
                <Route path="DetailAndEditAdmin" element={<DetailAndEditAdmin />} />
                <Route path="/AdminEdit" element={<AdminEdit />} />
                <Route path="/AddNewAdmin" element={<AddNewAdmin />} />
                <Route path="/Admin" element={<Admin />} />
                <Route path="template/create" element={<TemplateCreate />} />
                <Route path="/template/edit/:TID" element={<UpdateTemplate />} />
                <Route path="/template" element={<Template />} />
                <Route path="test" element={<TestingGround />} />
                <Route path="create-broadcast" element={<CtrBroadcast />} />
                <Route path="create-broadcast/createtemplate/:TID" element={<BCCContentDetail />} />
                <Route path="customers" element={<Customer />} />
                <Route path="customer/edit/:CusID" element={<CustomerEdit />} />
                <Route path="customer/add" element={<AddNewCustomer />} />
                <Route path="transection" element={<Transection />} />
              </Routes>
            </ProtectedRoutes>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
