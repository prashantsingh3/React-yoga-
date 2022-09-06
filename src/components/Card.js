import "./Card.css"
import Button from "../utils/Button"
import Data from "./Data"

import React from 'react'

function Card({d}) {
  return (
      <>   
      <div  className="container"> 
    {Data.map((ele,index)=>
 <div key={index}>
 <img src={ele.image} alt="ima"/>
 <h1>{ele.title}</h1>
 <div className="para">{ele.content}</div>
 {/* <p>{d}</p> */}
 <Button inBtn ="Continue Reading"/>
</div>

)}
   

    </div>
</>
   
  )
}

export default Card