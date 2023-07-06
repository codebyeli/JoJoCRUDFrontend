import './App.css';
import GetForm from './components/GetForm';
import GetTitle from './components/GetTitle';
import GroupButtons from './components/GroupButtons';
import PostForm from './components/PostForm';
import PutForm from './components/PutForm';
import DeleteForm from './components/DeleteForm';
import Navbar from './components/Navbar';
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import GetPage from './pages/GetPage';
import PostPage from './pages/PostPage';
import PutPage from './pages/PutPage';
import DeletePage from './pages/DeletePage';
import HelpPage from './components/HelpPage';

function App() {
  return (
    <>
    <Navbar/>
    <HelpPage/>
    </>
  );
}

export default App;
