import React, { useState, useEffect, useContext } from 'react';
import MyContext from '../../contexts/myContext'

import Currency from '../../Currency';

import { Container } from './styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import BR_flag from '../../assets/brasil.png' 
import US_flag from '../../assets/estados-unidos.png' 

export default () => {
    const[dollar,setDollar] = useState([]);
    const { setAmount } = useContext(MyContext)
    const[value,setValue] = useState('');
    const[money,setMoney] = useState(0);


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
        setMoney(0)
        setValue('')
    };

    const handleAmountChange = (event) => {
        setMoney(event.target.value)
        if(currency === 20){
            setValue('U$: ' + parseFloat((event.target.value / dollar.low)).toFixed(2));
            setAmount(parseFloat((event.target.value / dollar.low)).toFixed(2))
        } else if(currency === 10){
            setValue('U$: ' + parseFloat((event.target.value)).toFixed(2));
            setAmount(parseFloat(event.target.value).toFixed(2))
        } else {
            setValue(' <-- Select one currency');
            setAmount(0);
        }
    };

    return (
        <Container>
            <div className="currency--select">
                <FormControl>
                    <InputLabel>Select one currency</InputLabel>
                        <Select
                            fullWidth
                            id="currencySelector"
                            value={currency}
                            onChange={handleChange}
                        >                            
                            <MenuItem value={20} style={{ alignItems: 'center' }}><img src={BR_flag} alt="br_flag" style={{ width: 30,height: 30 }}/>&nbsp; - Reais</MenuItem>
                            <MenuItem value={10} style={{ alignItems: 'center' }} ><img src={US_flag} alt="us_flag" style={{ width: 30,height: 30 }}/>&nbsp; - Dollares</MenuItem>
                        </Select>
                </FormControl>
            </div>
            <div className="currency--input">
                <div className="input">
                <TextField
                id="currencyAmount"
                  fullWidth
                  required
                  label="Insert avaible value"
                  variant="outlined"
                  margin="normal"
                  type="number"
                  onChange={handleAmountChange}
                  value={money}
                />
                </div>
                <div className="Dollar">
                    <p>{value}</p>
                </div>
            </div>
        </Container>
      );
}