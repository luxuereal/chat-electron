import React from "react";
import { useNavigate} from 'react-router-dom';

export default function BackButton() {

  const navigate = useNavigate() 
  
  return (
    <button 
      onClick={() => navigate(-1)} 
      className="btn btn-outline-warning">Back
    </button>
  )
}