import React, { useState, useEffect, useContext } from 'react';
import './index.css'
import Currency from '../../Currency';
import MyContext from '../../contexts/myContext'

const Cryptos = ({item}) => {
    const[price,setPrice] = useState('');
    const[circulating_supply,setCirculatingSupply] = useState('');
    const[market_cap,setMarketCap] = useState('');
    const { amount } = useContext(MyContext)

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
      } ,[item.market_cap,item.price,item.circulating_supply])

    return (
        <div className="card">
            <div className="card--header">
                <img src={item.logo_url} alt="" />
                <p>You can buy: {parseFloat(amount / item.price).toFixed(2)}</p>
            </div>
            <div className="info">
                <h2>{item.name}</h2>
                <p className="title">
                    Price: {price}
                </p>
                <p>Supply: {circulating_supply}</p>
                <p>Marketcap: {market_cap}</p>
            </div>
        </div>
    )
}

export default Cryptos;
