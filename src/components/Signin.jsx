import React from 'react'
import { auth } from '../firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { Link } from 'react-router-dom'
const style = {
  button: `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`,
  container: `flex flex-col justify-center items-center h-[90vh]`
}

const Signin = () => {
  return (
    <div className={style.container}>
      <Link to='/signout'>
        <button
          className={style.button}
          onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
        >
          Sign in with Google
        </button>
      </Link>
    </div>
  )
}

export default Signin
