import React from 'react'
import { AppContext } from './context/contextApi'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Feed from './components/Feed'
import SearchResults from './components/SearchResults'
import VideoDetails from './components/VideoDetails'
import VideoCard from './components/VideoCard'
import './index.css'

function App() {


  return (
    <>
      <AppContext >
        <BrowserRouter>
          <div className='h-full flex flex-col'>
            <Header />
            <Routes>
              <Route path='/' exact element={<Feed />} />
              <Route path='/searchResults/:searchQuery' element={<SearchResults />} />
              <Route path='/video/:id' element={<VideoDetails />} />

            </Routes>
          </div>
        </BrowserRouter>
      </AppContext>
    </>
  )
}

export default App
