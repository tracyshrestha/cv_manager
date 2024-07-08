import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/notFound";
import Login from "./pages/login";
import Login2 from "./pages/login2";
import CvUpload from "./admin/cvUpload";
import Signup from "./pages/signup";
import Sidebar from "./admin/sidebar";
import Admindash from "./admin/admindash";
import UserCvList from "./admin/userCvList";
import UserCvView from "./admin/userCvView";
import SchInterview from "./admin/schInterview";
import SendRejection from "./admin/sendRejection";
import AssessmentAsign from "./admin/assessmentAsign";
import Bgcheck from "./admin/bgcheck";
import SendOfferLetter from "./admin/sendOfferLetter";
const router = createBrowserRouter([
    
    {
        path: "/",
        element: <Login />
       
    },
    {
        path: "/login2",
        element: <Login2 />
       
    },

    {
        path: "/signup",
        element: <Signup />
       
    },        
    {
        path: "/sidebar",
        element: <Sidebar />
       
    },        
    {
        path: "/admindash",
        element: <Admindash />
       
    },
    {
        path: "/cvupload",
        element: <CvUpload />
       
    },
    {
        path: "/usercvlist",
        element: <UserCvList />
       
    },
    {
        path: "/usercvview",
        element: <UserCvView />
       
    },
    {
        path: "/schinterview",
        element: <SchInterview />
       
    },
    {
        path: "/assessmentasign",
        element: <AssessmentAsign />
       
    },
    {
        path: "/sendrejection",
        element: <SendRejection />
       
    },
    {
        path: "/sendofferletter",
        element: <SendOfferLetter />
       
    },
    {
        path: "/bgcheck",
        element: <Bgcheck />
       
    },
    {
        path: "/*",
        element: <NotFound />
       
    }


   
]);
export default router;
