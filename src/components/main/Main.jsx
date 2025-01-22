import {useEffect, useState} from 'react';
import styles from './Main.module.css'
import {Card, CardContent, Typography, Box, TextField} from '@mui/material'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import {getMovies} from "../../api/getMovies.js";


const Main = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        
        let page = Math.random() * (10500 - 1) + 1;

        const fetchData = async() => {  
            const data = await getMovies(page);
            setMovies(data.docs);
        }
        fetchData();
    }, []);

    return (
        <>
            <main className={styles.container}>
                <section className={styles.main}>
                    <div className={styles.main__search}>
                        <TextField sx={{width: 400}} id="outlined-basic" label="Название фильма" variant="outlined" />
                        <DensityMediumIcon sx={{height: 50}} />
                    </div>

                    <div>
                        <h2>Топ 10 случайных фильмов</h2>
                    </div>

                    {/* <div className={styles.main__items}>
                        {movies.map(m =>
                            <Card className={styles["main_items-item"]} key={m.id} sx={{width: 220}}>
                                <CardContent>

                                    <Box component={'img'} src='https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg'/>

                                    <Typography component={'div'}>
                                        <b>{m.name === null ? m.alternativeName : m.name}</b>
                                    </Typography>
                                    <Typography>
                                        {m.year === null ? "Год неизвестен" : m.year + " г." }
                                    </Typography>

                                        {m.genres.map(g => <Typography color='blue'>{g.name}</Typography> )}     

                                </CardContent>
                            </Card>
                        )}
                    </div> */}
                </section>    
            </main>

        </>
    );
}


export default Main;