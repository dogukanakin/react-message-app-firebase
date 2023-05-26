import React from 'react'
import Navbar from './components/Navbar'
import Signin from './components/Signin'

const style = {
  appContainer:
    ' max-w-[728px] mx-auto text-center bg-gray-100 rounded-lg shadow-xl',
  sectionContainer: 'flex flex-col h-[90vh] mt-10 relative'
}

// const style = {
//   appContainer: `max-w-[728px] mx-auto text-center`,
//   sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`
// }

const App = () => {
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />
        <Signin />
      </section>
    </div>
  )
}

export default App
