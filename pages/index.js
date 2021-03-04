import React from 'react';
import axios from 'axios';
import Link from 'next/link'
import Header from '../components/Header';
// export const config = { amp: true };

const Home = () => {

  const saveNans = async () => {
   await axios.post('/api/Nan/create')
   .then(res=> {
     console.log(res);
   })
   .catch(err=>{
     console.log(err);
   })
  }
  return (
    <div className="container">
      <Header/>
    </div>
  )
};

export default Home;