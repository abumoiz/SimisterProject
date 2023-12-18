//import logo from './logo.svg';
//import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./component/Homepage";
import Dashboardweb from "./component/Dashboardweb";
import Formsuser from "./component/Formsuser";
import { Context } from "./component/Context";
import Aboutus from "./Pages.js/Aboutus";
import Trending from "./Pages.js/Trending";
import Articlepage from "./Pages.js/Articlepage";
import Contactus from "./Pages.js/Contactus";
import Matchhighlights from "./Pages.js/Matchhighlights";
import Tables from "./Pages.js/Tables";
import UpcomingMatches from "./Pages.js/UpcomingMatches";

function App() {
  return (
    <div>
<Context>
  {/* <BrowserRouter> */}
<Routes>

  
  

< Route path="/" element= {<Homepage/>}/>
< Route path="/aboutus" element= {<Aboutus/>}/>
< Route path="/news" element= {<Trending/>}/>

< Route path="/articles" element= {<Articlepage/>}/>
< Route path="/contactus" element= {<Contactus/>}/>
< Route path="/matchhighlights" element= {<Matchhighlights/>}/>
< Route path="/pointstable" element= {<Tables/>}/>
< Route path="/upcomingmatches" element= {<UpcomingMatches/>}/>

< Route path="/home" element= {<Homepage/>}/>
< Route path="/dashboard" element= {<Dashboardweb/>}/>

<Route exact path="/*" element={<Dashboardweb/>} />


</Routes>
{/* </BrowserRouter> */}
</Context>
    </div>
  );
}

export default App;
