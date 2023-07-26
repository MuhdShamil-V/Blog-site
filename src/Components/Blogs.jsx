import React, { useContext } from 'react'
import { myContext } from '../App';
import { useParams } from 'react-router-dom';

function Blogs() {

    const {title} = useContext(myContext);
    const {id} = useParams();

    const selectedItem = title.find((item) => item.id === parseInt(id));
    
  return (
    <div>
        <h2>{selectedItem.title}</h2>
        <p>{selectedItem.body}</p>
    </div>
  )
}

export default Blogs