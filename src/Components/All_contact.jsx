import React, { useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import './All_contact.css';
import { useNavigate } from "react-router-dom";


function All_contact() {
  const [data, setData] = useState([]);
  const navigate=useNavigate()
  const LoadDetails =(id) => {
    navigate('/all_contact/contact_details/' + id);
  }
  const LoadEdit =(id) => {
    navigate('/all_contact/contact_edit/' + id);
  }
  const Remove =(id) => {
    if(window.confirm('Do you want to delete User?')){
      fetch(
        `http://localhost:8000/users/` + id, {
          method: "DELETE"
        })
        .then((res) => {
          alert('Removed saccessfully.')
          window.location.reload()
        })
    }
  }
  useEffect(() => {
    fetch(
      `http://localhost:8000/users`)
      .then((res) => res.json())
      .then((data)=> setData(data));
  }, []);

  return (
    <div className='all__contact'>
      {data && (
        <main >
          {data.map((e) => (
            <ul key={e.id} sx={{mx: 'auto', marginRight: 'auto'}} >
              <li style={{width: 250}}>Name: {e.name}</li>   
              <li style={{width: 250}}>Username: {e.username}</li>
              <li style={{width: 300}}>Email: {e.email}</li>
              <li style={{width: 250}}>Phone: {e.phone}</li>
              <Button onClick={()=> {LoadEdit(e.id)}} sx={{marginRight: 2}} variant="contained" color='success' startIcon={<EditIcon />}>Edit</Button>
              <Button onClick={()=> {Remove(e.id)}} sx={{marginRight: 2}} variant="contained" color='error' startIcon={<DeleteIcon />}>Delete</Button>
              <Button onClick={()=> {LoadDetails(e.id)}} variant="contained" color='primary' startIcon={<InfoIcon />}>Details</Button>
            </ul>
          ))}
        </main>
      )}
    </div>
  )
}

export default All_contact 