import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutme from './pages/Aboutme';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Skills from './pages/Skills';
import Studies from './pages/Studies';
import Error from './pages/Error404';
import Exp from './pages/Exp';
import Schools from './pages/Schools'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/about-me' element={<Aboutme/>}></Route>
  <Route path='/jobs' element={<Jobs/>}></Route>
  <Route path='/skills' element={<Skills/>}></Route>
  <Route path='/studies' element={<Studies/>}></Route>
  <Route path='*' element={<Error/>}></Route>
  <Route path='/jobs/:id' element={<Exp/>}></Route>
  <Route path='/studies/:id' element={<Schools/>}></Route>
</Routes>
</BrowserRouter>
);

