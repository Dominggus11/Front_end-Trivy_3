import React from "react";

function Blog (props) {
    return (
        <div className="blog">
            <img src="https://placeimg.com/640/480/tech" alt="tech.jpg"/>
            <p>{props.tanggal}</p>
            <h2>{props.judul}</h2>
            <p>{props.summary}</p>
        </div>
    )
}

export default Blog;