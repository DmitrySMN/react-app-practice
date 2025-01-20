import {AppBar, Toolbar, IconButton, Typography, createTheme, ThemeProvider, Stack, Button} from '@mui/material';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import {yellow, cyan} from '@mui/material/colors';


const Header = () => {
     const theme = createTheme({
         palette: {
             primary: cyan,
             secondary: {main: yellow[300]},
         },

         components: {
            MuiAppBar: {
                defaultProps: {
                    elevation: 0
                }
            }
         }
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar color="primary">
                    <Toolbar>
                        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                            <CurrencyBitcoinIcon />
                        </IconButton>
                        <Typography variant='h6' component={'div'} sx={{flexGrow: 1}}>
                            CRYPTOAPP
                        </Typography>
                        <Stack direction='row' spacing={2} >
                            <Button color='inherit'>Cryptocurrency</Button>
                            <Button color='inherit'>Pricing</Button>
                            <Button color='inherit'>About</Button>
                            <Button color='inherit'>LogIn</Button>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
            
        </>
    );
}


export default Header;