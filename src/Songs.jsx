//A list of their songs/albums including name,release date and cover art.
import React, { useState } from "react";
import "./Songs.css";
import Like from "./Like.jsx";

export default function Songs(){


 
  return (
    <>
    <ul>
        <li>Song 1 - 24/05/2023 <Like/> </li>
        <img src="https://marketplace.canva.com/EAFWz37wwl0/1/0/1600w/canva-black-minimalist-photocentric-rose-on-fire-hip-hop-album-cover-laJL2q01ZUU.jpg" alt=""/>
        <li>Song 2 - 12/01/1994 <Like/> </li>
        <img src="https://marketplace.canva.com/EAFWz37wwl0/1/0/1600w/canva-black-minimalist-photocentric-rose-on-fire-hip-hop-album-cover-laJL2q01ZUU.jpg" alt="" />
        <li>Song 3 - 25/11/2011 <Like/> </li>
        <img src="https://marketplace.canva.com/EAFWz37wwl0/1/0/1600w/canva-black-minimalist-photocentric-rose-on-fire-hip-hop-album-cover-laJL2q01ZUU.jpg" alt="" />
    </ul>
    </>
  )
}