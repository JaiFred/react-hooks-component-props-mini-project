import React from "react";
import blogData from "../data/blog";

console.log(blogData.image)

function About ({ about, image = "https://via.placeholder.com/215"  }) {
    return(
        <aside>
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
}

export default About