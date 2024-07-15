import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
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
import ProtectedRoute from './ProtectedRoute';

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
                element: <ProtectedRoute element={<Admindash />} />,
            },
            {
                path: '/cvupload',
                element: <ProtectedRoute element={<CvUpload />} />,
            },
            {
                path: '/usercvlist',
                element: <ProtectedRoute element={<UserCvList />} />,
            },
            {
                path: '/hiredcvlist',
                element: <ProtectedRoute element={<HiredCvList />} />,
            },
            {
                path: '/usercvview',
                element: <ProtectedRoute element={<UserCvView />} />,
            },
            {
                path: '/schinterview',
                element: <ProtectedRoute element={<SchInterview />} />,
            },
            {
                path: '/interviewer',
                element: <ProtectedRoute element={<Interviewer />} />,
            },
            {
                path: '/addinterviewer',
                element: <ProtectedRoute element={<AddInterviewer />} />,
            },
            {
                path: '/assessmentasign',
                element: <ProtectedRoute element={<AssessmentAsign />} />,
            },
            {
                path: '/sendrejection',
                element: <ProtectedRoute element={<SendRejection />} />,
            },
            {
                path: '/sendofferletter',
                element: <ProtectedRoute element={<SendOfferLetter />} />,
            },
            {
                path: '/bgcheck',
                element: <ProtectedRoute element={<Bgcheck />} />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default router;
