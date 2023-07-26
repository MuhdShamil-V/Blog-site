import React, { useContext, useRef } from 'react'
import { myContext } from '../App'
import { useNavigate } from 'react-router-dom';


function Createblog() {

    const navigate = useNavigate();

    const {title, setTitle} = useContext(myContext);

    const titleRef = useRef({});
    const blogRef = useRef({});

    const handleSubmit = () => {
        const newTitle = titleRef.current.value;
        const newBlog = blogRef.current.value;
        
        const value = {title: newTitle, body: newBlog, id: Date.now()}

        setTitle([...title, value])
        navigate('/bloghead');
    };

  return (
    <div>

        <input type='text' placeholder='enter blog title' ref={titleRef} />
        <input type='text' placeholder='enter the description' ref={blogRef} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Createblog