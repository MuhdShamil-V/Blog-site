import { createContext, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Createblog from './Components/Createblog';
import Bloghead from './Components/Bloghead';
import Blogs from './Components/Blogs';

export const myContext = createContext();

function App() {

  const [title, setTitle] = useState([]);
 
 
  return (
    
      <div>
        <myContext.Provider value={{title, setTitle}}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element ={<Createblog />} />
              <Route path='/bloghead' element ={<Bloghead />} />
              <Route path='/blogs/:id' element ={<Blogs />} />
            </Routes>
          </BrowserRouter>

        </myContext.Provider>
        
      </div>

  )
}

export default App
