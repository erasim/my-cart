import React, { useState, useEffect } from 'react'
import { Card ,Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

export default function AddToCard() { 
  const [Users, fetchUsers] = useState([]);
  const navigate = useNavigate();
  const [count, setCount]=useState(1);
  const[inputarr, setInputarr]= useState([]);

 
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
      <h2>Search Eneything</h2>
    
      <h2>Shopping List</h2>
 
      <div className='Allitems'>
     
        {Users.map((item, i) => {
          return  <Card key={i}>
          <Card.Img  variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Button variant="primary" onClick={()=>{ setCount(count+1);
              let name=item.title;
              let marks=item.price;
              setInputarr([...inputarr,{name,marks}])
              console.log(inputarr);
               alert("New Item Added");
                  }}>Add To Card-{item.id}</Button><br/>  


            <Button variant="primary" onClick={()=>{ let id =item.id;
                                const url = `./${id}`;
                                  navigate(url);    }}>Get Details </Button>
          
          </Card.Body>
        </Card>

        })}
        <div className='cart'>
 <tbody>
<table>
{  inputarr.map(
            (info,ind)=>{
                return(
                    <tr key={ind}>
                    <td>{info.name}</td>
                    <td>{info.marks}</td>
                </tr>
                )

            })
         }

</table>
</tbody>
</div>

    </div>
    
    </div>
  )


  
}