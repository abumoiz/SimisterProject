import {Route, Routes} from "react-router-dom";
import Add from "./Add";
import Update from "./Update";
import PublishersTable from "./PublishersTable";


function Hometwo()
{

    return (
    
    <div>

<Routes>
<Route path="/dashboard/add" element={<Add/>}/>
 <Route path ="/dashboard/update" element={<Update/>}/>
<Route path="/dashboard/publisher" element={<PublishersTable/>} />

</Routes>


    </div>
    
    )
}
export default Hometwo;