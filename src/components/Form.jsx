
import { Box, Select, MenuItem, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useContext } from 'react';

import { DataContext } from '../context/DataProvider';

const useStyle = makeStyles({
    component:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    
    select:{
        width: 150,
        height: 40
    },

    TextField:{
        width: '100%',
        background: '#F6F6F6'
    },

    button:{
        width: 100,
        height: 40,
        marginLeft: [5, '!important']
    }


})

const Form = ({ onSendClick }) => {
    const classes = useStyle();

    const { formData, setFormData } = useContext(DataContext);

    const handleChange = (e) => {
        setFormData({ ...formData, type: e.target.value })
       
    }

    const onUrlChange = (e) => {
        setFormData({ ...formData, url: e.target.value })
       
    }

    return(
      <Box className={classes.component}>
         <Select
        value={formData.type}
        label="POST"
        onChange={(e) => handleChange(e)}
        className={classes.select}
    >
        <MenuItem value={'POST'}>POST</MenuItem>
        <MenuItem value={'GET'}>GET</MenuItem>
        </Select>
      
      
        <TextField
        size='small'
        className={classes.TextField}
        onChange={(e) => onUrlChange(e)}
        />

    <Button className={classes.button} variant='contained' onClick={() => onSendClick()}>
        Send
    </Button>




      </Box>

     
    )
}

export default Form;