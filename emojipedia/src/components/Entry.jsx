import React from "react"


function Card(props){
return (
    <div className="term">
        <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
          </span> 
          <spn>{props.name}</spn>
        </dt>
        <dd>{props.description}</dd>
    
    </div>
  

)
}

export default Card