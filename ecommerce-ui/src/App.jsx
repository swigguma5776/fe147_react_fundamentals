//external imports
import { Routes, Route } from 'react-router-dom';
//internal imports
import HomePage from './components/HomePage/HomePage';
import CustomerList from './components/CustomerList/CustomerList';
import CustomerForm from './components/CustomerForm/CustomerForm';
import NotFound from './components/NotFound/NotFound';
import NavBar from './components/NavBar/NavBar';
import './App.css'; 

function App() {


  return (
    <div id="app-container">
      <NavBar />
      <Routes>
        {/* 2 most important routes, HomePage/base and then NotFound */}
        <Route path='/' element={ <HomePage />} />
        {/* Catch All Route for undefined paths */}
        <Route path='*' element={ <NotFound />} />
        <Route path='/customers' element={ <CustomerList />} />
        <Route path='/add-customer' element={ <CustomerForm />} />
        <Route path='/edit-customers/:id' element={ <CustomerForm />} />
      </Routes>
    </div>
  )
}

export default App
