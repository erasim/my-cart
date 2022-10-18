import React,{useState, useEffect} from 'react'


export default function Popup() {
//     const [showElement,setShowElement] = useState(true)
//     useEffect(()=>{
//       setTimeout(function() {
//         setShowElement(false)
//            }, 3000);
//          },
//      [])
//   return (
//     <div className='Rightbox'>
// <div className='popup'>
// <p>Item added Sussesfully</p>
// </div>
//     </div>
//   )
// }

    const [showElement,setShowElement] = React.useState(true)
    useEffect(()=>{
      setTimeout(function() {
        setShowElement(false)
           }, 1000);
         },
     [])
        
    return(
        <div className='Rightbox'>
      <div className='popup'>
         {showElement?<p>Item Added Sussesfully</p>:<></>} 
      </div></div>
    )
  }