import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPages/Login";
import Register from "./Pages/LoginPages/Register";
import Broadcast from "./Pages/Broadcasts/Broadcast";
import Customer from "./Pages/Customers/Customer";

import AddNewCustomer from "./Pages/Customers/AddNewCustomer";
import Template from "./Pages/Templates/Template";
import Template_editor from "./Pages/Templates/Template_editor";
import CustomerEdit from "./Pages/Customers/CustomerEdit";
import BCRecipients from "./Pages/Broadcasts/BCRecipients";
import BCContent from "./Pages/Broadcasts/BCContent";
import BCReview from "./Pages/Broadcasts/BCReview";
import TestingGround from "./TestingGround";
import Admin from "./Pages/Admin/Admin";
import AddNewAdmin from "./Pages/Admin/DetailandEditAdmin";
import AdminEdit from "./Pages/Admin/AdminEdit";
import DetailAndEditAdmin from "./Pages/Admin/DetailandEditAdmin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="DetailAndEditAdmin" element={<DetailAndEditAdmin />} />
        <Route path="/AdminEdit" element={<AdminEdit />} />
        <Route path="/AddNewAdmin" element={<AddNewAdmin />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Template_editor" element={<Template_editor />} />
        <Route path="/Template" element={<Template />} />
        <Route path="test" element={<TestingGround />} />
        <Route path="/" element={<Broadcast />} />
        <Route path="broadcast/recipients" element={<BCRecipients />} />
        <Route path="broadcast/content" element={<BCContent />} />
        <Route path="broadcast/review" element={<BCReview />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="customers" element={<Customer />} />
        <Route path="customer/edit" element={<CustomerEdit />} />
        <Route path="customer/add" element={<AddNewCustomer />} />
        
      </Routes>
    </div>
  );
}

export default App;
