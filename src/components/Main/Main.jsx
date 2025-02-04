import { useEffect, useState } from "react";
import styles from "./Main.module.css";
import { Typography } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { getMovieByKeyWords } from "../../api/getMovieByKeyWords.js";
import { BeatLoader } from "react-spinners";
import MovieCard from "../Movie-card/MovieCard.jsx";
import { getPremiereMovies } from "../../api/getPremiereMovies.js";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 800);
    const fetchData = async () => {
      const data = await getPremiereMovies();
      setMovies(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <main className={styles.container}>
        <section className={styles.main}>
          {/*<div className={styles.main__search}>*/}
          {/*  <div className={styles["main__search-wrapper"]}>*/}
          {/*    <input*/}
          {/*      className={styles["main__search-field"]}*/}
          {/*      type="text"*/}
          {/*      placeholder={"Название фильма"}*/}
          {/*      value={title}*/}
          {/*      onChange={(event) => {*/}
          {/*        setTitle(event.target.value);*/}
          {/*      }}*/}
          {/*    />*/}
          {/*    <button*/}
          {/*      className={styles["main__search-button"]}*/}
          {/*      type={"submit"}*/}
          {/*      onClick={handleInput}*/}
          {/*    >*/}
          {/*      Найти*/}
          {/*    </button>*/}
          {/*  </div>*/}

          {/*  <DensityMediumIcon sx={{ height: 50 }} />*/}
          {/*</div>*/}

          <div className={styles["main__title-content"]}>
            <Typography>
              <h2>Премьеры в феврале 2025</h2>
            </Typography>
            <DensityMediumIcon sx={{ height: 50 }} />
          </div>
          {loading ? (
            <div className={styles.main__loading}>
              <BeatLoader loading={loading} />
            </div>
          ) : (
            <div className={styles.main__items}>
              {movies.map((m) => (
                <MovieCard
                  key={m.kinopoiskId}
                  posterUrl={m.posterUrl}
                  title={m.nameRu}
                  genres={m.genres}
                  year={m.premiereRu}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Main;
