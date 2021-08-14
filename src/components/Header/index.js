import React from 'react';
import './index.css'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default ({darkMode}) => {
    const [state, setState] = React.useState({
        isDarkmode: darkMode,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <header className={state.isDarkmode ? 'darkMode': 'lightMode'}>
            <FormControlLabel
                control={<Switch
                    checked={state.isDarkmode}
                    onChange={handleChange}
                    color="primary"
                    name="isDarkmode"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />}
            label={state.isDarkmode ? ' lightMode': 'darkMode'}
            />
        </header>
        
    )
}