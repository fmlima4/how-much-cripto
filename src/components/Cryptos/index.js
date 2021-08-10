import React from 'react';
import './index.css'

export default ({item}) => {
    return (
        <div className="card">
            <img src={item.logo_url} alt="" />
            <div className="info">
                <h2>{item.name}</h2>
                <p className="title">
                    Preço: {item.price}
                </p>
                <p>Circulação: {item.circulating_supply}</p>
                <p>Marketcap: {item.market_cap}</p>
            </div>
        </div>
    )
}