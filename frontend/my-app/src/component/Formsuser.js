
import {Route, Routes} from "react-router-dom";
import Add from "./Add";
import Update from "./Update";
import Delete from "./Delete";
import Create from "./Create";

function Formsuser()
{

return(
<>





 <Routes>
          <Route path="/dashboard/add" element={<Add/>}/>
          <Route path ="/dashboard/update" element={<Update/>}/>
          <Route path ="/dashboard/delete" element={<Delete/>}/>
          <Route path ="/dashboard/create" element={<Create/>}/>
         
         </Routes>

</>

)

}

export default Formsuser;