
import React, {useContext} from "react";
import {mycontext} from "./Context";

function Article()
{
   const {data, setdata}= useContext (mycontext) ;
    return(


    <div>

{ data.map((item)=>
<div>
<h1> {item.heading}</h1>
<h4>{item.Articletil}</h4>
<p> {item.para}  
</p>
</div>
)


}

    
    </div>
);


}
export default Article;