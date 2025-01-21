import { useState } from 'react';
import styles from './Main.module.css'
import {Card, CardContent, Typography, Box, TextField} from '@mui/material'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const Main = () => {
    
    const [inputValue, setInputValue] = useState('');
    
    return (
        <>
            <main className={styles.container}>
                <section className={styles.main}>
                    <div className={styles.main__search}>
                        <TextField sx={{width: 400}} id="outlined-basic" label="Название фильма" variant="outlined" />
                        <DensityMediumIcon sx={{height: 50}} />
                    </div>
                    

                    <Card sx={{maxWidth: 220}}>
                        <CardContent>
                            <Box component={'img'} src='https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg'/>
                            <Typography component={'div'}>
                                Название
                            </Typography>
                            <Typography>
                                2025 г.
                            </Typography>
                        </CardContent>
                    </Card>
                </section>    
            </main>          
        </>
    );
}


export default Main;