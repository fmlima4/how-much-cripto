import React, { useState, useEffect } from 'react';
import Currency from '../../Currency';

import { Container } from './styles';


export default () => {
    const[currencyList,setCurrencyList] = useState([]);

    useEffect(() => {
        const loadInfo = async () =>{        
            let list = await Currency.getCurrencyInfo();
            
            setCurrencyList({list}); 
        }
    
        loadInfo();
      } ,[])
    
      console.log(currencyList.list)

    return (
        <Container className="card">
            <div className="currency--info">
                <h3>Pares: </h3>
               <div>BTC-BRL: R$ {currencyList.list ? currencyList.list.BTCBRL.low : ''}</div>
               <div>USD-BRL: R$ {currencyList.list ? currencyList.list.USDBRL.low : ''}</div>
               <div>EUR-BRL: R$ {currencyList.list ? currencyList.list.EURBRL.low : ''}</div>
            </div>
        </Container>
      );
}