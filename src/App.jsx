import './App.css'
import { Signin } from './components/Sign in/Signin';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Routes, Route } from "react-router-dom";
import { Manage } from './components/Dashboard/Manage';
import { MainPage } from './components/Dashboard/MainPage';
import { Details } from './components/Dashboard/Details/Details';
import { Create } from './components/Dashboard/Create/Create';

function App() {
  
  return (
    <>
    <Routes>
        <Route path='/' element={<Signin />}/>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='main' element={<MainPage />} />
          <Route index element={<MainPage />} />
          <Route path='manage' element={<Manage />}/>
          <Route path='details' element={<Details />}/>
          <Route path='create' element={<Create />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
