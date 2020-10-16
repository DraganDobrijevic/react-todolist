import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
      <h1>Dragan's Todo List</h1>
      <nav>
        <ul>
          <Link to="/" className="textDecorationNone">
            <li>Home</li>
          </Link>
          <Link to="/about" className="textDecorationNone">
            <li>About</li>
          </Link>
        </ul>
      </nav>    
    </div>
  )
}
