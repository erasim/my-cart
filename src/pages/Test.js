import React,{useState} from 'react';
export default function Test() {
    const[inputarr, setInputarr]= useState([]);
    const [data, setData]=useState({
        name:" ",
        marks:" "
    });
    let {name,marks}=data;
    function changehandle(e){
setData({...data,[e.target.name]:e.target.value})
    }
    
    function changehandle2(){ 
        setInputarr([...inputarr,{name,marks}])
    
        console.log(inputarr);
        console.log(data);
    }
  return (
    <div className='Rightbox'>
    <label>Student Name</label><input type="text" autoComplete='off'  value={data.name} name='name' onChange={changehandle} placeholder='Name'/><br/><br/>
    <label>Student Marks</label><input type="text" autoComplete='off'  value={data.marks} name='marks' onChange={changehandle} placeholder='Marks'/><br/><br/>
    <button  onClick={changehandle2}>Add In List</button>
    <table border={1} width="30%" cellPadding={10} >
        <tr>
            <td>Name</td>
            <td>marks</td>
        </tr>
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
    </div>
)}
