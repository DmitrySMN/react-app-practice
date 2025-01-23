import { useEffect, useState } from "react";
import styles from "./Main.module.css";
import { Card, CardContent, Typography, Box, TextField } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { getMovies } from "../../api/getMovies.js";
import { getMovieByTitle } from "../../api/getMovieByTitle.js";
import ClipLoader from "react-spinners/ClipLoader";
import { BeatLoader } from "react-spinners";

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(!loading);
        }, 2000);

        let randomPage = Math.random() * (10500 - 1) + 1;

        const fetchData = async () => {
            const data = await getMovies(randomPage);
            setMovies(data.docs);
        };
        fetchData();
    }, []);

    const handleInput = async () => {
        // setTimeout(() => {
        //     setLoading(!loading);
        // }, 2000);
        const data = await getMovieByTitle(title);
        setMovies(data.docs);
    };

    return (
        <>
            <main className={styles.container}>
                <section className={styles.main}>
                    <div className={styles.main__search}>
                        <div className={styles["main__search-wrapper"]}>
                            <input
                                className={styles["main__search-field"]}
                                type="text"
                                placeholder={"Название фильма"}
                                value={title}
                                onChange={(event) => {
                                    setTitle(event.target.value);
                                }}
                            />
                            <button
                                className={styles["main__search-button"]}
                                type={"submit"}
                                onClick={handleInput()}
                            >
                                Найти
                            </button>
                        </div>

                        <DensityMediumIcon sx={{ height: 50 }} />
                    </div>

                    <div>
                        <Typography>
                            <h2>Топ 10 популярных фильмов</h2>
                        </Typography>
                    </div>
                    <div className={styles.main__loading}>
                        <BeatLoader loading={loading} />
                    </div>

                    <div className={styles.main__items}>
                        {movies.map((m) => (
                            <Card
                                className={styles["main_items-item"]}
                                key={m.id}
                                sx={{ width: 220 }}
                            >
                                <CardContent>
                                    <Box component={"img"} src={m.poster.url} />

                                    <Typography component={"div"}>
                                        <b>
                                            {m.name === null
                                                ? m.alternativeName
                                                : m.name}
                                        </b>
                                    </Typography>
                                    <Typography>
                                        {m.year === null
                                            ? "Год неизвестен"
                                            : m.year + " г."}
                                    </Typography>

                                    {m.genres.map((g) => (
                                        <Typography color="blue">
                                            {g.name}
                                        </Typography>
                                    ))}
                                    <button className={styles["favorite-btn"]}>
                                        ♥
                                    </button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
};

export default Main;
