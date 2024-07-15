import { createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/notFound';
import Login from './pages/login';
import CvUpload from './admin/cvUpload';
import Signup from './pages/signup';
import MainLayout from './pages/mainLayout'; 
import Admindash from './admin/admindash';
import UserCvList from './admin/userCvList';
import UserCvView from './admin/userCvView';
import HiredCvList from './admin/hiredCvList';
import SchInterview from './admin/schInterview';
import Interviewer from './admin/interviewer';
import AddInterviewer from './admin/interviewerAdd';
import SendRejection from './admin/sendRejection';
import AssessmentAsign from './admin/assessmentAsign';
import Bgcheck from './admin/bgcheck';
import SendOfferLetter from './admin/sendOfferLetter';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },

    {
        path: '/signup',
        element: <Signup />,
    },
    {
        element: <MainLayout />, 
        children: [
            
            {
                path: '/admindash',
                element: <Admindash />,
            },
            {
                path: '/cvupload',
                element: <CvUpload />,
            },
            {
                path: '/usercvlist',
                element: <UserCvList />,
            },
            {
                path: '/hiredcvlist',
                element: <HiredCvList />,
            },
            {
                path: '/usercvview',
                element: <UserCvView />,
            },
            {
                path: '/schinterview',
                element: <SchInterview />,
            },
            {
                path: '/interviewer',
                element: <Interviewer />,
            },
            {
                path: '/addinterviewer',
                element: <AddInterviewer />,
            },
            {
                path: '/assessmentasign',
                element: <AssessmentAsign />,
            },
            {
                path: '/sendrejection',
                element: <SendRejection />,
            },
            {
                path: '/sendofferletter',
                element: <SendOfferLetter />,
            },
            {
                path: '/bgcheck',
                element: <Bgcheck />,
            },
        ],
    },
    {
        path: '/*',
        element: <NotFound />,
    },
]);

export default router;
