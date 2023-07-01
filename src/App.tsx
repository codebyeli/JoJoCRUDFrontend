import './App.css';
import GetForm from './components/GetForm';
import GetTitle from './components/GetTitle';
import GroupButtons from './components/GroupButtons';
import PostForm from './components/PostForm';
import PutForm from './components/PutForm';
import DeleteForm from './components/DeleteForm';
import Navbar from './components/Navbar';

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
