import React, { useState, useEffect } from 'react';
import Currency from '../../Currency';

import { Container } from './styles';


const CurrencyInfo = () => {
    const[currencyList,setCurrencyList] = useState([]);

    useEffect(() => {
        const loadInfo = async () =>{        
            let list = await Currency.getCurrencyInfo();
            
            setCurrencyList({list}); 
        }
    
        loadInfo();
      } ,[])
    
    return (
        <Container >
            <div className="currency--info">
                <h3>Pairs: </h3>
               <div>BTC-BRL: R$ {currencyList.list ? currencyList.list.BTCBRL.low : ''}</div>
               <div>USD-BRL: R$ {currencyList.list ? currencyList.list.USDBRL.low : ''}</div>
               <div>EUR-BRL: R$ {currencyList.list ? currencyList.list.EURBRL.low : ''}</div>
            </div>
        </Container>
      );
}

export default CurrencyInfo;