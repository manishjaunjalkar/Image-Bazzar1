import React from "react";


let DisplayImages=({images})=>{
    return(
        <div className="images">
        
            {
            images.map((val, index)=>(
                <img style={{width: "435px", height: "400px"}} key={index} src={val.urls.small} alt={val.alt_discription}/>
            )
            )
            }       
        
        </div>
    )
}

export default DisplayImages