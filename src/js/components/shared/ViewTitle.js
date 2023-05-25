import React from "react"


export default function ViewTitle(props){
  return(
    <div className="chat-name-container">
      <span className="name">{props.text}</span>
      
    </div>
  )
}