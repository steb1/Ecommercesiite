import React, { Component } from 'react' 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Articles from './Components/Articles';
import Inscription from './Components/Inscription';
import { Route, Routes } from 'react-router-dom';
import Connection from './Components/Connection';



import Contact from './Components/Contact';

class App extends Component {
    render() {
        
        return (
        <div>
            <Navbar/>
            <Routes>
            <Route path='/' element={<Articles/>}/>
            <Route path='/contact'  element={<Contact/>}/>
            <Route path='/inscription' element={<Inscription/>}/>
            <Route path="/connection" element = {<Connection/>}/>
            </Routes>
            
            <Footer/>
        </div>
        )
    }
}

export default App;
