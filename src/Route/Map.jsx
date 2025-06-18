import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../NavBar_BLock/Layout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ResetPassword from "../Pages/ResetPassword";
import ProfileContainer from "../UserProfile/ProfileContainer";
import MyAccount from "../UserProfile/UserProfilePages/MyAccount";
import AddProfile from "../UserProfile/UserProfilePages/AddProfile";
import ChangePassword from "../UserProfile/UserProfilePages/ChangePassword";
import UploadPhoto from "../UserProfile/UserProfilePages/UploadPhoto";
import Settings from "../UserProfile/UserProfilePages/Settings";
import AdminContainer from "../Admin/AdminContainer";
import CreateAlbum from "../Admin/AlbumPages/CreateAlbum";
import AlbumContainer from "../AlbumLandingPages/AlbumContainer";
import Albums from "../AlbumLandingPages/AlbumPages/Albums";
import AlbumDetails from "../AlbumLandingPages/AlbumPages/AlbumDetails";

export let MyMap = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // {
      //   path: "/",
      //   element: <Home />,
      // },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/ResetPassword",
        element: <ResetPassword />,
      },

      {
        path: "/ProfileContainer",
        element: <ProfileContainer />,
        children: [
          {
            index: true,
            element: <MyAccount />,
          },
          {
            path: "AddProfile",
            element: <AddProfile />,
          },
          {
            path: "ChangePassword",
            element: <ChangePassword />,
          },
          {
            path: "UploadPhoto",
            element: <UploadPhoto />,
          },
          {
            path: "Settings",
            element: <Settings />,
          },
        ],
      },
      {
        path: "/AdminContainer",
        element: <AdminContainer />,
        children:[
          {
            index: true,
            element:<CreateAlbum/>
          }
        ]
      },
      {
        path:"/",
        element:<AlbumContainer/>,
        children:[
          {
            index:true,
            element:<Albums/>
          },
          {
            path:"albumDetails/:title",
            element:<AlbumDetails/>
          }
        ]
      }
    ],
  },
]);
