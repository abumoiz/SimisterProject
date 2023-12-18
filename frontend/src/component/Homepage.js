


// import Card from "./component/Card";
// //import Context from "./component/Context";
// import Dashboardweb from "./component/Dashboardweb";
// import Footer from "./component/Footer";
// import Footerweb from "./component/Footerweb";
// import Frontcontent from "./component/Frontcontent";
// import Morecards from "./component/Morecards";
// //import NaavBar from "./component/Naavbar";
// import Navbar from "./component/Navbar";
// import Pictures from "./component/Pictures";
// import Slider from "./component/Slider";
// //import TCard from "./component/TCard";
// import TSelling from "./component/TSelling";
// import Videoback from "./component/Videoback";
// import Videos from "./component/Videos";
import {Route, Router, Routes} from "react-router-dom";
import Article from "./Article";
import Card from "./Card";
import Dashboardweb from "./Dashboardweb";
import Footer from "./Footer";
import Footerweb from "./Footerweb";
import Frontcontent from "./Frontcontent";
import LaligaTable from "./LaligaTable";
import Morecards from "./Morecards";
import Navbar from "./Navbar";
import Pictures from "./Pictures";
import Slider from "./Slider";
import TSelling from "./TSelling";
import Useeffect from "./Useeffect";
import Videoback from "./Videoback";
import Videos from "./Videos";
import Aboutus from "../Pages.js/Aboutus";
import Testing from "../Testing";
import Loginp from "../Pages.js/Loginp";
import Signup from "../Pages.js/Signup";
import UserProfile from "../Pages.js/Profile";
import Admintwo from "./Admintwo";
import PublishersTable from "./PublishersTable";
import AudienceSection from "./AudienceSection";







function Homepage()
{
return(

    <>



    {/* <Context> */}
{/* <NaavBar/> */}
<Navbar/>

<Frontcontent/>

<Videoback/>
{/* <Article/> */}


<Slider/>
{/* <Signup/> */}
{/* <UserProfile/> */}
{/* <Useeffect/> */}

<Card/>



<Pictures/>

<TSelling/>
    

    <Videos/>

    {/* <TCard/> */}






<Morecards/>

    <Footer/>




    <Footerweb/>

 
    
    {/* </Context> */}
   
    </>
)



}
export default Homepage;