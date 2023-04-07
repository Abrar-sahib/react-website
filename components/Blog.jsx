import React, {useState} from 'react';
import "./Blog.css";
import { blog } from './BlogDate';

function Blog() {

  const [selectedObject, setSelectedObject] = useState(blog[0]);

  const handleClick = (id) => {
    const selected = blog.find((obj) => obj.id === id);
    setSelectedObject(selected);
  };



  return (
    <div className='section'>
      <div className="outer flex-col">
        <div id='blog' className="blog-titel">
          <h1>OUR BLOG</h1>
        </div>
        <div className="cat flex-col">
          <div className="blog-nav flex-row">
            <ul className='blog-navl flex-row'>
              {blog.map((obj) => (
                <li key={obj.id}>
                  <button  onClick={() => handleClick(obj.id)}>{obj.name}</button>
                </li>
              ))}
            </ul>
          </div>
          <div key={selectedObject.id} className="blog-dis flex-row">
            <div className="blog-dis-left flex-col">
              <h4>A-ROOM FOR :</h4>
              <div className="blog-left flex-col">
                <h1>{selectedObject.name}</h1>
              <h5>
                  {selectedObject.h5}
              </h5>
              </div>
              <div className="left-btn">
                <button>LEARN MORE</button>
              </div>
              
            </div>
            <div className="blog-dis-right">
              <img src={selectedObject.img} alt="server" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog