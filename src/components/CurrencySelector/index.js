import React, { useState, useEffect } from 'react';
import Currency from '../../Currency';

import { Container } from './styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import BR_flag from '../../assets/brasil.png' 
import US_flag from '../../assets/estados-unidos.png' 

export default (item) => {
    const[dollar,setDollar] = useState([]);
    const[amount,setAmount] = useState('');


    useEffect(() => {
        const loadAll = async () =>{
          
          let list2 = await Currency.getCurrencyInfo();
          setDollar(list2.USDBRL); 
    
        }
    
        loadAll();
      } ,[])

    const [currency, setCurrency] = React.useState('');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const handleAmountChange = (event) => {
        if(currency == 20){
            setAmount('U$: ' + parseFloat((event.target.value / dollar.low)).toFixed(2));
        } else if(currency == 10){
            setAmount('U$: ' + parseFloat((event.target.value)).toFixed(2));
        } else {
            setAmount(' <-- Selecione a moeda disponivel');
        }
    };

    return (
        <Container className="card">
            <div className="currency--select">
                <FormControl>
                    <InputLabel>Escolha a moeda disponivel</InputLabel>
                        <Select
                            fullWidth
                            id="currencySelector"
                            value={currency}
                            onChange={handleChange}
                        >                            
                            <MenuItem value={20} style={{ alignItems: 'center' }}><img src={BR_flag} alt="br_flag" style={{ width: 30,height: 30 }}/>&nbsp; - Reais</MenuItem>
                            <MenuItem value={10} style={{ alignItems: 'center' }} ><img src={US_flag} alt="us_flag" style={{ width: 30,height: 30 }}/>&nbsp; - Dolares</MenuItem>
                        </Select>
                </FormControl>
            </div>
            <div className="currency--input">
                <div className="input">
                <TextField
                  fullWidth
                  required
                  label="Insira o valor Disponivel"
                  variant="outlined"
                  margin="normal"
                  type="number"
                  onChange={handleAmountChange}
                />
                </div>
                <div className="Dollar">
                    <a>{amount}</a>
                </div>
            </div>
        </Container>
      );
}