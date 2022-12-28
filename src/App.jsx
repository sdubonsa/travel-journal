import React from 'react'
import data from './data'

import Entry from './components/Entry'

function App() {

  const travelData = data.map(e => {
    return (
      <Entry
        key={e.id}
        {...e}
      />
    )
  })

  return (
    <div className='content'>
      {travelData}
    </div>
  )
}

export default App
