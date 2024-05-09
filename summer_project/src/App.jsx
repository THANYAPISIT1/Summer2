import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPages/Login";
import Register from "./Pages/LoginPages/Register";
import Broadcast from "./Pages/Broadcasts/Broadcast";
import Customer from "./Pages/Customers/Customer";
/*import DetailAndEdit from "./Pages/Customers/DetailandEdit"; */
import AddNewCustomer from "./Pages/Customers/AddNewCustomer";
import Template from "./Pages/Templates/Template";
import Template_editor from "./Pages/Templates/Template_editor";
import CustomerEdit from "./Pages/Customers/CustomerEdit";
import BCRecipients from "./Pages/Broadcasts/BCRecipients";
import TestingGround from "./TestingGround";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Template_editor" element={<Template_editor />} />
        <Route path="/Templates" element={<Template />} />
        <Route path="test" element={<TestingGround />} />
        <Route path="/broadcasts" element={<Broadcast />} />
        <Route path="broadcasts/recipients" element={<BCRecipients />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="customers" element={<Customer />} />
        <Route path="customers/edit" element={<CustomerEdit />} />
        <Route path="customers/add" element={<AddNewCustomer />} />
        {/* <Route path="customer/detail" element={<DetailAndEdit />} /> */}
      </Routes>
    </div>
  );
}

export default App;
