import {useEffect, useState} from 'react';
import styles from './Main.module.css'
import {Card, CardContent, Typography, Box, TextField} from '@mui/material'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import {getMovies} from "../../api/getMovies.js";


const Main = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const fetchData = async() => {
            const data = await getMovies();
            //console.log(data.docs);
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

                    <div className={styles.main__items}>
                        {movies.map(m =>
                            <Card key={m.id} sx={{width: 220}}>
                                <CardContent>
                                    <Typography component={'div'}>
                                        {m.name === null ? m.alternativeName : m.name}
                                    </Typography>
                                    <Typography>
                                        {m.year === null ? "Год неизвестен" : m.year + " г." }
                                    </Typography>
                                </CardContent>
                            </Card>

                        )}
                    </div>
                </section>    
            </main>

        </>
    );
}


export default Main;