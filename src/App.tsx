import './App.css'
import { Login } from './components/Login'
import { Home } from './components/Home'
import { useState } from 'react'
import { UserCredential } from 'firebase/auth';

function App() {
  const [user, setUser] = useState<UserCredential | undefined>();
  return (
    <section className='w-screen h-screen grid grid-cols-1 justify-center bg-slate-200'>
      <Login user={user} setUser={setUser} />
      <Home user={user} setUser={setUser} />
    </section>
  )
}

export default App
