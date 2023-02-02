import React from "react";

const Images = (prop) => {
    return(
        <img src={require(`../img/${prop.imgsrc}`)} alt='img'/>
    )
}

export default Images;