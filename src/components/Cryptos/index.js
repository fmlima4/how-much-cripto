import React, { useState, useEffect } from 'react';
import './index.css'
import Currency from '../../Currency';

export default ({item,amount}) => {
    const[price,setPrice] = useState('');
    const[circulating_supply,setCirculatingSupply] = useState('');
    const[market_cap,setMarketCap] = useState('');
    const[amountToBuy, setAmountToBuy ] = useState('')

    useEffect(() => {
        const loadAll = async () =>{
          
            let return_price = await Currency.format(item.price);
            let return_circulating_supply = await Currency.format(item.circulating_supply);
            let return_market_cap = await Currency.format(item.market_cap);
            let return_amount = await Currency.format((amount / (return_price.replace('$', ''))))
            setPrice(return_price); 
            setCirculatingSupply(return_circulating_supply); 
            setMarketCap(return_market_cap); 
            setAmountToBuy(return_amount); 
            
        }
    
        loadAll();
      } ,[])
   
    return (
        <div className="card">
            <div className="card--header">
                <img src={item.logo_url} alt="" />
                <p>Voce pode comprar: {amountToBuy}</p>


            </div>
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