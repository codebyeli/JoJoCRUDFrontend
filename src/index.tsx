import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import GetPage from './pages/GetPage';
import PostPage from './pages/PostPage';
import PutPage from './pages/PutPage';
import DeletePage from './pages/DeletePage';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "get",
    element: <GetPage/>,
  },
  {
    path: "post",
    element: <PostPage/>,
  },
  {
    path: "put",
    element: <PutPage/>,
  },
  {
    path: "delete",
    element: <DeletePage/>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
<RouterProvider router={routes}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
