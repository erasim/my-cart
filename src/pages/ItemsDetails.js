import React, { useState, useEffect } from 'react'
import { Card ,Button} from 'react-bootstrap'


export default function ItemsDetails(props) {
  const [Users, fetchUsers] = useState([]);


  const getData = () => {
    fetch('https://fakestoreapi.com/products/{prop.ItemId}')
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
            <Button variant="primary">Buy Now</Button>
            <Button variant="primary">Get Details</Button>
          </Card.Body>
        </Card>

        })}
     
    </div>
    </div>
  )
}