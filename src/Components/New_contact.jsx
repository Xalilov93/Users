import React, { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import DriveFileRenameOutlineSharpIcon from "@mui/icons-material/DriveFileRenameOutlineSharp";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { useNavigate } from "react-router-dom";



function New_contact() {

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    const data={name,username,email,phone};

    fetch(
      `http://localhost:8000/users`, {
        method: "POST",
        body:JSON.stringify(data),
        headers: {"content-type":"application/json"},
        redirect: 'follow'
      })
      .then((res) => {
        alert('Saved saccessfully.')
        navigate('/all_contact')
      })
  };
  return (
    <>
      <hr />
      <Box onSubmit={handleSubmit}
        sx={{
          "& > :not(style)": { m: 1 },
          width: 300,
          mx: "auto", // margin left & right
        }}
      >
        
        <Box  sx={{ display: "none", alignItems: "flex-end" }}>
          <FingerprintIcon  sx={{ color: "action.active", mr: 1, my: 2 }} />
          <TextField  value={id} onChange={(e) => setId(e.target.value)} id="input-with-sx" label="ID" variant="standard"  />
        </Box>
        <Box  sx={{ display: "flex", alignItems: "flex-end" }}>
          <DriveFileRenameOutlineSharpIcon sx={{ color: "action.active", mr: 1, my: 2 }}
          />
          <TextField 
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="input-with-sx outlined-required"
            label="Name"
            variant="standard"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 2 }} />
          <TextField  value={username} onChange={(e) => setUsername(e.target.value)} id="input-with-sx" label="Username" variant="standard" />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AlternateEmailIcon sx={{ color: "action.active", mr: 1, my: 2 }} />
          <TextField  value={email} onChange={(e) => setEmail(e.target.value)} id="input-with-sx" label="Email" variant="standard" />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AddIcCallIcon sx={{ color: "action.active", mr: 1, my: 2 }} />
          <TextField value={phone} onChange={(e) => setPhone(e.target.value)} id="input-with-sx" variant="standard" placeholder="Enter phone number"/>
        </Box>
        <Stack direction="row" spacing={1} sx={{ color: "action.active", mx: "auto", my: 2 }}>
          <Button variant="contained" color='primary' type="submit" onClick={handleSubmit}>Save</Button>
        </Stack>
      </Box>
    </>
  );
}

export default New_contact;
