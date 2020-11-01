import React, { useState, useRef, useEffect } from 'react'

export default function About() {
  const containerRef = useRef(null);
  const [name, setName] = useState('007');
  const inputNameRef = useRef(null);

  useEffect(() => {
    let name = localStorage.getItem('name')
    if ( name !== '007' && name !== 'undefined') {
      // localStorage.setItem('name', '007');
      setName(name);
      console.log('setNameEffect  '+ name );
    }
  }, [name])

  const addNameHandler = e => {
    e.preventDefault();
    const newName = inputNameRef.current.value;
    setName(newName);
    localStorage.setItem('name', newName);
    console.log("setNameHandler" + newName);
    inputNameRef.current.value = "";
  }

  // Load current value of name
  // let displayName = document.querySelector('#display-name');
  // displayName.innerHTML = localStorage.getItem('name');

  // Start animation - hello
  // displayName.parentElement.style.animationPlayState = 'running';

  // if (localStorage.getItem('name') !== '007') {

  //     // Delete form
  //     document.querySelector('.btn').parentElement.remove();

  //     // Start animation - channelsA
  //     document.querySelector('#channels').style.animationPlayState = 'running';
  // } 
  // else {

  //     // On click get name
  //     document.querySelector('#form').onsubmit = () => {
      
  //         let name = document.querySelector('#name').value;
  //         console.log(name)

  //         // Set name
  //         let displayName = document.querySelector('#display-name');
  //         displayName.innerHTML = name;
  //         localStorage.setItem('name', name);

  //         // Start animation - hello
  //         displayName.parentElement.style.animationPlayState = 'running';

  //         // Start animation - channelsA
  //         document.querySelector('#channels').style.animationPlayState = 'running';

  //         // Delete form
  //         document.querySelector('.btn').parentElement.remove();

  //         return false;

  //     }
  // }


  return (
    <div className="boxAbout">
    <div ref={containerRef} className="container">
      <div className="split left" 
          onMouseEnter={() => {
            containerRef.current.classList.add('hover-left')
          }}
          onMouseLeave={() => {
            containerRef.current.classList.remove('hover-left')
          }}
      >
          <form id="form" onSubmit={addNameHandler}>
            <input ref={inputNameRef} id="name" autoComplete="off" autoFocus placeholder="Name" type="text"/>
            <button className="btn" type="submit">Add</button>
          </form>
    
          <div id="hello-name">
            Hello <span id="display-name">{name}</span>!
          </div>

          {/* <h1 className="h1">The Designer</h1>
          <a href="https://www.dragandobrijevic.com" target="_blank" rel="noopener noreferrer" className="button">Read More</a> */}
      </div>
      <div className="split right"
           onMouseEnter={() => {
            containerRef.current.classList.add('hover-right')
           }}
           onMouseLeave={() => {
            containerRef.current.classList.remove('hover-right')
          }}
      >
        <h1 className="h1">React Todo List App</h1>
        <h2 className="h2">Created by Dragan Dobrijević</h2>
        <a href="https://www.dragandobrijevic.com" target="_blank" rel="noopener noreferrer" className="button">Read More</a>
      </div>
    </div>
    </div>
  )
}
