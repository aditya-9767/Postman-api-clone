
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useContext, useState } from 'react';
import { DataContext } from '../context/DataProvider';
 
// Components
import Header from './Header';
import Form from './Form';
import SelectTab from './SelectTab';
import Response from './Response';
import ErrorScreen from './ErrorScreen';
import { checkParams } from '../utils/commonUtils';
import SnackBar from './SnackBar';
import { getData } from '../service/api';


const useStyle = makeStyles({

component:{
    width: '60%',
    margin: '20px auto 0 auto'
}

})

const Home = () => {
    const classes = useStyle();

    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [errorResponse, setErrorResponse] = useState(false);
    const [apiResponse, setApiResponse] = useState({});

    const { formData, jsonText, paramData, headerData } = useContext(DataContext);

    const onSendClick = async () => {
        if(!checkParams(formData, jsonText, paramData, headerData, setErrorMsg)){
            setError(true);
            return false;
        }

        let response = await getData(formData, jsonText, paramData, headerData);

        if(response === 'error'){
            setErrorResponse(true);
            return;
        }
        setErrorResponse(false);
        setApiResponse(response.data);

    }

    return(
        <>
       <Header/>

       <Box className={classes.component}>
        <Form onSendClick={onSendClick} />
        <SelectTab/>
        
        {errorResponse ? <ErrorScreen/>: <Response data={apiResponse}/>}
        { error && <SnackBar error={error} setError={setError} errorMsg={errorMsg} /> }
       </Box>
     
       </>
    )
}
export default Home;