import React, { useState, useEffect } from 'react';
import './App.css'
import MyContext from './contexts/myContext'
import Crypto from './Crypto';
import Cryptos from './components/Cryptos';
import CurrencySelector from './components/CurrencySelector';
import CurrencyInfo from './components/CurrencyInfo';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import { withStyles } from '@material-ui/core/styles';

export default () => {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#52d869',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

  const[criptoList,setCriptoList] = useState([]);
  const[amount,setAmount] = useState(0);

  useEffect(() => {
    const loadAll = async () =>{
      let list = await Crypto.getCriptosInfo();
      setCriptoList(list);
    
    }

    loadAll();
  } ,[])

  return (
    <MyContext.Provider value={{amount, setAmount}}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <>
          <GlobalStyles />
          <header className={isDarkTheme ? 'darkTheme': 'lightTheme'}>
            <h3>How much crypto can i buy ?</h3>
            <FormControlLabel
              control={<IOSSwitch checked={isDarkTheme} onChange={toggleTheme} name="isDarkmode" />}
              label={isDarkTheme ? ' darkTheme': 'lightTheme'}
            />
          </header>
          <div className="app--page">
            <section className="app--info">
              <CurrencySelector amount={amount}/> 
              <CurrencyInfo/> 
            </section>
            <section className="lists">
              {criptoList.map((item,key)=>(
                <ul>
                  <Cryptos key={key} item={item} amount={amount}/>
                </ul>
              ))}
            </section>

          </div>
        </>
      </ThemeProvider>
    </MyContext.Provider>
  );
}

