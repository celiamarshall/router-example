import React from 'react'
import { Link } from 'react-router-dom'

const Home = props => 
  <div>
    <h1>Welcome To the homepage</h1>
    <Link to='/page'>Page</Link>
  </div>

export default Home