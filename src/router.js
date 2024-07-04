import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/notFound";
import Login from "./pages/login";
import CvUpload from "./pages/cvUpload";
import Signup from "./pages/signup";
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
        path: "/signup",
        element: <Signup />
       
    },        {
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
