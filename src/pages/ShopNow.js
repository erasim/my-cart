import React, { useState, useEffect } from 'react'
import { Card ,Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function ShopNow() {
 
  const [Users, fetchUsers] = useState([]);
  const navigate = useNavigate();
  const [count, setCount]=useState(1);
  const[inputarr, setInputarr]= useState([]);
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState(0);
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
            <Button variant="primary" onClick={()=>{
              let name=item.title;
              let marks=item.price;
              setInputarr([...inputarr,{name,marks}])
           
              //  alert("New Item Added");
                  }}>Add To Card-{item.id}</Button><br/>  


            <Button variant="primary" onClick={()=>{ let id =item.id; 
                                const url = `./${id}`;
                                  navigate(url);    }}>Get Details </Button>
          
          </Card.Body>
        </Card>

        })}
 <span className="ShoppingCartIcon"  onClick={() => setShow(!show)}><ShoppingCartIcon/>{inputarr.length}</span>
 
      
       
      
     
      {show ? (
<table className='cart'>
{ inputarr.map(
            (info,ind)=>{ 
                return(
                 
                    <tr key={ind}>
                    <td>{info.name}</td>
                    <td>{info.marks}</td>
                
                </tr>
                
                )

            })
            
         }
<td >Total Amount{total}</td>
</table>
) : null}

    </div>
    
    </div>
  )


  
}