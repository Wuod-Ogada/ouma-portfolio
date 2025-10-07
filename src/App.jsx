import { Routes, Route } from 'react-router-dom';

// import NavHeader from './components/NavHeader';
// import Footer from './components/Footer';

import Home from './pages/Homepage';
import ExperiencePage from './pages/ExperiencePage';
import ViewProjectPage from './pages/ViewProjectPage';
import MainLayout from './layouts/MainLayout';
import WorkWithMePage from './pages/WorkWithMePage';

const App = () => {
  return (
    <>
      
    {/* <NavHeader />  */}
          <Routes>
            <Route path='/' element={<MainLayout />} >
              <Route index element={<Home />} /> 
              <Route path="/work_experience" element={<ExperiencePage />} />
              <Route path="/project/:id" element={<ViewProjectPage />} />
              <Route path='/define_the_project' element={<WorkWithMePage />} />
            </Route>
          </Routes>
    {/* <Footer /> */}
  
    </>
  )
}

export default App