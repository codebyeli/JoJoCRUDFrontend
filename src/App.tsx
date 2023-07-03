import './App.css';
import GetForm from './components/GetForm';
import GetTitle from './components/GetTitle';
import GroupButtons from './components/GroupButtons';
import PostForm from './components/PostForm';
import PutForm from './components/PutForm';
import DeleteForm from './components/DeleteForm';
import Navbar from './components/Navbar';

/*
Glossary

Comments with suggestions that are done will have ✔
Comments with suggestions that are being considered or in progress will have -
Comments with suggestions that have been scrapped will have [x]
*/

/* 
  - Background image for the page should be killer queen's icon patterns with pink and purple as the color pallette.
  - Forms should be centered and have a rounded square as a background.
  - Frontpage will be the "Help page" with the user having to click any of the options in the Navbar to do the CRUD actions.
*/

function App() {
  return (
    <>
    <Navbar/>
    <div className='App'>
    <GetForm/>
    <PostForm/>
    <PutForm/>
    <DeleteForm/>
    </div>
    </>
  );
}

export default App;
