import React, { useContext } from 'react'
import { myContext } from '../App'
import { useNavigate } from 'react-router-dom';



function Bloghead() {

        const {title} = useContext(myContext);
        
    const navigate = useNavigate();
  return (
    <div>
        <h2>Blog Title</h2>

        {title.map((item) => {
            return(
                <div key={item.id}>
                    <h3 onClick={()=> navigate(`/blogs/${item.id}`)}>{item.title}</h3>
                </div>
            )
        })}
        <button onClick={()=> navigate('/')}>Create Blog</button>
    </div>
  )
}

export default Bloghead