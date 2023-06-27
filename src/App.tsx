import './App.css';
import GetForm from './components/GetForm';
import GetTitle from './components/GetTitle';
import GroupButtons from './components/GroupButtons';
import PostForm from './components/PostForm';
import PutForm from './components/PutForm';
import DeleteForm from './components/DeleteForm';


function App() {
  return (
    <>
    <GetTitle/>
    <GroupButtons/>
    <GetForm/>
    <PostForm/>
    <PutForm/>
    <DeleteForm/>
    </>
  );
}

export default App;
