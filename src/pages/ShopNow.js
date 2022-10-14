import React, { useState, useEffect } from 'react'
import { Card ,Button} from 'react-bootstrap'
import {Link} from "react-router-dom"


export default function ShopNow() {
  const [Users, fetchUsers] = useState([])
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const getData = () => {
    fetch('https://fakestoreapi.com/products')
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
            {/* <Card.Text>
              {item.description}
            </Card.Text> */}
            {
         
            console.log(item.id)}
            <Button variant="primary">Buy Now</Button><br/>
            <Link to="">Shop</Link>
            <Button variant="primary" onClick={() => openInNewTab('./shop/{item.id}')}>Get Details</Button>
          </Card.Body>
        </Card>

        })}
     
    </div>
    </div>
  )
}