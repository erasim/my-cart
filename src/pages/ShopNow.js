import React, { useState, useEffect } from 'react'
import { Card ,Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import AddtoCard from './AddtoCard';
export default function ShopNow() {
 
  const [Users, fetchUsers] = useState([]);
  const navigate = useNavigate();
  const [count, setCount]=useState(1);
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
      <div className='Allitems'>
     
        {Users.map((item, i) => {
          return  <Card key={i}>
          <Card.Img  variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Button variant="primary" onClick={()=>{let id =item.id; setCount(count+1);
            let cart={id:id,
              name:item.title,
              Price:item.price,
              subQty:0,
              Qty:count};
         
               alert("New Item Added");   }}>Add To Card-{item.id}</Button><br/>  


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