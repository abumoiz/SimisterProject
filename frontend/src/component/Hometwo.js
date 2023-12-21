import {Route, Routes} from "react-router-dom";
import Add from "./Add";
import Update from "./Update";
import PublishersTable from "./PublishersTable";
import Customers from "./Customers";
import AudienceEngagement from "./AudienceEngagement";


function Hometwo()
{

    return (
    
    <div>

<Routes>
<Route path="/dashboard/add" element={<Add/>}/>
 <Route path ="/dashboard/update" element={<Update/>}/>
<Route path="/dashboard/publisher" element={<PublishersTable/>} />
<Route path="/customers"   element={<Customers/>} />
<Route   path="/audienceengagement"   element={<AudienceEngagement/>}/>
</Routes>


    </div>
    
    )
}
export default Hometwo;