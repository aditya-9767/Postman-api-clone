

import { makeStyles } from '@mui/styles';

const useStyele = makeStyles({
    logo: {
        width: 100,
        padding: 5
    }
})


const Header = () => {
    const classes = useStyele();
    const logo = 'https://miro.medium.com/max/802/1*dLWPk_rziSpWhPx1UWONbQ@2x.png';
    return(
        <img src={logo} alt="logo" className={classes.logo}/>
    )
}
export default Header;