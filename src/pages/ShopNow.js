import { display } from '@mui/system';
import React, { useState, useEffect } from 'react'
import { Card ,Button} from 'react-bootstrap'
import { json, useNavigate } from "react-router-dom";
import Popup from './Popup';



export default function ShopNow() {
 
  const [Users, fetchUsers] = useState([]);
  const navigate = useNavigate();
  const[inputarr, setInputarr]= useState([]);
  // const [show, setShow] = useState(false);
  const [total, setTotal] = useState(0);
  const [search, setSearch]= useState('');


  const getData = () => {
  
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchUsers(res)

      })
  }

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div className='Rightbox'>
      <h2>Shopping List</h2>
      <h2>Search here</h2>
      <Popup/>
      <input tyle="text"  className='searchBar' name="name"  
      onChange={(evt) => { setSearch(evt.target.value) } } />
      <div className='Allitems'>
        {Users.map((item, i) => {
          return  <Card key={i}>   
          <Card.Img  variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Button variant="primary" onClick={()=>{
              let name=item.title;
              let marks=item.price;
              setInputarr([...inputarr,{name,marks}])
              localStorage.setItem('arr', JSON.stringify(inputarr));
              setTotal(total+marks);
              console.log(inputarr);
              
                 } }>Add To Card-{item.id}</Button><br/>  
                 
            <Button variant="primary" onClick={()=>{ let id =item.id; 
                                const url = `./${id}`;
                                  navigate(url);    }}>Get Details </Button>
          </Card.Body>
        </Card>
        })}
    </div> 
    </div>
  )  
}