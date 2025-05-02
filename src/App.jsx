import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { AppRoutes } from './routes/AppRoutes'

function App() {

  return (
    <div className='dark:bg-slate-800'>
      <Header/>
      <AppRoutes/>
      <Footer/>
    </div>    
  )
}

export default App
