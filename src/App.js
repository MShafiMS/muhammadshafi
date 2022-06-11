import './App.css';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import AllProjects from './components/Home/Projects/AllProjects';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import "animate.css/animate.min.css";
import ProjectView from './components/Home/Projects/ProjectView';
import About from './components/About';
import Skills from './components/Skills';
import Blogs from './components/Blogs';

function App() {
  return (
    
    <div className='bg-base-100'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/allprojects' element={<AllProjects></AllProjects>}></Route>
        <Route path='/projects/:id' element={<ProjectView></ProjectView>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/skills' element={<Skills></Skills>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
