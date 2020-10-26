import React, { useRef } from 'react'

export default function About() {
  const containerRef = useRef(null);

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
          <h1 className="h1">The Designer</h1>
          <a href="https://www.dragandobrijevic.com" target="_blank" rel="noopener noreferrer" className="button">Read More</a>
      </div>
      <div className="split right"
           onMouseEnter={() => {
            containerRef.current.classList.add('hover-right')
           }}
           onMouseLeave={() => {
            containerRef.current.classList.remove('hover-right')
          }}
      >
        <h1 className="h1">The Programmer</h1>
        <a href="https://www.dragandobrijevic.com" target="_blank" rel="noopener noreferrer" className="button">Read More</a>
      </div>
    </div>
    </div>
  )
}
