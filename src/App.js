import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Header from './Componats/Header/Header';
import Story from './Componats/Form/Story';
import ViewStory from './Componats/View/ViewStory';
import UpdateStory from './Componats/UpdateStory/UpdateStory';
// import { useSelector } from 'react-redux';

function App() {

  // const { isEdit } = useSelector(state => state.StoryReducer);
  // console.log(isEdit);
  return (
    <>
      <BrowserRouter>
        <Header logo='images/Unicorn-logo.png' />
        <Routes>
          <Route path='/updateStory' element={<UpdateStory />} />
          <Route path='/createStory' element={<Story />} />
          <Route path='/' element={<ViewStory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
