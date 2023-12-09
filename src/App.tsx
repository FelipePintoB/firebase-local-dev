import './App.css'
import { Login } from './components/Login'
import { Home } from './components/Home'

function App() {
  
  return (
    <section className='w-screen h-screen grid grid-cols-1 justify-center bg-slate-200'>
      <Login />
      <Home />
    </section>
  )
}

export default App
