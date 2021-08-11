import React, { useState, useEffect } from 'react';
import './index.css'
import Currency from '../../Currency';

export default ({item}) => {
    const[price,setPrice] = useState('');
    const[circulating_supply,setCirculatingSupply] = useState('');
    const[market_cap,setMarketCap] = useState('');


    useEffect(() => {
        const loadAll = async () =>{
          
            let return_price = await Currency.format(item.price);
            let return_circulating_supply = await Currency.format(item.circulating_supply);
            let return_market_cap = await Currency.format(item.market_cap);
            setPrice(return_price); 
            setCirculatingSupply(return_circulating_supply); 
            setMarketCap(return_market_cap); 
    
        }
    
        loadAll();
      } ,[])
   

    return (
        <div className="card">
            <img src={item.logo_url} alt="" />
            <div className="info">
                <h2>{item.name}</h2>
                <p className="title">
                    Preço: {price}
                </p>
                <p>Circulação: {circulating_supply}</p>
                <p>Marketcap: {market_cap}</p>
            </div>
        </div>
    )
}