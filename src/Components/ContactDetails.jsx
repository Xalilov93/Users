import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';


function ContactDetails() {
  // const {contactid} = useParams();
  const [post, setPost]=useState({});

  useEffect(() => {
    const post = localStorage.getItem('post')
    setPost(JSON.parse(post))
  }, [])
  
/*  useEffect(() => {
    fetch(
      "http://localhost:8000/users/"+ contactid)
      .then((res) => res.json())
      .then((data)=> setUser(data));
  }, []);*/
  return (
    <div>
      {post &&
          <div>
              <h2>Name: {post.name}</h2>
              <h3>Username: {post.username}</h3>
              <h4>Email: {post.email}</h4>
              <h4>Phone: {post.phone}</h4>
              <Button href="/all_contact" variant="contained">
                Back to Listing
              </Button>
          </div>
        }


    </div>
  )
}

export default ContactDetails