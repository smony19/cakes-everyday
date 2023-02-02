import React from "react";
import Images from "./Images";


const ShowCase = (prop)=> {
    return(
      <div className='cake'>
        <Images imgsrc={prop.imgsrc}/>
        <div className="fadedbox">
          <div className="title text cakeName"> {prop.name} </div>
        </div>
      </div>
    );
}



export default ShowCase;
