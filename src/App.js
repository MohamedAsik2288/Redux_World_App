import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import CountryData from './Pages/CountryData/CountryData';
import Home from './Pages/Home/Home';
import countriesReducer from './store/reducers/countries';
import { Provider } from 'react-redux';
import {createStore} from 'redux'

const store=createStore(countriesReducer);
const App = () => {

  return (
    <Provider store={store}> 
  
    <Router>
      <Routes>
        <Route path='/country' exact element={<CountryData/>}/>
         <Route path="/home"  exact element={<Home/>}/>
        
      </Routes>
    </Router>
    </Provider>
  )
}

export default App