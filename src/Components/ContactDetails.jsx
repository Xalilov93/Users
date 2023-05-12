import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';


function ContactDetails() {
  const {contactid} = useParams();
  const [user, setUser]=useState({});

  
  useEffect(() => {
    fetch(
      "http://localhost:8000/users/"+ contactid)
      .then((res) => res.json())
      .then((data)=> setUser(data));
  });
  return (
    <div>
      {user &&
          <div>
              <h2>Name: {user.name} ({user.id})</h2>
              <h3>Username: {user.username}</h3>
              <h4>Email: {user.email}</h4>
              <h4>Phone: {user.phone}</h4>
              <Button href="/all_contact" variant="contained">
                Back to Listing
              </Button>
          </div>
        }


    </div>
  )
}

export default ContactDetails