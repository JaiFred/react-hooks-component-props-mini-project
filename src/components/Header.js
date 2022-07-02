import React from "react";
import blogData from "../data/blog";

console.log(blogData.name)

function Header ({ name }) {
//     console.log(blogData)
// const header = blogData.map((blogTitle) => (
// <blogData title = {blogTitle.name}/>
// ))
return(
    <header id="header">
        <h1>{name}</h1>
    </header>
    )
}

export default Header