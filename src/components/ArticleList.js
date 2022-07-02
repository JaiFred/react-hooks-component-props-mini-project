import React from "react";
import Article from "./Article";

function ArticleList ({ posts }) {
    console.log(posts)
const list = posts.map((eachPost) => (
<Article
 key={eachPost.id}
 title={eachPost.title}
 date={eachPost.date}
 preview={eachPost.preview}
 minutes={eachPost.minutes}
 />
))
return(
    <main>{list}</main>
)
}

export default ArticleList