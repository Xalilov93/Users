import {Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Allcontact from "./Components/All_contact";
import Newcontact from "./Components/New_contact";
import ContactEdit from "./Components/ContactEdit";
import Navbar from "./Components/Navbar";
import ContactDetails from "./Components/ContactDetails";
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/home" element={ <Home/> }/>
        <Route path="/all_contact" element={ <Allcontact/> }/>
        <Route path="/all_contact/contact_edit/:contactid" element={ <ContactEdit/> }/>
        <Route path="/all_contact/contact_details/:contactid" element={ <ContactDetails/> }/>
        <Route path="/new_contact" element={ <Newcontact/> }/>
      </Routes>
    </>
  );
}

export default App;
