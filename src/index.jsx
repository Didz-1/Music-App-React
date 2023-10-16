import React from "react";
import {createRoot} from "react-dom/client"
import Artist from "./Artist.jsx";
import Songs from "./Songs.jsx";


const root = createRoot(document.getElementById("root"));
root.render(
    <>

    <Artist/>
    <hr />
    <Songs/>

    </>
);