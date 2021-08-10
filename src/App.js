import React, {useEffect, useState } from 'react';
import './App.css'
import Crypto from './Crypto';
import Header from './components/Header';
import Cryptos from './components/Cryptos';

export default () => {

  const[criptoList,setCriptoList] = useState([]);
  const[darkMode,setDarkMode] = useState(true);

  useEffect(() => {
    const loadAll = async () =>{
      let list = await Crypto.getCriptosInfo();
      setCriptoList(list); 

    }

    loadAll();
  } ,[])

  return(
    <div className="page">
      <Header darkMode={darkMode}/>

      <section className="lists">
        {criptoList.map((item,key)=>(
          <ul>
            <Cryptos key={key} item={item}/>
          </ul>
        ))}
      </section>

    </div>
  )
}