import React, { useState } from 'react'
import './App.css'
import Header from './Header'

import JobListing from './JobListing'

function App() {

  return (
    <div className='App'>
      <Header />
      <div className="main">
        <JobListing />
      </div>
    </div>


  )
}

export default App