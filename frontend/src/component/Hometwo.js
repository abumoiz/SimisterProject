import {Route, Routes} from "react-router-dom";
import Add from "./Add";
import Update from "./Update";
import PublishersTable from "./PublishersTable";
import Customers from "./Customers";


function Hometwo()
{

    return (
    
    <div>

<Routes>
<Route path="/dashboard/add" element={<Add/>}/>
 <Route path ="/dashboard/update" element={<Update/>}/>
<Route path="/dashboard/publisher" element={<PublishersTable/>} />
<Route path="/customers"   element={<Customers/>} />

</Routes>


    </div>
    
    )
}
export default Hometwo;