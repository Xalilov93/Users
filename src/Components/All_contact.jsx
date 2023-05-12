import React, { useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// import InfoIcon from '@mui/icons-material/Info';
import './All_contact.css';
import { useNavigate } from "react-router-dom";


function All_contact() {
  const [post, setPost] = useState([]);
  const navigate=useNavigate()
  // const LoadDetails =(eOutIndex) => {
  //   navigate('/all_contact/contact_details/' + eOutIndex);
  // }
  const LoadEdit =(eIndex) => {
    localStorage.setItem('editIndex', eIndex)
    navigate('/all_contact/contact_edit/' + eIndex);
  }
  const Remove =(eOutIndex) => {
    if(window.confirm('Do you want to delete User?')){
        const _post = post.filter((e, eInIndex) => {
          return eOutIndex !== eInIndex
        })
        setPost(_post)
        localStorage.setItem('post', JSON.stringify(_post))
        alert('Removed saccessfully.')
        window.location.reload()
    }
  }
/*  useEffect(() => {
    fetch(
      `http://localhost:8000/users`)
      .then((res) => res.json())
      .then((data)=> setData(data));
  }, []);*/
  useEffect(() => {
    const post = localStorage.getItem('post')
    setPost(JSON.parse(post))
  }, [])

  return (
    <div className='all__contact'>
      {post && 
          post.map((e, eIndex) => (
            <ul key={Math.random()} sx={{mx: 'auto', marginRight: 'auto'}} >
              <li style={{width: 250}}>Name: {e.name}</li>   
              <li style={{width: 250}}>Username: {e.username}</li>
              <li style={{width: 300}}>Email: {e.email}</li>
              <li style={{width: 250}}>Phone: {e.phone}</li>
              <Button onClick={()=> {LoadEdit(eIndex)}} sx={{marginRight: 2}} variant="contained" color='success' startIcon={<EditIcon />}>Edit</Button>
              <Button onClick={()=> {Remove(eIndex)}} sx={{marginRight: 2}} variant="contained" color='error' startIcon={<DeleteIcon />}>Delete</Button>
              {/* <Button onClick={()=> {LoadDetails(eIndex)}} variant="contained" color='primary' startIcon={<InfoIcon />}>Details</Button> */}
            </ul>
          )

      )}
    </div>
  )
}

export default All_contact 