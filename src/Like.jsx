import React, { useState } from "react";
import "./Songs.css";


export default function Like(){
    const [liked, setLiked] = useState("♡");

    const like = () => {
        if (liked == "♥"){
            setLiked(prevState => "♡");
        } else {
            setLiked(prevState => "♥");
        }   
        
    }
 
  return (
    <>
    <ul>
      <button onClick={like}>{liked}</button> 
    </ul>
    </>
  )
}