import React from 'react'
import './Home.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setcountries } from '../../store/actions/countries';
import  Card  from "../../components/Card";
import { useSelector } from 'react-redux';


const Home = () => {
  const dispatch =useDispatch();
  useEffect(()=> {
    const fetchData =async()=> {
      const response =await axios.get("https://restcountries.com/v3.1/all")
     dispatch(setcountries(response.data));
    }
    fetchData()
  },[])

     const countries =useSelector((state)=> state.countries);


    console.log(countries);
  

return (  
  <div className='home'>   
{countries.map((countries,index)=> {
  return <Card key={index} countries={countries}/>
})}
</div>

);
}
export default Home;

