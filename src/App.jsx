import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy} from 'react';

import MainLayout from './layouts/MainLayout';

const Home = lazy(()=> import('./pages/Homepage'));
const ExperiencePage = lazy(()=> import("./pages/ExperiencePage"))
const ViewProjectPage = lazy(()=> import("./pages/ViewProjectPage"))
const WorkWithMePage = lazy(()=> import("./pages/WorkWithMePage"))


import Loading from './components/Loading';

const App = () => {


// const [loading, setLoading] = useState(true);

// if(loading) {
//   setTimeout(()=>{
//     setLoading(false)
//   }, 5000)
// }

// useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 5000);
//     return () => clearTimeout(timer); // cleanup on unmount
//   }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<MainLayout />} >
              <Route index element={<Home />} /> 
              <Route path="/work_experience" element={<ExperiencePage />} />
              <Route path="/project/:id" element={<ViewProjectPage />} />
              <Route path='/define_the_project' element={<WorkWithMePage />} />
            </Route>
          </Routes>
        </Suspense>
    </>
  )
}

export default App